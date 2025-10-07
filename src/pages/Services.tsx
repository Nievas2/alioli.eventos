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

      {/* First Service PIZZA PARTY */}
      <div
        className="flex flex-col items-center justify-around md:flex-row gap-8 z-20"
        id="1"
      >
        <div className="flex flex-col gap-5 w-fit">
          <h3 className="text-4xl font-bold text-blue-800 dark:text-blue-300 leading-tight">
            PIZZA PARTY
          </h3>
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-[540px]">
            <h5 className="text-lg font-bold">
              Clasico servicio de pizza libre, ideal para un evento mas
              descontracturado incluye:
            </h5>

            <p>
              Entrada de canastitas surtidas, Pizza libre con variedad de
              toppings, vajilla descartable, mozos y traslado incluidos.
              Duracion 3hs aprox.
            </p>
          </div>
        </div>

        <div className="flex flex-col size-80 bg-[url('/services/pizza-party.webp')] bg-cover bg-center rounded-lg shadow-lg"></div>
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

      {/* Second Service LUNCH PARTY */}
      <div
        className="flex flex-col items-center justify-around md:flex-row-reverse gap-8 z-20"
        id="2"
      >
        <div className="flex flex-col gap-5 w-fit">
          <h3 className="text-4xl font-bold text-red-600 dark:text-red-400 leading-tight">
            LUNCH PARTY
          </h3>
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-[540px]">
            <h5 className="text-lg font-bold">
              Evento descontracturado tipo buffet. Incluye:
            </h5>

            <p>
              Entrada tabla de fiambres, fileteado de pernil y armado
              sanguchitos.
            </p>

            <p>Variedad canastitas, lunch, migas, bagels.</p>

            <p>
              Vajilla descartable, mozos y traslado incluidos. Duracion 3hs
              aprox.
            </p>
          </div>
        </div>

        <div className="flex flex-col size-80 bg-[url('/services/lunch.webp')] bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"></div>
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

      {/* Third Service MENU AL PLATO / CARNES */}
      <div
        className="flex flex-col items-center justify-around md:flex-row gap-8 z-20"
        id="3"
      >
        <div className="flex flex-col gap-5 w-fit">
          <h3 className="text-4xl font-bold text-blue-800 dark:text-blue-300 leading-tight">
            MENU AL PLATO / CARNES
          </h3>
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-[540px]">
            <p>
              Para un evento mas formal, con comida al plato y servicio de mesa.
              Menu personalizado, con cortes de carne, ensaladas, entrada y
              postre inlcuye alquiler de Vajilla, mozos y traslado. Duracion 3hs
              aprox.
            </p>
          </div>
        </div>

        <div className="flex flex-col size-80 bg-[url('/services/meats.webp')] bg-cover bg-center rounded-lg shadow-lg"></div>
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

      {/* fourth Service MESA DULCE Y TORTA */}
      <div
        className="flex flex-col items-center justify-around md:flex-row-reverse gap-8 z-20"
        id="4"
      >
        <div className="flex flex-col gap-5 w-fit">
          <h3 className="text-4xl font-bold text-red-600 dark:text-red-400 leading-tight">
            MESA DULCE Y TORTA
          </h3>
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-[540px]">
            <h5 className="text-lg font-bold">
              Te resolvemos todo en un solo lugar. para sumar a tu servicio:
            </h5>

            <p>
              <b>TORTA PRINCIPAL</b>, personalizable tanto en sabores como
              decoracion y <b>MESA DULCE</b>, con variedad de postres.
            </p>

            <p>
              Ademas, contamos con <b>CAFETERAS</b>, para el fin de fiesta, o
              para acompañar el postre.
            </p>
          </div>
        </div>

        <div className="flex flex-col size-80 bg-[url('/services/sweet-table.webp')] bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"></div>
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

      {/* fifth Service BEBIDAS */}
      <div
        className="flex flex-col items-center justify-around md:flex-row gap-8 z-20"
        id="5"
      >
        <div className="flex flex-col gap-5 w-fit">
          <h3 className="text-4xl font-bold text-blue-800 dark:text-blue-300 leading-tight">
            BEBIDAS
          </h3>

          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-[540px]">
            <h5 className="text-lg font-bold">
              Tambien podes agregar a tu evento la Bebida Libre.
            </h5>

            <p>
              <b>Sin alcohol</b>: (gaseosas primera linea, jugos y agua, con
              hielo y vajilla descartable)
            </p>

            <p>
              <b>Con alcohol</b>: (Latas de cerveza, Vino tinto-blanco, fernet
              campari y gancia) vajilla descartable o alquiler de vasos vidrio.
            </p>
          </div>
        </div>

        <div className="flex flex-col size-80 bg-[url('/services/drinks.webp')] bg-cover bg-no-repeat bg-center rounded-lg shadow-lg"></div>
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

      {/* sixth Service CORPORATIVOS */}
      <div
        className="flex flex-col items-center justify-around md:flex-row-reverse gap-8 z-20"
        id="6"
      >
        <div className="flex flex-col gap-5 w-fit">
          <h3 className="text-4xl font-bold text-red-600 dark:text-red-400 leading-tight">
            CORPORATIVOS
          </h3>
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-[540px]">
            <p>
              Eventos empresariales, con buffet dulce o salado, coffee break,
              todo personalizable. incluye mozos, vajilla descartable y
              traslado.
            </p>
          </div>
        </div>

        <div className="flex flex-col size-80 bg-[url('/services/corporate.webp')] bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"></div>
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

      {/* seventh Service MERIENDAS */}
      <div
        className="flex flex-col items-center justify-around md:flex-row gap-8 z-20"
        id="7"
      >
        <div className="flex flex-col gap-5 w-fit">
          <h3 className="text-4xl font-bold text-blue-800 dark:text-blue-300 leading-tight">
            MERIENDAS
          </h3>
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-[540px]">
            <p>
              Coffee break, con alquiler de cafeteras, te, jugos y Pasteleria
              tradicional (tartas, cookies, alfajores), Postres (minitortas,
              shots), Torta principal y opciones saladas.
            </p>

            <p>
              Incluye vajilla descartable, mozos y traslado. Duración 3hs aprox
            </p>
          </div>
        </div>

        <div className="flex flex-col size-80 bg-[url('/services/snack.webp')] bg-cover bg-center rounded-lg shadow-lg"></div>
      </div>
    </div>
  )
}

export default Services
