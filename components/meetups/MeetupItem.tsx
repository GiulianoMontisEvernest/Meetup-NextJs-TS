import { FC } from 'react';
import { useRouter } from 'next/router';
import Card from '../ui/Card';
import { MeetupItemProps } from '../../lib/model';

import classes from './MeetupItem.module.css';

const MeetupItem: FC<MeetupItemProps> = ({ _id, image, title, address }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${_id}`);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={handleClick}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
