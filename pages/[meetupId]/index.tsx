import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MongoClient } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MeetupItemProps } from '../../lib/model';
import Head from 'next/head';

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}${process.env.MONGODB_CLUSTER}`
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const rawMeetups = await meetupsCollection.find().toArray();
  client.close();

  const paths = rawMeetups.map((meetup) => ({
    params: { meetupId: String(meetup._id) },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}${process.env.MONGODB_CLUSTER}`
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const rawMeetups = await meetupsCollection.find().toArray();
  client.close();

  const meetups = rawMeetups.map((meetup) => {
    return { ...meetup, _id: meetup._id.toString() };
  });

  const meetup = meetups.find(
    (meetup) => meetup._id === params?.meetupId?.toString()
  );

  return {
    props: {
      meetup,
    },
  };
};

interface MeetupDetailsProps {
  meetup: MeetupItemProps;
}

const MeetupDetails: NextPage<MeetupDetailsProps> = ({ meetup }) => {
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>
      <MeetupDetail meetup={meetup} />
    </>
  );
};

export default MeetupDetails;
