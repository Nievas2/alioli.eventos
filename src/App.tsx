import { Link, Route, Routes } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Footer from "./components/shared/Footer"
import type { LenisRef } from "lenis/react"
import { useEffect, useRef } from "react"
import { ReactLenis } from "lenis/react"
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import { Icon } from "@iconify/react"
import Home from "./pages/Home"

function App() {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    let animationFrameId: number
    function raf(time: number) {
      lenisRef.current?.lenis?.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }
    animationFrameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])
  return (
    <main className="w-full min-h-screen h-full flex flex-col justify-center items-center gap-4 bg-white-main dark:bg-black-main text-black dark:text-white">
      <ReactLenis root ref={lenisRef} className="max-w-8xl w-full relative">
        <Navbar />

        <div className="w-full h-full flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<AboutUs />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </div>

        {/* Ir arriba */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 bg-red-main text-white-main p-2 rounded-full cursor-pointer"
        >
          <Icon
            icon="material-symbols:arrow-upward-rounded"
            className="size-8"
          />
        </button>

        {/* WhatsApp */}
        <Link
          to="https://api.whatsapp.com/send?phone=5491136801229"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-4 bg-green-500 text-white-main p-2 rounded-full"
        >
          <Icon icon="mdi:whatsapp" className="size-8" />
        </Link>

        <Footer />
      </ReactLenis>
    </main>
  )
}

export default App
