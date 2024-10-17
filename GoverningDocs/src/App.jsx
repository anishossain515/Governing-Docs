import Hero from "./components/contains/Hero"
import MobileMenu from "./components/contains/Navbar/MobileMenu"
import Navbar from "./components/contains/Navbar/Navbar"
import ProblemSolution from "./components/contains/ProblemSolution/ProblemSolution"
import ProblemSolutionHeader from "./components/contains/ProblemSolution/ProblemsolutionHeader"



function App() {
  return (
    <main>
       <Navbar/>
       <Hero/>  
       <ProblemSolution/>
    </main>
  )
}

export default App
