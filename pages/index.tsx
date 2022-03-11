import type { NextPage } from 'next';
import Head from 'next/head';
import MeetupList from "../components/meetups/MeetupList";

import { dummyData } from "../lib/dummyData";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Meetup App</title>
        <meta name="description" content="Meetup app to type some NextJs stuff" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
        <MeetupList meetups={dummyData} />
    </div>
  );
};

export default HomePage;
