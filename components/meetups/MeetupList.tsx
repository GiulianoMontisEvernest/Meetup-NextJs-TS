import { FC } from 'react';
import MeetupItem from './MeetupItem';
import { MeetupItemProps } from '../../lib/model';

import classes from './MeetupList.module.css';

interface MeetupListProps {
  meetups: MeetupItemProps[];
}

const MeetupList: FC<MeetupListProps> = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup._id} {...meetup} />
      ))}
    </ul>
  );
};

export default MeetupList;
