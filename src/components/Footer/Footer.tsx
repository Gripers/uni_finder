import styles from './Footer.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.webp';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        {/* <div>
          <Image src={logo} alt='' />
          <div>
            <h3>About our motive</h3>
            <p>
              Our motive is simple: to empower the next generation with access
              to quality education. We believe that every student deserves the
              opportunity to pursue their dreams, and it is our mission to
              provide them with the resources and information needed to make
              informed decisions about their future. Join us in our commitment
              to creating a better future for all through education.
            </p>
          </div>
        </div> */}
        <div>
          <h3>MENU</h3>
          <div className={styles.line}></div>
          <nav>
            <Link href='/universities'>Universities</Link>
            <Link href='/tests'>Tests</Link>
            <Link href='/materials'>Materials</Link>
            <Link href='/services'>Services</Link>
            <Link href='/chat'>Chat</Link>
          </nav>
        </div>
        <div>
          <h3>MATERIALS</h3>
          <div className={styles.line}></div>
          <nav>
            <Link href='/universities'>Courses</Link>
            <Link href='/tests'>Books</Link>
            <Link href='/materials'>Others</Link>
            <Link href='/chat'>Chat</Link>
          </nav>
        </div>
        <div>
          <h3>CONTACT US</h3>
          <div className={styles.line}></div>
          <p>
            Let&apos;s Connect. Have questions or feedback? We&apos;d love to
            hear from you. Reach out to us through our contact form or email and
            a member of our team will get back to you as soon as possible.
          </p>
          <hr />
          <p>
            Email:{' '}
            <a href='mailto:info.s.orca@gmail.com'>info.s.orca@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
