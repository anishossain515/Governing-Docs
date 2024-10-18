import React from 'react'
import Container from '../../common/Container'
import ProblemSolutionHeader from './ProblemsolutionHeader'
import ProblemData from '../../../lib/utilitys/Data.json'
import { ProblemSolutionCard } from './ProblemSolutionCard.JSX'

export default function ProblemSolution() {
  return (
    <section className='pt-32'>
        <Container>

            <div>


                <ProblemSolutionHeader/>

                {/* ProblemSolutionCard */}

                    <div className='pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-[30px] cursor-pointer'>

                      {
                        ProblemData.ProblemSolution.map((problem,index)=>(
                          <ProblemSolutionCard {...problem} key={index} />
                        ))
                      }

                    </div>

                 {/* ProblemSolutionCard */}
                    

            </div>

        </Container>
    </section>
  )
}
