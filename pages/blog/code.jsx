import '../../styles/input.css';
import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BackTo from '../../components/ButtonBackToBlog/BackTo';
import CodeCom from '../../components/Code/CodeCom';

const code = () => {
  return (
    <div>
      <Head>
        <title>CODE</title>
      </Head>

      <Navbar />
      <BackTo />
      <CodeCom />
      <Footer />
    </div>
  );
};

export default code;
