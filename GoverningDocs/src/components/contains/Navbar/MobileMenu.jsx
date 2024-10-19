import React from 'react'
import Logo from '../../common/Logo'
import navItemsData from '../../../lib/utilitys/Data.json'

export default function MobileMenu({Toggle}) {
    const navItems = navItemsData.NavItems

  return (
    <>
      <div className='lg:hidden absolute top-0 left-0 z-50 w-full h-screen p-6 overflow-y-hidden bg-white'> 

        {/* Logo & Close Icon */}
        <div className='flex justify-between items-center pb-6'>
        <Logo className='text-2xl'>GoverningDocs</Logo>

        <button onClick={Toggle} className='text-3xl' aria-level='Close Menu'>&times;</button>

        </div>

        {/* list items */}

        <div className='space-y-5'>
            {
                navItems.map(({link,label},index)=>(
                  <a href={link} key={index} className='block  hover:text-primary transition-colors duration-150 hover:underline '>{label}</a>
                ))
            }
        </div>

      </div>
    </>
  )
}
