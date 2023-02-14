import { useId } from 'react';
import styles from './Drawer.module.scss';

import { useSelector } from 'react-redux';
import DrawerComponent from 'react-modern-drawer';

import { RootState } from '@/store/store';

const Drawer = () => {
  const { drawerState } = useSelector((state: RootState) => state.global);

  return (
    <DrawerComponent
      open={drawerState}
      direction='right'
      customIdSuffix={useId()}
    >
      <div></div>
    </DrawerComponent>
  );
};

export default Drawer;
