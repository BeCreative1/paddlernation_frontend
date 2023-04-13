import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { paddleboards } from '../constants';
import { NextStepButton } from './index.js';
import { GoCalendar } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import {NumberOfPaddleboards} from './index.js'


const Calender = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='bg-white mlg:pt-6 mlg:px-6 p-4 rounded-lg lg:w-[400px] mlg:shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)] transition ease-out duration-500'>
            <GoCalendar className={`${toggle ? 'hidden' : 'flex'} mlg:hidden flex w-[40px] h-[40px] text-bluepb-900`} onClick={() => setToggle((prev) => !prev)} />
            <RxCross1 className={`${toggle ? 'flex' : 'hidden'} mlg:hidden w-[40px] h-[40px] text-bluepb-900`} onClick={() => setToggle((prev) => !prev)} />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar className={`mlg:flex hidden`}/>
            </LocalizationProvider>
           
            <div className={`${toggle ? 'flex flex-col' : 'hidden'} mlg:hidden p-2 pb-4 bg-white absolute top-24 -right-2 mx-4 my-2 rounded-xl sidebar shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)]`}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar/>
            </LocalizationProvider>
            <p className='text-center text-normal text-[12px]'>Hvis du er interesseret i at leje paddleboards i flere dage, kan du kontakte os på følgende e-mail-adresse: info@paddlernation.com. Vi vil meget gerne hjælpe dig med at arrangere en længerevarende lejeaftale og finde en løsning, der passer til dine behov.</p>
            </div>
        </div>
    )
}

const PaddleCarousel = ({ image, title, size, capacity, price }) => (
    <div className={`flex snap-center group flex-col items-center xl:w-[40%] mlg:w-[60%] w-[80%] sm:pb-16 pb-4 hover:scale-[1.02] shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)] lg:mx-[5%] sm:mb-40 mb-16 bg-white rounded-3xl transition ease-out duration-500`}>
        <div className={`flex flex-col items-center mb-8`}>
            <Image src={image} alt="image" className="md:w-[80%] w-[100%] object-contain"></Image>
            <h2 className="font-bold text-bluepb-900 sm:text-[32px] text-[24px] leading-[20px]">{title}</h2>
        </div>
        <div className="flex flex-col w-[70%]">
            <p className="font-semibold text-bluepb-900 sm:text-[18px] text-[14px] leading-[23px] mb-2">{size} {capacity}</p>
            <div className='w-[100%] border border-bluepb-900' />
            <p className="font-semibold text-bluepb-900 sm:text-[18px] text-[14px] leading-[23px] mt-2">{price}</p>
        </div>
        <NumberOfPaddleboards isHidden={true}/>

    </div>
)

const PaddleBoardDeal = ({addTrip}) => {
    return (
        <div className='flex flex-row justify-center items-start w-full border-r-2'>
            <div className={`flex snap-y snap-mandatory scroll-smooth mt-1 pt-4 sm:h-[88vh] overflow-y-scroll justify-evenly items-center flex-1 md:flex-row flex-col flex-wrap`}>
                {paddleboards.map((paddleboard, index) => (
                    <PaddleCarousel key={paddleboard.id} {...paddleboard} index={index} />
                ))}
            </div>
            <div className={`flex flex-col justify-start items-center mlg:backdrop-blur-sm mt-4 pt-4 pb-2 sm:mx-12 mr-2 sticky top-28 md:flex-none `}>
                <Calender />
                <p className='mlg:block hidden w-[400px] text-center text-normal text-[16px] mt-4'>Hvis du er interesseret i at leje paddleboards i flere dage, kan du kontakte os på følgende e-mail-adresse: info@paddlernation.com. Vi vil meget gerne hjælpe dig med at arrangere en længerevarende lejeaftale og finde en løsning, der passer til dine behov.</p>
                <NextStepButton title={"Næste"} addTrip={addTrip}/>
            </div>

        </div>
    )
}

export default PaddleBoardDeal