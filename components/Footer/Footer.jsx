import Link from 'next/link';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="w-full mt-20">
      <div className="flex flex-row justify-center items-center ">
        <Link href={'#'} className="text-blue-500 hover:text-blue-700">
          Linkdln
        </Link>
        <Link href={'#'} className="text-blue-500 hover:text-blue-700">
          / Facebook
        </Link>
        <Link href={'#'} className="text-blue-500 hover:text-blue-700">
          / Instagram
        </Link>
        <Link href={'#'} className="text-blue-500 hover:text-blue-700">
          / WhatsApp
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center mt-5">
        <p className="text-center mr-1">Copyright by DONS 2023 All Right Reserved</p>
        <AiOutlineCopyrightCircle />.
      </div>
    </div>
  );
};

export default Footer;
