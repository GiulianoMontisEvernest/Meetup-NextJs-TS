import { FC } from 'react';
import { MeetupItemProps } from '../../lib/model';

import classes from './MeetupDetail.module.css';

interface MeetupDetailProps {
  meetup: MeetupItemProps;
}

const MeetupDetail: FC<MeetupDetailProps> = ({
  meetup: { title, image, address, description },
}) => {
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
