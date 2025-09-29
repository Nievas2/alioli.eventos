import { useEffect, useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"
import { motion } from "motion/react"

const Services = () => {
  const location = useLocation()

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - 150 // 150px offset para navbar

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const hash = location.hash

    if (hash) {
      const elementId = hash.replace("#", "")

      const timeoutId = setTimeout(() => {
        scrollToElement(elementId)
      }, 100)

      return () => clearTimeout(timeoutId)
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [location.pathname, location.hash])

  useLayoutEffect(() => {
    const hash = location.hash
    if (hash) {
      const elementId = hash.replace("#", "")
      requestAnimationFrame(() => {
        scrollToElement(elementId)
      })
    }
  }, [location.hash])

  return (
    <div className="flex flex-col w-full transition-colors duration-150 relative gap-8 p-4 md:p-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 text-blue-800 dark:text-blue-300">
          Nuestros Servicios
        </h2>
        <div className="w-24 h-1 bg-red-main mx-auto mb-6"></div>
        <p className="text-xl font-light max-w-2xl mx-auto leading-relaxed opacity-80">
          Descubre todo lo que podemos hacer por tu evento especial
        </p>
      </div>

      {/* Separator */}
      <div className="flex items-center justify-center mb-4">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 2 } }}
          className="flex items-center justify-end h-px bg-gray-300 dark:bg-gray-600"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
          className="mx-6 size-4 px-2 bg-red-main rounded-full"
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 2 } }}
          className="flex items-center justify-end h-px bg-gray-300 dark:bg-gray-600"
        ></motion.div>
      </div>

      {/* First Service */}
      <div className="flex flex-col items-center md:flex-row gap-4 z-20" id="1">
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl font-bold text-blue-800 dark:text-blue-300 leading-tight">
            Catering Integral
          </h3>
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              Ofrecemos un servicio completo de catering que incluye menús
              personalizados, servicio de mesa profesional, y atención
              especializada. Desde eventos íntimos hasta grandes celebraciones,
              nos adaptamos a tus necesidades y presupuesto, garantizando una
              experiencia gastronómica memorable para todos tus invitados.
            </p>
          </div>
        </div>
        <img
          src="/logo.webp"
          alt="Catering Integral"
          className="w-[352px] lg:w-[40%] lg:max-w-[400px] lg:flex"
        />
      </div>

      {/* Separator */}
      <div className="flex items-center justify-center" id="2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 2 } }}
          className="flex items-center justify-end h-px bg-gray-300 dark:bg-gray-600"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
          className="mx-6 size-4 px-2 bg-red-main rounded-full"
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 2 } }}
          className="flex items-center justify-end h-px bg-gray-300 dark:bg-gray-600"
        ></motion.div>
      </div>

      {/* Second Service */}
      <div className="flex flex-col items-center md:flex-row-reverse gap-4 xl:gap-[185px] z-20">
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl font-bold text-red-600 dark:text-red-400 leading-tight md:text-right">
            Organización de Eventos
          </h3>
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 md:text-right">
            <p>
              Nos encargamos de cada detalle de tu evento, desde la
              planificación inicial hasta la ejecución final. Coordinamos
              proveedores, decoración, cronograma y logística completa. Tu única
              preocupación será disfrutar de tu día especial mientras nosotros
              nos ocupamos de que todo salga perfecto.
            </p>
          </div>
        </div>
        <img
          src="/logo.webp"
          alt="Organización de Eventos"
          className="w-[352px] lg:w-[40%] lg:max-w-[400px] lg:flex"
        />
      </div>

      {/* Separator */}
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 2 } }}
          className="flex items-center justify-end h-px bg-gray-300 dark:bg-gray-600"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
          className="mx-6 size-4 px-2 bg-red-main rounded-full"
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 2 } }}
          className="flex items-center justify-end h-px bg-gray-300 dark:bg-gray-600"
        ></motion.div>
      </div>

      {/* Third Service */}
      <div id="3" className="flex flex-col items-center md:flex-row gap-4 z-20">
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl font-bold text-blue-800 dark:text-blue-300 leading-tight">
            Servicio Premium
          </h3>
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              Ofrecemos un servicio completo de catering que incluye menús
              personalizados, servicio de mesa profesional, y atención
              especializada. Desde eventos íntimos hasta grandes celebraciones,
              nos adaptamos a tus necesidades y presupuesto, garantizando una
              experiencia gastronómica memorable para todos tus invitados.
            </p>
          </div>
        </div>
        <img
          src="/logo.webp"
          alt="Servicio Premium"
          className="w-[352px] lg:w-[40%] lg:max-w-[400px] lg:flex"
        />
      </div>

      {/* Separator */}
      <div className="flex items-center justify-center" id="2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 2 } }}
          className="flex items-center justify-end h-px bg-gray-300 dark:bg-gray-600"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
          className="mx-6 size-4 px-2 bg-red-main rounded-full"
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 2 } }}
          className="flex items-center justify-end h-px bg-gray-300 dark:bg-gray-600"
        ></motion.div>
      </div>

      {/* fourth Service */}
      <div
        id="4"
        className="flex flex-col items-center md:flex-row-reverse gap-4 xl:gap-[185px] z-20"
      >
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl font-bold text-red-600 dark:text-red-400 leading-tight md:text-right">
            Organización de Eventos
          </h3>
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 md:text-right">
            <p>
              Nos encargamos de cada detalle de tu evento, desde la
              planificación inicial hasta la ejecución final. Coordinamos
              proveedores, decoración, cronograma y logística completa. Tu única
              preocupación será disfrutar de tu día especial mientras nosotros
              nos ocupamos de que todo salga perfecto.
            </p>
          </div>
        </div>
        <img
          src="/logo.webp"
          alt="Organización de Eventos"
          className="w-[352px] lg:w-[40%] lg:max-w-[400px] lg:flex"
        />
      </div>

      {/* Separator */}
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 2 } }}
          className="flex items-center justify-end h-px bg-gray-300 dark:bg-gray-600"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
          className="mx-6 size-4 px-2 bg-red-main rounded-full"
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 2 } }}
          className="flex items-center justify-end h-px bg-gray-300 dark:bg-gray-600"
        ></motion.div>
      </div>

      {/* fifth Service */}
      <div id="5" className="flex flex-col items-center md:flex-row gap-4 z-20">
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl font-bold text-blue-800 dark:text-blue-300 leading-tight">
            Servicio Premium
          </h3>
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              Ofrecemos un servicio completo de catering que incluye menús
              personalizados, servicio de mesa profesional, y atención
              especializada. Desde eventos íntimos hasta grandes celebraciones,
              nos adaptamos a tus necesidades y presupuesto, garantizando una
              experiencia gastronómica memorable para todos tus invitados.
            </p>
          </div>
        </div>
        <img
          src="/logo.webp"
          alt="Servicio Premium"
          className="w-[352px] lg:w-[40%] lg:max-w-[400px] lg:flex"
        />
      </div>

      {/* Separator */}
      <div className="flex items-center justify-center" id="2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 2 } }}
          className="flex items-center justify-end h-px bg-gray-300 dark:bg-gray-600"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
          className="mx-6 size-4 px-2 bg-red-main rounded-full"
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 2 } }}
          className="flex items-center justify-end h-px bg-gray-300 dark:bg-gray-600"
        ></motion.div>
      </div>

      {/* sixth Service */}
      <div
        id="6"
        className="flex flex-col items-center md:flex-row-reverse gap-4 xl:gap-[185px] z-20"
      >
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl font-bold text-red-600 dark:text-red-400 leading-tight md:text-right">
            Organización de Eventos
          </h3>
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 md:text-right">
            <p>
              Nos encargamos de cada detalle de tu evento, desde la
              planificación inicial hasta la ejecución final. Coordinamos
              proveedores, decoración, cronograma y logística completa. Tu única
              preocupación será disfrutar de tu día especial mientras nosotros
              nos ocupamos de que todo salga perfecto.
            </p>
          </div>
        </div>
        <img
          src="/logo.webp"
          alt="Organización de Eventos"
          className="w-[352px] lg:w-[40%] lg:max-w-[400px] lg:flex"
        />
      </div>

      {/* Separator */}
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 2 } }}
          className="flex items-center justify-end h-px bg-gray-300 dark:bg-gray-600"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
          className="mx-6 size-4 px-2 bg-red-main rounded-full"
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 2 } }}
          className="flex items-center justify-end h-px bg-gray-300 dark:bg-gray-600"
        ></motion.div>
      </div>

      {/* seventh Service */}
      <div id="7" className="flex flex-col items-center md:flex-row gap-4 z-20">
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl font-bold text-blue-800 dark:text-blue-300 leading-tight">
            Servicio Premium
          </h3>
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              Ofrecemos un servicio completo de catering que incluye menús
              personalizados, servicio de mesa profesional, y atención
              especializada. Desde eventos íntimos hasta grandes celebraciones,
              nos adaptamos a tus necesidades y presupuesto, garantizando una
              experiencia gastronómica memorable para todos tus invitados.
            </p>
          </div>
        </div>
        <img
          src="/logo.webp"
          alt="Servicio Premium"
          className="w-[352px] lg:w-[40%] lg:max-w-[400px] lg:flex"
        />
      </div>
    </div>
  )
}

export default Services
