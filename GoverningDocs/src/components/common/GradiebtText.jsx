import React from 'react'
import { cn } from '../../lib/utilitys/Cn'

export default function GradientText({className,children}) {
  return (
    <span className={cn('bg-gradient-to-b  from-[#00D2FF] to-[#059DBE] bg-clip-text text-transparent ',className)}>{children}</span>
  )
}
