import { useEffect, useLayoutEffect, type JSX } from "react"
import { useLocation } from "react-router-dom"
import { motion, useReducedMotion } from "motion/react"

// Componente reutilizable para separadores
const ServiceSeparator = ({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean
}) => (
  <div
    className="flex items-center justify-center my-8"
    role="separator"
    aria-hidden="true"
  >
    <motion.div
      initial={{ width: shouldReduceMotion ? "100%" : 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: shouldReduceMotion ? 0 : 2 }}
      className="flex items-center justify-end h-px bg-gray-300 dark:bg-gray-600"
    />
    <motion.div
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        scale: shouldReduceMotion ? 1 : 0,
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0 : 1 }}
      className="mx-6 size-4 px-2 bg-red-main rounded-full"
    />
    <motion.div
      initial={{ width: shouldReduceMotion ? "100%" : 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: shouldReduceMotion ? 0 : 2 }}
      className="flex items-center justify-end h-px bg-gray-300 dark:bg-gray-600"
    />
  </div>
)

// Tipo para los datos de servicios
interface ServiceData {
  id: string
  title: string
  content: JSX.Element
  image: string
  reverse?: boolean
  colorScheme: "blue" | "red"
}

const Services = () => {
  const location = useLocation()
  const shouldReduceMotion = useReducedMotion()

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - 150

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

  // Data estructurada de servicios
  const services: ServiceData[] = [
    {
      id: "1",
      title: "Pizza Party",
      colorScheme: "blue",
      image: "/services/pizza-party.webp",
      content: (
        <>
          <h4 className="text-lg font-bold mb-3">
            Clásico servicio de pizza libre, ideal para un evento más
            descontracturado. Incluye:
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Entrada de canastitas surtidas</li>
            <li>Pizza libre con variedad de toppings</li>
            <li>Vajilla descartable</li>
            <li>Mozos y traslado incluidos</li>
            <li>Duración: 3hs aproximadamente</li>
          </ul>
        </>
      ),
    },
    {
      id: "2",
      title: "Lunch Party",
      colorScheme: "red",
      reverse: true,
      image: "/services/lunch.webp",
      content: (
        <>
          <h4 className="text-lg font-bold mb-3">
            Evento descontracturado tipo buffet. Incluye:
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Entrada: tabla de fiambres, fileteado de pernil y sándwiches
              armados
            </li>
            <li>Variedad: canastitas, lunch, migas, bagels</li>
            <li>Vajilla descartable</li>
            <li>Mozos y traslado incluidos</li>
            <li>Duración: 3hs aproximadamente</li>
          </ul>
        </>
      ),
    },
    {
      id: "3",
      title: "Menú al Plato / Carnes",
      colorScheme: "blue",
      image: "/services/meats.webp",
      content: (
        <>
          <p className="mb-3">
            Para un evento más formal, con comida al plato y servicio de mesa.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Menú personalizado con cortes de carne</li>
            <li>Ensaladas, entrada y postre</li>
            <li>Alquiler de vajilla</li>
            <li>Mozos y traslado incluidos</li>
            <li>Duración: 3hs aproximadamente</li>
          </ul>
        </>
      ),
    },
    {
      id: "4",
      title: "Mesa Dulce y Torta",
      colorScheme: "red",
      reverse: true,
      image: "/services/sweet-table.webp",
      content: (
        <>
          <h4 className="text-lg font-bold mb-3">
            Te resolvemos todo en un solo lugar para sumar a tu servicio:
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Torta Principal:</strong> personalizable en sabores y
              decoración
            </li>
            <li>
              <strong>Mesa Dulce:</strong> con variedad de postres
            </li>
            <li>
              <strong>Cafeteras:</strong> para el fin de fiesta o acompañar el
              postre
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "5",
      title: "Bebidas",
      colorScheme: "blue",
      image: "/services/drinks.webp",
      content: (
        <>
          <h4 className="text-lg font-bold mb-3">
            También podés agregar a tu evento la Bebida Libre:
          </h4>
          <div className="space-y-3">
            <div>
              <strong className="block mb-1">Sin alcohol:</strong>
              <p className="ml-4">
                Gaseosas primera línea, jugos, agua, hielo y vajilla descartable
              </p>
            </div>
            <div>
              <strong className="block mb-1">Con alcohol:</strong>
              <p className="ml-4">
                Latas de cerveza, vino tinto/blanco, fernet, campari y gancia
              </p>
              <p className="ml-4 text-sm italic">
                Vajilla descartable o alquiler de vasos de vidrio
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "6",
      title: "Corporativos",
      colorScheme: "red",
      reverse: true,
      image: "/services/corporate.webp",
      content: (
        <>
          <p className="mb-3">
            Eventos empresariales personalizables. Incluye:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Buffet dulce o salado</li>
            <li>Coffee break</li>
            <li>Mozos</li>
            <li>Vajilla descartable</li>
            <li>Traslado incluido</li>
          </ul>
        </>
      ),
    },
    {
      id: "7",
      title: "Meriendas",
      colorScheme: "blue",
      image: "/services/snack.webp",
      content: (
        <>
          <h4 className="text-lg font-bold mb-3">Coffee break completo:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Alquiler de cafeteras, té y jugos</li>
            <li>Pastelería tradicional: tartas, cookies, alfajores</li>
            <li>Postres: minitortas, shots</li>
            <li>Torta principal y opciones saladas</li>
            <li>Vajilla descartable, mozos y traslado</li>
            <li>Duración: 3hs aproximadamente</li>
          </ul>
        </>
      ),
    },
  ]

  return (
    <article className="flex flex-col w-full transition-colors duration-150 relative gap-8 p-4 md:p-10">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 text-blue-800 dark:text-blue-300">
          Nuestros Servicios
        </h1>
        <div className="w-24 h-1 bg-red-main mx-auto mb-6" aria-hidden="true" />
        <p className="text-xl font-light max-w-2xl mx-auto leading-relaxed opacity-80">
          Descubre todo lo que podemos hacer por tu evento especial
        </p>
      </header>

      {/* Servicios */}
      {services.map((service) => (
        <div key={service.id}>
          <ServiceSeparator shouldReduceMotion={!!shouldReduceMotion} />

          <section
            className={`flex flex-col items-center justify-around gap-8 z-20 ${
              service.reverse ? "md:flex-row-reverse" : "md:flex-row"
            }`}
            id={service.id}
            aria-labelledby={`service-title-${service.id}`}
          >
            <div className="flex flex-col gap-5 w-fit max-w-[600px]">
              <h2
                id={`service-title-${service.id}`}
                className={`text-4xl font-bold leading-tight ${
                  service.colorScheme === "blue"
                    ? "text-blue-800 dark:text-blue-300"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {service.title}
              </h2>

              <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {service.content}
              </div>
            </div>

            <div
              className="flex flex-col size-80 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('${service.image}')`,
                willChange: "background-image",
              }}
              role="img"
              aria-label={`Imagen ilustrativa del servicio ${service.title}`}
            />
          </section>
        </div>
      ))}
    </article>
  )
}

export default Services
