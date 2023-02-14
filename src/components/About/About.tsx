import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about__us}>
      <h1>About Us</h1>
      <div className={styles.line}></div>
      <div className={styles.card}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem totam iste corporis expedita. Laboriosam mollitia
          consectetur vero aut sed dolorum!
        </p>
      </div>
    </div>
  );
};

export default About;
