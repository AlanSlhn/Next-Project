import '../../styles/input.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BackTo from '../../components/ButtonBackToBlog/BackTo';
import Head from 'next/head';
import KeyboardCom from '../../components/Keyboard/KeyboardCom';

const keyboard = () => {
  return (
    <div className="bg-slate-50">
      <Head>
        <title>Keyboard</title>
      </Head>
      <Navbar />
      <BackTo />
      <KeyboardCom />
      <Footer />
    </div>
  );
};

export default keyboard;
