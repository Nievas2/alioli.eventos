import { Link, Route, Routes } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Footer from "./components/shared/Footer"
import type { LenisRef } from "lenis/react"
import { useEffect, useRef, useState } from "react"
import { ReactLenis } from "lenis/react"
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import { Icon } from "@iconify/react"
import Home from "./pages/Home"
import { motion } from "motion/react"

function App() {
  const lenisRef = useRef<LenisRef>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    let animationFrameId: number

    function raf(time: number) {
      const lenis = lenisRef.current?.lenis
      lenis?.raf(time)

      // Detecta el scroll
      if (lenis) {
        const scrollY = lenis.scroll
        setShowScrollTop(scrollY > 200) // cambia "200" por lo que prefieras
      }

      animationFrameId = requestAnimationFrame(raf)
    }

    animationFrameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <main className="w-full min-h-screen h-full flex flex-col justify-center items-center gap-4 bg-white-main dark:bg-black-main text-black dark:text-white">
      <ReactLenis root ref={lenisRef}>
        <div className="max-w-8xl w-full relative">
          <Navbar />

          <div className="w-full h-full flex flex-col min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre-nosotros" element={<AboutUs />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </div>

          {/* Floating buttons */}
          <div className="flex flex-col p-4 fixed bottom-0 right-0 gap-4 z-50">
            {/* Go up */}
            {showScrollTop && (
              <motion.button
                className="bg-red-main text-white-main p-2 rounded-full cursor-pointer min-h-12 min-w-12 w-full h-full"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                initial={{ opacity: 0, rotate: 360 }}
                exit={{ opacity: 0, rotate: 360 }}
                animate={{ opacity: 1, rotate: 0, transition: { duration: 1 } }}
              >
                <Icon
                  icon="material-symbols:arrow-upward-rounded"
                  className="size-8"
                />
              </motion.button>
            )}

            {/* WhatsApp */}
            <Link
              to="https://api.whatsapp.com/send?phone=5491131760618"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white-main p-2 rounded-full min-h-12 min-w-12 w-full h-full flex items-center justify-center"
              aria-label="Contact us on WhatsApp"
            >
              <Icon icon="mdi:whatsapp" className="size-8" aria-hidden="true" />
              <span className="sr-only">Contactanos a WhatsApp</span>
            </Link>
          </div>

          <Footer />
        </div>
      </ReactLenis>
    </main>
  )
}

export default App
