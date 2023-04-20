import Head from 'next/head';
import Image from 'next/image';
import '../styles/input.css';
import Navbar from '../components/Navbar/Navbar';
import Blogs from '../components/Blogs/Blogs';
import './_document';
import Footer from '../components/Footer/Footer';

const blogs = () => {
  return (
    <div>
      <Head>
        <title>Blogs</title>
      </Head>
      <Navbar />
      <Blogs />
      <Footer />
    </div>
  );
};

export default blogs;
