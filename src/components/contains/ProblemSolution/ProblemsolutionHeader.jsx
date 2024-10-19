import React from 'react'
import Heading from '../../common/Heading'
import { Arrow } from '../../Icons'

export default function ProblemSolutionHeader() {
  return (
    <>
       <div className='flex justify-between items-center w-full'>

        <Heading gradient='Solution' className=''>Problem & </Heading> 

        <div className='flex justify-center items-center gap-[15px]'>
          <button className='text-primary bg-white rounded-full size-8 md:size-10 shadow-Arrow items-center justify-center flex '>
            <Arrow className='mr-0.5 mt-0.5'/>
          </button>

          <button className='text-white rotate-180 bg-primary  rounded-full size-8 md:size-10 shadow-Arrow flex items-center justify-center  '>
            <Arrow className='mr-0.5'/>
          </button>
        </div>

       </div>
       
    </>

       
  )
}
