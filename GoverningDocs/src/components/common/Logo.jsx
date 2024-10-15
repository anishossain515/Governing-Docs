import React from 'react'
import { cn } from '../../lib/utilitys/Cn'

export default function Logo({children,className}) {
  return (
    <h1 className={cn('font-Space-Grotesk font-bold md:text-2xl sm:text-2xl text-base lg:text-3xl text-black',className)}>{children}</h1>
  )
}
