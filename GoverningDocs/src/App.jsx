import Hero from "./components/contains/Hero"
import MobileMenu from "./components/contains/Navbar/MobileMenu"
import Navbar from "./components/contains/Navbar/Navbar"
import { Partners } from "./components/contains/Partners"
import ProblemSolution from "./components/contains/ProblemSolution/ProblemSolution"
import ProblemSolutionHeader from "./components/contains/ProblemSolution/ProblemsolutionHeader"
import { Reviews } from "./components/contains/Reviews/Reviews"


function App() {
  return (
    <main>
       <Navbar/>
       <Hero/>  
       <ProblemSolution/>
       <Reviews/>
       <Partners/>
    </main>
  )
}

export default App
