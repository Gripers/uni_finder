import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about__us}>
      <h1>About Us</h1>
      <div className={styles.line}></div>
      <div className={styles.card}>
        <p>
          "We are a dedicated team of professionals who believe in the power of
          education to change lives. Our mission is to connect students with
          their dream universities and provide them with all the necessary
          information to make an informed decision. We are passionate about
          making education accessible and affordable for everyone and strive to
          be the go-to source for university research. With years of experience
          in the education industry, we have built a platform that is
          user-friendly, comprehensive, and constantly updated with the latest
          information. We believe in transparency and honesty and strive to
          provide our users with all the information they need to make the best
          decision for their future. Join us on this exciting journey as we help
          students find their way to the university of their dreams. Let's shape
          the future together."
        </p>
      </div>
    </div>
  );
};

export default About;
