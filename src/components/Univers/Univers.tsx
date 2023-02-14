import styles from './Univers.module.scss';

import dynamic from 'next/dynamic';

import { univers_db } from '@/db/univers.db';
import { IUniver } from '@/types/univer.types';
import { univers_carousel_settings } from './univers.carousel_settings';

import UniverCard from '../UniverCard/UniverCard';

const ReactOwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });

const Univers = () => {
  return (
    <section className={styles.univers}>
      <h1>Universities</h1>
      <ReactOwlCarousel
        {...univers_carousel_settings}
        className={styles.carousel}
      >
        {univers_db.map((univer: IUniver) => (
          <UniverCard univer={univer} key={univer?.id} />
        ))}
      </ReactOwlCarousel>
    </section>
  );
};

export default Univers;
