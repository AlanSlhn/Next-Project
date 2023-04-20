import React from 'react';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';

const BackTo = () => {
  return (
    <div className="flex flex-row items-center w-56 m-20 gap-3 text-lg text-blue-700 transition ease delay-75 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-blue-600 max-md:m-10">
      <BsArrowLeft />
      <Link href={'/blogs'}>Back To Blog</Link>
    </div>
  );
};

export default BackTo;
