import { DocumentManagement } from "./components/contains/DocumentManagement"
import { FAQ } from "./components/contains/FAQ"
import Hero from "./components/contains/Hero"
import MobileMenu from "./components/contains/Navbar/MobileMenu"
import Navbar from "./components/contains/Navbar/Navbar"
import { Partners } from "./components/contains/Partners"
import ProblemSolution from "./components/contains/ProblemSolution/ProblemSolution"
import { Reviews } from "./components/contains/Reviews/Reviews"


function App() {
  return (
    <main>
       <Navbar/>
       <Hero/>  
       <ProblemSolution/>
       <Reviews/>
       <Partners/>
       <FAQ/>
       <DocumentManagement/>
    </main>
  )
}

export default App
