import React from 'react'
import { cn } from '../../lib/utilitys/Cn'


export default function Container({children,className}) {
  return (
    <>
      <div className={cn('w-full max-w-screen-xl px-2.5 mx-auto' , className)}>
        {children}
      </div>
    </>
  )
}
