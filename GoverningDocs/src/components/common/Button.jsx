import { cn } from '../../lib/utilitys/Cn'

export default function Button({children , className}) {
  return (
    <>
      <button className={cn(
        'py-4 px-[30px] text-white font-bold font-Nunito-Sans bg-gradient-primary rounded-full opacity-90 hover:opacity-100 transition-all delay-150',className
      )}>
        {children}
      </button>
    </>
  )
}
