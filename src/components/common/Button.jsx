import { cn } from '../../lib/utilitys/Cn'

export default function Button({children , className}) {
  return (
    <>
      <button className={cn(
        '  px-3 py-3 sm:px-6 sm:py-4 lg:px-8 text-[10px] sm:text-base text-white font-bold font-Nunito-Sans bg-gradient-primary rounded-full opacity-90 hover:opacity-100 transition-opacity duration-150',className
      )}>
        {children}
      </button>
    </>
  )
}
