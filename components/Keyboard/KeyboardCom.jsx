import Image from 'next/image';
import { KEY1, KEY2, KEY3, KEYGIF } from '../../public/assets/import';

const KeyboardCom = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center" style={{ fontFamily: 'Roboto Slab' }}>
      <div className="flex flex-col items-center justify-center m-52 gap-5 p-10 max-md:mb-5">
        <h1 className="text-5xl font-bold">Keyboard</h1>
        <p className="text-lg max-md:text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam laborum veniam, optio veritatis amet autem aliquid eligendi maiores praesentium dolore.</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-20 max-md:flex-col p-5 w-full">
        <div className="flex flex-col">
          <Image src={KEY1} width={500}></Image>
          <p className="text-slate-400 text-sm mt-2">Keyboard by Sakuna</p>
        </div>
        <div className="flex flex-col">
          <Image src={KEY3} width={500}></Image>
          <p className="text-slate-400 text-sm mt-2">Keyboard by Sakuna</p>
        </div>
      </div>

      <div className="m-52 w-full text-center max-md:m-20">
        <p className="text-2xl text-blue-700 max-md:text-xl ">Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="mt-20 flex justify-center items-center gap-20 flex-row w-full max-md:gap-0 max-md:flex-col ">
        <div className="flex flex-col gap-5 max-md:p-5">
          <Image src={KEYGIF} width={600}></Image>
          <p className="text-slate-400 text-sm ">Gif</p>
        </div>

        <div className="w-1/5 flex flex-col gap-10 max-md:w-full max-md:p-5 ">
          <h1 className="text-2xl font-bold">GIF</h1>
          <p className="leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis, laboriosam amet, quas eum est sed praesentium repellat facilis dicta assumenda. Laborum cupiditate porro voluptatibus ullam quis explicabo maxime
            quod molestias numquam animi accusantium vero aut itaque et tempora quo fugit quibusdam, libero nulla nisi dolores at praesentium? Magni, a.
          </p>
        </div>
      </div>

      <div className="w-2/5 text-center m-96 max-md:w-full max-md:p-10 max-md:m-52">
        <p className="leading-loose text-2xl max-md:text-xl text-blue-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error quod porro blanditiis id pariatur accusamus fugiat adipisci. Quod quas, debitis distinctio veritatis blanditiis ex!
        </p>
        <p className="text-end">DONS .2023</p>
      </div>

      <div className="flex flex-col gap-5 max-md:p-5">
        <Image src={KEY2}></Image>
        <p className="text-sm text-slate-400">Keyboard by Dons</p>
      </div>
    </div>
  );
};

export default KeyboardCom;
