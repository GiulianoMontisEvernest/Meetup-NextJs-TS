import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage: NextPage = () => {
  const router = useRouter();
  const handleAddMeetup = async (newMeetup: any) => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(newMeetup),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await fetch('/api/new-meetup', options);
      const data = await res.json();

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
};

export default NewMeetupPage;
