import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../../components/Home/Home';

import Footer from '../../components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Page() {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
