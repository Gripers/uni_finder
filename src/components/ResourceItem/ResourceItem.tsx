import styles from './ResourceItem.module.scss';

import Image from 'next/image';

import { IResource } from '@/types/resource.types';

const ResourceItem = ({ obj }: { obj: IResource }) => {
  return (
    <div className={styles.item}>
      <div className={styles.head}>
        <Image src={obj?.image} alt='' />
      </div>
      <div className={styles.body}>
        <ul>
          <li>
            <p>Course: </p>
            <b>{obj?.name}</b>
          </li>
          <li>
            <p>Founder: </p>
            <b>{obj?.founder}</b>
          </li>
          <li>
            <p>Cost: </p>
            <b>{obj?.price}</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResourceItem;
