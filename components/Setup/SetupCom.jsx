import Image from 'next/image';
import React from 'react';
import { setupConfig } from './setupConfig';
import { motion } from 'framer-motion';

const SetupCom = () => {
  return (
    <div className="flex flex-row justify-around items-center flex-wrap gap-5 max-md:flex-col ">
      {setupConfig.map((setup) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-2/5 h-2/5 flex flex-row items-center gap-3 rounded-lg max-xl:flex-col max-md:w-3/4"
          key={setup.id}
        >
          <div className="">
            <div className="relative group max-md:w-full">
              <Image src={setup.img} className="max-md:w-full" width={300}></Image>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex  justify-center items-center  opacity-0 hover:opacity-100 w-full h-full bg-gradient-to-t from-gray-700 via-gray-700 to-opacity-30 group-hover:opacity-50 transition">
                <div className="flex flex-col items-center justify-center  text-gray-50 ">
                  <p>{setup.simple}</p>
                  <p>{setup.head}</p>
                  <p>{setup.from}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-96 p-10">
            <div className="flex flex-row  items-end gap-3  ">
              <div className="flex flex-col">
                <p className="text-xl text-gray-400">{setup.date}</p>
                <p className="text-2xl">{setup.month}</p>
              </div>
              <h1 className="font-bold ">{setup.head}</h1>
            </div>
            <p className="leading-loose mt-5">{setup.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SetupCom;
