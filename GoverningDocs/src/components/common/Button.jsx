import { cn } from '../../lib/utilitys/Cn'

export default function Button({children , className}) {
  return (
    <>
      <button className={cn(
        '   md:py-3  lg:py-4 lg:px-[25px] md:px-[20px] px-[8px] text-xs sm:text-base py-3  text-white font-bold font-Nunito-Sans bg-gradient-primary rounded-full opacity-90 hover:opacity-100 transition-all delay-150',className
      )}>
        {children}
      </button>
    </>
  )
}
