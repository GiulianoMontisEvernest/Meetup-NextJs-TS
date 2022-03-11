import { FC } from 'react';
import MeetupItem from './MeetupItem';
import { MeetupItemProps } from './MeetupItem';

import classes from './MeetupList.module.css';

interface MeetupListProps {
  meetups: MeetupItemProps[];
}

const MeetupList: FC<MeetupListProps> = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map(({ id, image, title, address }) => (
        <MeetupItem
          key={id}
          id={id}
          image={image}
          title={title}
          address={address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
