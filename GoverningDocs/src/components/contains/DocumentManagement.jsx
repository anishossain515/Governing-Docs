import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';

export const DocumentManagement = () => {
  return (
    <section className="mt-[70px] md:mt-[100px] lg:mt-[150px] px-2">
      <Container className="bg-gradient-primary rounded-[20px] ">

        <div className='flex sm:space-y-0 space-y-8 flex-col md:flex-row justify-between items-center py-[56px] px-10 '>

            <div className='sm:w-[400px] md:w-[480px] lg:w-[566px]'>
                <h1 className='font-Space-Grotesk font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[46px] text-white '>Ready to Simplify Your Document Management?</h1>
                <p className='font-Nunito-Sans font-bold leading-[22.4px] text-white pt-[30px]'>Sign up today and experience the power of AI-driven legal documentation.</p>
            </div>

            <div>
                <Button className='bg-white text-black text-base py-3 px-8'>Get Started Now</Button>
            </div>


        </div>
        
      </Container>
    </section>
  );
};