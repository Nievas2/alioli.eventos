import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Navbar from "./components/shared/Navbar"
import Footer from "./components/shared/Footer"

function App() {
  return (
    <main className="w-full min-h-screen h-full flex flex-col justify-center items-center gap-4 bg-white-main dark:bg-black-main text-black dark:text-white">
      <div className="max-w-8xl w-full">
        <Navbar />

        <div className="w-full h-full flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<AboutUs />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </main>
  )
}

export default App
