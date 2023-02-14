import styles from './Universities.module.scss';

import { univers_db } from '@/db/univers.db';
import Navbar from '@/components/Navbar/Navbar';
import UniverCard from '@/components/UniverCard/UniverCard';
import Footer from '@/components/Footer/Footer';

const Universities = () => {
  return (
    <>
      <Navbar />
      <header className={styles.header}>
        <div className={styles.search}>
          <input type='text' placeholder='Search Your Dream University' />
          <input type='button' value='Search' />
        </div>
      </header>
      <div className={styles.configurator}>
        <p>LOCATION</p>
      </div>
      <div className={styles.univers__wrapper}>
        {univers_db?.map((u) => (
          <UniverCard univer={u} key={u?.id} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Universities;
