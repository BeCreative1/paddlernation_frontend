import React from 'react'

const SubPrices = ({ title, value }) => {
    return (
        <div className='flex justify-between items-center w-full mb-4'>
            <p className='text-center font-medium sm:text-[18px] text-[14px] text-bluepb-900'>{title}</p>
            <p className='text-center font-medium sm:text-[18px] text-[14px] text-bluepb-900'>{value}</p>
        </div>
    );
};

const PriceOverview = () => {
    return (
        <div className='flex flex-col justify-between items-start bg-white mlg:pt-6 mlg:px-6 p-4 rounded-lg lg:w-[400px] mlg:shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)]'>
            <h2 className='text-center font-bold sm:text-[24px] text-[20px] text-bluepb-900 mb-4'>Indkøbskurv oversigt</h2>
            <SubPrices title="Antal" value="kr." />
            <SubPrices title="Datoer" value="dd/mm/yyyy" />
            <SubPrices title="Extras" value="kr." />
            <SubPrices title="Levering" value="kr." />
            <div className='flex justify-between items-center w-full mb-4'>
                <h3 className='text-center font-bold sm:text-[20px] text-[18px] text-bluepb-900'>Samlet:</h3>
                <h3 className='text-center font-bold sm:text-[20px] text-[18px] text-bluepb-900'>kr.</h3>
            </div>
        </div>
    )
}

export default PriceOverview