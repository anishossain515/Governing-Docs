import Hero from "./components/contains/hero/Hero"
import MobileMenu from "./components/contains/Navbar/MobileMenu"
import Navbar from "./components/contains/Navbar/Navbar"

function App() {
  return (
    <main className="bg-[url(/Hero-img.png)] bg-no-repeat bg-cover min-h-screen bg-top">
       <Navbar/>
       <Hero/> 
    </main>
  )
}

export default App
