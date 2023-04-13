import React from 'react';
import { useState } from 'react';

function NumberOfPaddleboards({isHidden}) {
    const [count, setCount] = useState(0);
  
    function increment() {
      setCount(function (prevCount) {
        return (prevCount += 1);
      });
    }
  
    function decrement() {
      setCount(function (prevCount) {
        if (prevCount > 0) {
          return (prevCount -= 1); 
        } else {
          return (prevCount = 0);
        }
      });
    }
  
    return (
        <div className="flex flex-row justify-center items-center">
            <div className={`${isHidden ? "hidden group-hover:flex" : "flex"} justify-center items-center w-[20px] h-[20px] rounded-full border-bluepb-900 border-2 cursor-pointer`}>
                <button onClick={decrement} className='text-center text-bluepb-900 font-bold text-[14px] mb-[1px]'>&#8211;</button>
            </div>
            <div className='flex justify-center items-center w-[35px] h-[35px] rounded-lg border-bluepb-900 border-2 mx-4'>
                <p className='text-center text-bluepb-900 font-bold text-[16px]'>{count}</p>
            </div>
            <div className={`${isHidden ? "hidden group-hover:flex" : "flex"} justify-center items-center w-[20px] h-[20px] rounded-full border-bluepb-900 border-2 cursor-pointer`}>
                <button onClick={increment} className='w-[18px] h-[18px] text-bluepb-900 font-bold text-[18px] leading-[18px] mb-[2px] ml-[1px]'>&#43;</button>
            </div>
        </div>
    );
  }

export default NumberOfPaddleboards