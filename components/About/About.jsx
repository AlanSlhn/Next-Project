import React from 'react';
import { Alan } from '../../public/assets/import';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="flex items-center justify-center w-full p-20 max-md:p-0" style={{ fontFamily: 'Roboto Slab' }}>
      <div className="flex flex-row mt-20 justify-center items-start gap-10 w-5/6 max-xl:flex-col max-md:gap-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="img"
        >
          <div className="relative group max-md:w-full">
            <Image src={Alan} width={500} className="w-full rounded-sm"></Image>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex  justify-center items-center  opacity-0 hover:opacity-100 w-full h-full bg-gradient-to-t from-gray-700 via-gray-700 to-opacity-30 group-hover:opacity-50 transition">
              <div className="flex flex-col items-center justify-center  text-gray-50 ">
                <p className="text-xl">DONSS</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-3/6 max-xl:w-full  "
        >
          <h1 className="text-2xl font-bold max-md:mt-5 mb-5 max-md:text-xl">DONS</h1>
          <div className="flex flex-col gap-5 text-lg leading-loose max-md:text-sm">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laudantium rerum quibusdam voluptatibus iste ratione sunt voluptatum quisquam modi enim?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae delectus a saepe? Placeat delectus atque asperiores eligendi voluptatibus. Eveniet?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae delectus a saepe? Placeat delectus atque asperiores eligendi voluptatibus. Eveniet?</p>
          </div>
          <Link href={'#'} className="mt-5 text-blue-600 hover:text-blue-400 max-md:text-sm">
            Download my Resume
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
