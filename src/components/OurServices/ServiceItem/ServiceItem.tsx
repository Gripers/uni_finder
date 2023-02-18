import styles from './ServiceItem.module.scss';

import Image from 'next/image';

import { IService } from '@/types/service.types';

const ServiceItem = ({ pic, title, description }: IService) => {
  return (
    <div className={styles.item}>
      <div className={styles.head}>
        <Image src={pic} alt='' />
      </div>
      <div className={styles.body}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
