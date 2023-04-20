import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import '../../styles/input.css';
import Wallpaper from '../../components/Wallpaper/Wallpaper';
import Head from 'next/head';
import Footer from '../../components/Footer/Footer';
import BackTo from '../../components/ButtonBackToBlog/BackTo';

const wallpaper = () => {
  return (
    <div className="bg-slate-50">
      <Head>
        <title>Wallpaper</title>
      </Head>
      <Navbar />
      <BackTo />
      <Wallpaper />
      <Footer />
    </div>
  );
};

export default wallpaper;
