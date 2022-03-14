import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

import { MeetupItemProps } from '../lib/model';

export const getStaticProps: GetStaticProps = async () => {
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

  return {
    props: {
      meetups,
    },
    revalidate: 10,
  };
};

interface HomePageProps {
  meetups: MeetupItemProps[];
}

const HomePage: NextPage<HomePageProps> = ({ meetups }) => {
  return (
    <div>
      <Head>
        <title>Meetup App</title>
        <meta
          name="description"
          content="Meetup app to type some NextJs stuff"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <MeetupList meetups={meetups} />
    </div>
  );
};

export default HomePage;
