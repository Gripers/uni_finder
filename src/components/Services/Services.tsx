import styles from './Services.module.scss';

import Image from 'next/image';

import { services_db } from '@/db/services.db';

const Services = () => {
  return (
    <div className={styles.services}>
      <h1>Services</h1>
      <div className={styles.line}></div>
      <p>
        We provide students with realistic practice tests, simulating the actual
        test-taking experience and helping them prepare for their exams with
        confidence. Discover your strengths and weakness, and take your
        performance to the next level with our comprehensive practice tests.
      </p>
      <div className={styles.services__wrapper}>
        {services_db.map((service) => (
          <div key={service?.id} className={styles.item}>
            <div>
              <Image src={service?.image} alt='' />
            </div>
            <div>
              <p>{service?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
