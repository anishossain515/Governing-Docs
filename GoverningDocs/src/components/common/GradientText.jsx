import React from 'react'
import { cn } from '../lib/utilitys/Cn'

//background: linear-gradient(180deg, #00D2FF 0%, #059DBE 100%);


export default function GradientText({children,className}) {
  return (
    <span className={cn('bg-gradient-to-b  from-[#00D2FF] to-[#059DBE] bg-clip-text text-transparent ',className)}>{children}</span>
  )
}
