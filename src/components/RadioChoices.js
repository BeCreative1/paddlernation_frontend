import React from 'react'

const RadioChoices = ({styles, title, info,id,name, extraTitle}) => {
    return (
        <div className={`${styles} flex flex-col justify-center items-center`}>
            <div className='flex justify-center w-full items-center bg-white px-4 py-6 rounded-2xl shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)]'>
                <input type="radio" id={id} name={name} />
                <label for={id} className='ml-4'>{title}</label>
            </div>
            <p title={extraTitle} className='text-[12px] font-semibold mt-2'>{info}</p>
        </div>
    )
}

export default RadioChoices