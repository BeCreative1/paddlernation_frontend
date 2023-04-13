import React from 'react';
import { useState } from 'react';
import { Navbar, SelectPaddleBoardStep, Footer, RentProcess, ExtrasStep} from '../components';

const RentingPage = () => {
  const [state, setState] = useState('select')
  return (
    <div className='flex flex-col w-full bg-waves'>
    {/* <Navbar currentPage="Udlejning"/> */}
    
    {state === 'select' && <RentProcess title={"Udlejning"} step={1}/>}
    {state === 'select' && (<SelectPaddleBoardStep addTrip={() => setState('extras')}/>)}

    {state === 'extras' && <RentProcess title={"Extras"} step={2}/>}
    {state === 'extras' && <ExtrasStep addTrip={() => setState('select')} />}

    {/* <Footer /> */}
    </div>
  )
}

export default RentingPage