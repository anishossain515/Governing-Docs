import React from 'react'

export const ProblemSolutionCard = ({image,title,des1,des2}) => {
  return (
    <>
      <div className="w-[272px] h-[349px] rounded-[20px] space-y-5 shadow-Box p-5 hover:bg-primary transition-colors group duration-200 ">
        <div className="bg-primary size-[58px] rounded-full flex justify-center items-center ">
          <img src={image} alt={title} />
        </div>

        <h1 className="font-bold text-[18px] leading-none font-Nunito-Sans text-secondary group-hover:text-white">
          {title}
        </h1>

        {/* Description */}

        <div className=" font-Nunito-Sans font-semibold text-accent space-y-2.5 group-hover:text-white">
          <p>{des1}</p>

          {des2 && <p>{des2}</p>}
        </div>
        {/* Description */}
      </div>
    </>
  )
}
