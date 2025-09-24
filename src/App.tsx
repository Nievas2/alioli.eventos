import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Navbar from "./components/shared/Navbar"

function App() {
  return (
    <main className="w-full flex flex-col justify-center items-center bg-white-main dark:bg-black-main gap-4 max-w-8xl text-black dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App
