import { CODE1, CODE2, CODE3 } from '../../public/assets/import';
import Image from 'next/image';

const CodeCom = () => {
  return (
    <div className="p-5 flex flex-col gap-20 justify-center items-center" style={{ fontFamily: 'Roboto Slab' }}>
      <div className="m-52 flex flex-col items-center justify-center gap-10 p-5 max-lg:m-0">
        <h1 className="text-5xl font-bold max-sm:text-xl">CODE</h1>
        <p className="text-lg leading-loose text-center italic max-sm:text-sm max-sm:leading-6 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo cupiditate excepturi, nisi rerum odio perferendis dolore aliquam vel soluta nostrum.
        </p>
      </div>
      <div className=" w-1/2 flex flex-col gap-20 ">
        <div className="flex flex-col gap-5  justify-evenly items-center ">
          <Image src={CODE2} width={400}></Image>
          <h1 className="text-lg font-bold">React Code</h1>
          <p className="text-sm text-center leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque animi quos quibusdam sapiente? Minus consectetur officia, voluptas facere doloribus vero expedita magni at aut incidunt eos qui quis architecto hic corporis
            ducimus illum similique quasi quibusdam harum accusamus sunt!
          </p>
        </div>

        <div className="flex flex-row gap-10 items-center justify-center   max-xl:flex-col ">
          <Image src={CODE3} className="max-xl:item-center" width={400}></Image>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-lg max-xl:text-center">Python Code</h1>
            <p className="text-sm leading-loose max-xl:text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt facere animi velit maxime minus soluta qui non! Velit dignissimos excepturi nihil error eligendi quae natus sapiente culpa voluptate ipsa repudiandae possimus,
              aspernatur corporis aliquid magni sunt non dolorum eum nulla.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={CODE1} width={500}></Image>
        </div>
      </div>
    </div>
  );
};

export default CodeCom;
