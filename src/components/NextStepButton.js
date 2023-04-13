import React from 'react'
import {BsArrowRightShort} from "react-icons/bs";

const NextStepButton = ({title, addTrip}) => {
  return (
    <button onClick={addTrip} className='bg-bluepb-900 md:px-12 px-6 py-4 text-neutral-100 font-medium tracking-wider sm:text-[16px] text-[14px] flex justify-center items-center rounded-lg mt-12'>
      {title}<BsArrowRightShort className='sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]'></BsArrowRightShort>
    </button>
  )
}

export default NextStepButton