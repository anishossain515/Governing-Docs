import React from 'react'
import Container from '../../common/Container'
import Button from '../../common/Button'

function Hero() {
  return (
    <section className='md:pt-[142px] pt-[80px]'>
        <Container className='flex md:flex-row flex-col-reverse justify-between items-center md:gap-0 gap-8'>

            <div className='md:space-y-[25px] lg:space-y-[29px] space-y-[20px]'>

                <h1 className='font-Space-Grotesk font-bold xl:leading-[76.56px]  lg:leading-[73.56px] md:leading-[53px] text-secondary lg:text-[58px] xl:text-[60px] text-[32px]  max-w-[450px] md:max-w-[593px]'>Simplify your real estate document analysis</h1>

                <p className='text-secondary font-Nunito-Sans font-semibold text-sm lg:text-xl xl:max-w-[519px] max-w-[450px] '>Streamline, Automate, and Secure Your Business Documents with Ai GoverningDocs</p>

                <Button className='py-3 px-4 text-[15px]'>Get Started Today</Button>
            </div> 

            <div>
                <img src="/Hero.png" alt="Hero Img"  className='md:w-[600px] w-[90%] lg:w-[630px] xl:w-[740px] mx-auto'/>
            </div>
        </Container>
    </section>
  )
}

export default Hero