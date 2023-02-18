import styles from './OurServices.module.scss';

import order from '@/assets/order.svg';
import team from '@/assets/team.svg';

import ServiceItem from './ServiceItem/ServiceItem';

const OurServices = () => {
  return (
    <section className={styles.our__services}>
      <h1>Our Services</h1>
      <div className={styles.wrapper}>
        <ServiceItem
          pic={order}
          title='Explore'
          description='You can browse more than 25.000 online programmes from universities all over the world.'
        />
        <ServiceItem
          pic={team}
          title='Compare'
          description='Make a wishlist of your favourite programmes, check your fit with them, and read what other students are saying.'
        />
        <ServiceItem
          pic={team}
          title='Decide'
          description='Now that you have your top programmes shortlisted, you can pick the ones that fit you the best.'
        />
        <ServiceItem
          pic={order}
          title='Apply'
          description='When you feel confident about your online programme choice, you can apply directly via Studyportals. Find out how..'
        />
      </div>
    </section>
  );
};

export default OurServices;
