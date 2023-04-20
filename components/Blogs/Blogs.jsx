import React from 'react';
import Image from 'next/image';
import { blogConfig } from './blogconfig';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

const Blogs = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-row justify-around items-center flex-wrap gap-5 max-md:flex-col ">
        {blogConfig.map((blog) => (
          <div className="border w-2/5 h-2/5 flex flex-row items-center gap-3 rounded-lg max-xl:flex-col max-md:w-3/4" key={blog.id}>
            <Image className="rounded-l-lg max-xl:rounded-none max-xl:rounded-t-lg max-xl:w-full" src={blog.img} width={300}></Image>
            <div className="flex flex-col gap-3 p-5">
              <h1 className="text-2xl font-bold">{blog.head}</h1>
              <p>{blog.text}</p>
              <Link href={blog.link} className="text-blue-700 flex flex-row gap-1 items-center pt-2  transition ease delay-75 hover:translate-x-2 hover:scale-100 duration-300 hover:text-blue-400 w-32">
                {blog.readMore}
                <BsArrowUpRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
