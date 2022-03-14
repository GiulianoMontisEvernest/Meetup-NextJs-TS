import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MongoClient } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MeetupItemProps } from '../../lib/model';

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
    fallback: false,
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
  return <MeetupDetail meetup={meetup} />;
};

export default MeetupDetails;
