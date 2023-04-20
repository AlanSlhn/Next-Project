import React from 'react';
import Image from 'next/image';
import { PIN1, WALL1, WALL2, WALL3, WALL4, WALLGIF1, WALLGIF2 } from '../../public/assets/import';

const Wallpaper = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center" style={{ fontFamily: 'Roboto Slab' }}>
      <div className="w-1/2 flex flex-col justify-center items-center m-52">
        <h1 className="font-bold text-5xl mb-20">Wallpaper</h1>
        <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore doloribus pariatur error voluptatum voluptates. Fugit laboriosam doloremque accusamus aperiam tenetur.</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-52 w-full  ">
        <div className="flex gap-10 flex-row  items-center justify-evenly max-md:flex-col w-full">
          <Image src={WALL3} className="max-lg:p-5" width={400}></Image>
          <p className="text-xl italic">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex gap-10 flex-row-reverse  items-center justify-evenly max-md:flex-col w-full">
          <Image src={WALL2} className="max-lg:p-5" width={400}></Image>
          <p className="text-xl italic">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>

      <div className="flex flex-col w-4/5 text-center p-5 m-52">
        <p className="text-lg text-blue-600 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex numquam molestias aperiam asperiores alias doloribus quod eveniet maxime cupiditate hic!</p>
        <p className="italic text-end text-lg">Dons.2023</p>
      </div>

      <div className="flex flex-col gap-3 max-lg:p-5">
        <Image src={WALLGIF2}></Image>
        <p className="text-end text-sm text-slate-500 italic">Gif 2023 from Pinterest</p>
      </div>
      <div className="flex flex-col gap-3 max-lg:p-5">
        <Image src={WALLGIF1}></Image>
        <p className="text-end text-sm text-slate-500 italic">Gif 2023 from Pinterest</p>
      </div>
    </div>
  );
};

export default Wallpaper;
