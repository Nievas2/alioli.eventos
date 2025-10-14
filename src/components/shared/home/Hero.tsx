import { useEffect, useState } from "react"

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = "/home/portada.webp"
    img.onload = () => setImageLoaded(true)
  }, [])

  return (
    <section
      className={`w-full h-[90vh] flex justify-center items-center bg-gray-800 bg-cover bg-no-repeat transition-opacity duration-500 ${
        imageLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: imageLoaded ? "url('/home/portada.webp')" : "none",
        backgroundPosition: "20% 75%",
      }}
      aria-label="Sección principal"
    >
      {/* Skip link para accesibilidad */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black"
      >
        Saltar al contenido principal
      </a>

      <div className="p-4 flex flex-col items-center justify-center gap-6">
        <h1 className="font-bold leading-10 tracking-wide text-4xl sm:text-5xl md:text-6xl text-center text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Servicio de catering integral
        </h1>

        <p className="font-semibold leading-6 tracking-wide text-2xl text-center text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          <em>Sé un invitado más</em>
        </p>
      </div>
    </section>
  )
}

export default Hero
