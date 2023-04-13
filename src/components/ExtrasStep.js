import React from 'react';
import { NumberOfPaddleboards, NextStepButton, RadioChoices, PriceOverview } from './index.js';
import Checkbox from '@mui/material/Checkbox';

const CheckboxExtras = ({title}) => {
    return (
    <div className='flex justify-start items-center mb-4'>
        <div className='mx-[30px]'>
            <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} />
        </div>
        <p className='text-bluepb-900 font-bold sm:ml-8'>{title}</p>
    </div>
    )
}

const ExtrasStep = ({ addTrip }) => {
    return (
        <div className='flex flex-row justify-center h-[80vh] items-start w-full border-r-2'>
            <div className={`flex flex-col mt-8 justify-center items-center flex-1`}>
                <div className='group flex flex-col justify-center w-[70%] items-start bg-white px-20 py-12 rounded-2xl shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)]'>
                    <div className='flex justify-start items-center mb-8'>
                        <NumberOfPaddleboards isHidden={false} />
                        <p className='text-bluepb-900 font-bold sm:ml-8'>Drybag / 5DKK pr. paddleboard</p>
                    </div>
                    <div className='flex justify-start items-center mb-6'>
                        <NumberOfPaddleboards isHidden={false} />
                        <p className='text-bluepb-900 font-bold sm:ml-8'>Udstyrsforsikring / 29DKK pr. paddleboard</p>
                    </div>
                    <CheckboxExtras title="GoPro leje / 99DKK"/>
                    <CheckboxExtras title="Drone Video / 249DKK"/>
                    <CheckboxExtras title="Avanceret teknik med instruktør / 199DKK pr. time"/>
                    <CheckboxExtras title="Intro med instruktør / 99DKK"/>
            
                </div>

                <form className='w-[80%] p-4 mt-6 backdrop-blur-sm '>
                    <fieldset>
                        <legend className='text-center font-semibold sm:text-[32px] text-[24px] text-bluepb-900 mb-4'>Levering</legend>
                        <div className='flex justify-evenly'>
                            <RadioChoices styles="w-[28%]" title="Afhentningssted" info="Banegårdsgade 2, 8700 Horsens" id="deliveryChoice1" name="delivery" />

                            <RadioChoices styles="w-[28%]" title="Ready to go" info="Vi har oppustede paddleboards ..." id="deliveryChoice2" name="delivery" extraTitle="Vi har oppustede paddleboards klar til dig, som vi kan levere til det sted på stranden, som du vælger." />

                            <RadioChoices styles="w-[28%]" title="Hjemmelevering" info="Angiv adressen i næste trin." id="deliveryChoice3" name="delivery" />

                        </div>
                    </fieldset>
                </form>
            </div>

            <div className={`flex flex-col justify-start items-center mlg:backdrop-blur-sm mt-4 pt-4 pb-2 sm:mx-12 mr-2 sticky top-32 md:flex-none `}>
                <PriceOverview />
                <NextStepButton title={"Næste"} addTrip={addTrip} />
            </div>

        </div>
    )
}

export default ExtrasStep