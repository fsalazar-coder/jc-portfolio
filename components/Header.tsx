import { useState } from 'react';


export default function Header(props: any) {

  const [contactModal, setContactModal] = useState(false);                               /***State blog modal open: true or false***/
  const [contactModalAnimationClose, setContactModalAnimationClose] = useState(false);

  return (
    <div className='w-full h-full relative flex flex-col justify-end items-center bg-slate-100'>
      {/***Content***/}
      <div className='container w-full h-full relative px-10 lg:px-36 flex flex-col justify-center items-start'>
        {/**Name text */}
        <div className='w-full h-fit flex flex-col justify-center'>
          <h4 className='w-fit h-fit text-green-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
            I'm
          </h4>
          <h2 className='w-2/3 h-fit text-gray-950 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide font-bold text-start drop-shadow-2xl flex z-30'>
            John Camargo
          </h2>
        </div>
        {/**Subtitle text */}
        <div className='w-full h-fit flex flex-col justify-start'>
          <h2 className='w-full h-fit text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wide font-normal text-start flex'>
            Visual Designer
          </h2>
        </div>
      </div>
    </div>
  )
}