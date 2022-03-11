import type { NextPage } from "next";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage: NextPage = () => {
    const handleAddMeetup = () => {}

    return (
        <NewMeetupForm onAddMeetup={handleAddMeetup}/>
    );
}

export default NewMeetupPage;