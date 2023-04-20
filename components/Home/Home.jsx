'use client';
import { MdWavingHand } from 'react-icons/md';
import { jobs } from './config';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="w-full ">
      <div className="text m-40  flex flex-col items-center justify-center max-sm:m-10 max-sm:mt-40">
        <div className="flex flex-row justify-around items-center">
          <h1 className="text-xl mr-1">Hi, Im DONS</h1>
          <MdWavingHand color="#fcca03" className="text-2xl" />
        </div>

        <div className="w-3/4 max-md:w-full">
          <p className={`leading-loose text-3xl text-center mt-3 max-md:text-2xl max-md:leading-loose max-sm:text-xl max-sm:leading-loose`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magnam aliquam eveniet perferendis error quia aperiam! Iusto, natus voluptatem veritatis quae explicabo reprehenderit autem dicta. Doloribus nemo itaque harum
          </p>
          <p className="leading-loose text-3xl text-center mt-10 max-md:text-2xl max-md:leading-loose max-sm:text-xl max-sm:leading-loose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, voluptas.</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 ">
        {jobs.map((jobsc) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
            className="box border w-10/12 h-96 flex flex-row justify-between items-center bg-white rounded-lg saturate-50 hover:saturate-150 p-10 max-md:p-5 max-md:h-52"
            key={jobsc.id}
          >
            <div className="padd text-2xl max-md:text-xl max-sm:text-lg ">
              <h1>{jobsc.head}</h1>
              <p>{jobsc.info}</p>
            </div>
            <Image src={jobsc.img} className="w-56 max-md:w-24" alt={jobsc.alt}></Image>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
