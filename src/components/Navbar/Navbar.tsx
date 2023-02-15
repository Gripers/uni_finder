import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';

import { useDispatch } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import useWindowSize from '@rooks/use-window-size';

import { drawerAction } from '@/store/reducers/globalSlice';
import logo from '@/assets/logo.svg';

const Navbar = () => {
  const dispatch = useDispatch();
  const { innerWidth } = useWindowSize();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__wrapper}>
        <div>
          <Image src={logo} alt='' />
        </div>
        {innerWidth! <= 1000 ? (
          <button
            className={styles.burger}
            onClick={() => dispatch(drawerAction(true))}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='26'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
              />
            </svg>
          </button>
        ) : (
          <>
            <div>
              <nav>
                <Link href='/universities'>Universities</Link>
                <Link href='/tests'>Tests</Link>
                <Link href='/resourses'>Resourses</Link>
                <Link href='/services'>Services</Link>
                <Link href='/chat'>Chat</Link>
              </nav>
            </div>
            <div>
              <button>Sign Up</button>
              <button>Sign In</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
