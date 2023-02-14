import styles from './Navbar.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.svg';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__wrapper}>
        <div>
          <Image src={logo} alt='' />
        </div>
        <div>
          <nav>
            <Link href='/universities'>Universities</Link>
            <Link href='/tests'>Tests</Link>
            <Link href='/materials'>Materials</Link>
            <Link href='/services'>Services</Link>
            <Link href='/chat'>Chat</Link>
          </nav>
        </div>
        <div>
          <button>Sign Up</button>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
