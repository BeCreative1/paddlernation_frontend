import React from 'react'

const Stepper = ({step}) => {
  return (
    <div className='flex flex-row justify-center items-center flex-1 lg:flex-none'>
        <div className={`flex justify-center items-center w-[30px] h-[30px] rounded-full ${step === 1 ? "bg-bluepb-900" : "bg-bluepb-50"} border-bluepb-900 border-2`}>
            <p className={`text-center text-bluepb-900 ${step === 1 ? "text-white" : "text-bluepb-900"} font-bold`}>1</p>
        </div>
        <div className='xs:w-[100px] w-[60px] border border-bluepb-900' />
        <div className={`flex justify-center items-center w-[30px] h-[30px] rounded-full ${step === 2 ? "bg-bluepb-900" : "bg-bluepb-50"} border-bluepb-900 border-2`}>
            <p className={`text-center text-bluepb-900 ${step === 2 ? "text-white" : "text-bluepb-900"} font-bold`}>2</p>
        </div>
        <div className='xs:w-[100px] w-[60px] border border-bluepb-900' />
        <div className={`flex justify-center items-center w-[30px] h-[30px] rounded-full ${step === 3 ? "bg-bluepb-900" : "bg-bluepb-50"} border-bluepb-900 border-2`}>
            <p className={`text-center text-bluepb-900 ${step === 3 ? "text-white" : "text-bluepb-900"} font-bold`}>3</p>
        </div>
    </div>
  )
}

export default Stepper