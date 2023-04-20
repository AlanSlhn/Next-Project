import React from 'react';
import '../../styles/input.css';
import SetupCom from '../../components/Setup/SetupCom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Head from 'next/head';
import BackTo from '../../components/ButtonBackToBlog/BackTo';

const setup = () => {
  return (
    <div>
      <Head>
        <title>Setup</title>
      </Head>
      <Navbar />
      <BackTo />
      <SetupCom />
      <Footer />
    </div>
  );
};

export default setup;
