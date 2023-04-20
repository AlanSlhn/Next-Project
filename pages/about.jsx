import React from 'react';
import '../styles/input.css';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';
import { Favicon32 } from '../public/assets/import';
import { motion, useScroll } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="bg-slate-50">
      <Head>
        <title>About</title>
        <link rel="icon" href={Favicon32} />
      </Head>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
