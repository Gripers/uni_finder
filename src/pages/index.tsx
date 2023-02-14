import styles from '@/styles/Home.module.css';

import Navbar from '@/components/Navbar/Navbar';
import Header from '@/components/Header/Header';
import Univers from '@/components/Univers/Univers';
import Services from '@/components/Services/Services';
import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';
import Drawer from '@/components/Drawer/Drawer';

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Header />
        <Univers />
        <Services />
        <About />
        <Footer />
        <Drawer />
      </main>
    </>
  );
}
