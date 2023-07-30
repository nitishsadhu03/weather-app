import React from 'react'
import { UilSearch, UilMapMarker } from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input type='text'
            placeholder='Search...'
            className='text-xl font-normal p-2 w-full shadow-xl focus:outline-none rounded-md capitalize placeholder:lowercase'></input>
            <UilSearch size={30} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
            <UilMapMarker size={30} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' className='text-xl text-white font-normal'>°C</button>
            <p className='text-xl text-white mx-2'>|</p>
            <button name='imperial' className='text-xl text-white font-normal'>°F</button>
        </div>
    </div>
  )
}

export default Inputs