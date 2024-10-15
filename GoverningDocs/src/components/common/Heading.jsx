import React from 'react'
import { cn } from '../../lib/utilitys/Cn'
import GradientText from '../GradientText'

export default function Heading({children,className,gradient}) {
  return (

    <>
      <h1 className={cn('font-Space-Grotesk  font-bold text-[46px] leading-[58.7px]',className)}>
         {children} <GradientText>{gradient}</GradientText>
        </h1>
    </>
  )
}
