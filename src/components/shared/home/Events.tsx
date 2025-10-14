import { Icon } from "@iconify/react"
import { useReducedMotion, motion } from "motion/react"
import { Link } from "react-router-dom"

const Events = () => {
  const shouldReduceMotion = useReducedMotion()

  const events = [
    {
      id: 1,
      title: "Pizza Party",
      description:
        "Clásico servicio de pizza libre, ideal para un evento más descontracturado",
      image: "/home/pizza-party.webp",
      gridClass:
        "col-span-1 md:col-span-2 md:row-span-3 lg:col-span-2 lg:row-span-6 h-96 md:h-full lg:h-full",
    },
    {
      id: 2,
      title: "Lunch Party",
      description: "Para tus eventos más descontracturados tipo buffet",
      image: "/home/lunch.webp",
      gridClass:
        "col-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-7 h-full",
    },
    {
      id: 4,
      title: "Mesa Dulce y Torta",
      description:
        "Te resolvemos todo en un solo lugar para sumar a tu servicio",
      image: "/home/sweet-table.webp",
      gridClass:
        "col-span-1 md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-5 lg:col-start-3 lg:row-start-1 md:h-96 h-full",
    },
    {
      id: 3,
      title: "Menú al Plato / Carnes",
      description:
        "Para un evento más formal, con comida al plato y servicio de mesa",
      image: "/home/meats.webp",
      gridClass:
        "col-span-1 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-4 lg:col-start-7 lg:row-start-1 h-full",
    },
    {
      id: 5,
      title: "Bebidas",
      description: "Podés agregar a tus eventos la Bebida Libre",
      image: "/home/drinks.webp",
      gridClass:
        "col-span-1 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-6 h-full",
    },
    {
      id: 6,
      title: "Corporativos",
      description:
        "Para eventos empresariales, con buffet dulce o salado, coffee break, etc.",
      image: "/home/corporate.webp",
      gridClass:
        "col-span-1 md:col-span-2 md:row-span-4 lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-6 h-full",
    },
    {
      id: 7,
      title: "Meriendas",
      description:
        "Coffee break, con alquiler de cafeteras, té, jugos y pastelería",
      image: "/home/snack.webp",
      gridClass:
        "col-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-4 lg:col-start-7 lg:row-start-5 h-full",
    },
  ]

  return (
    <section className="flex flex-col gap-12" aria-labelledby="events-heading">
      {/* Header */}
      <header className="text-center w-full">
        <h2
          id="events-heading"
          className="text-4xl font-bold mb-4 text-blue-800 dark:text-blue-100"
        >
          Eventos
        </h2>
        <motion.div
          initial={{ width: shouldReduceMotion ? "150px" : 0 }}
          animate={{ width: "150px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1 }}
          className="h-1 bg-red-main mx-auto mb-4"
          aria-hidden="true"
        />
        <p className="text-lg text-gray-600 dark:text-gray-200">
          Te mostramos algunos momentos vividos. ¡Esperamos que el próximo seas
          tú!
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 grid-rows-7 lg:grid-cols-8 lg:grid-rows-8 p-4">
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/servicios#${event.id}`}
            className={`bg-blue-main w-full bg-cover bg-center bg-no-repeat relative overflow-hidden group focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 rounded-lg transition-transform hover:scale-[1.02] ${event.gridClass}`}
            style={{ backgroundImage: `url('${event.image}')` }}
            aria-label={`Ver más detalles sobre ${event.title}: ${event.description}`}
          >
            {/* Capa oscura para mejorar contraste */}
            <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

            {/* Overlay para mobile - siempre visible */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent pt-12 pb-4 px-4 lg:hidden">
              <h3 className="text-white font-semibold text-xl">
                {event.title}
              </h3>
              <p className="text-sm text-white mt-2 line-clamp-2">
                {event.description}
              </p>
            </div>

            {/* Overlay para desktop - visible en hover */}
            <div className="hidden lg:block opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
              <div className="absolute bottom-0 w-full p-4">
                <h3 className="text-white font-bold text-2xl mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-white line-clamp-3">
                  {event.description}
                </p>
                <span className="inline-block mt-1 text-white text-sm font-semibold border-b-2 border-white pb-1">
                  Ver más →
                </span>
              </div>
            </div>

            {/* Indicador visual de que es clickeable */}
            <div
              className="absolute top-4 right-4 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity lg:block hidden min-h-10 min-w-10 "
              aria-hidden="true"
            >
              <Icon icon="ep:right" className="w-6 h-6 text-gray-800" />
              <span className="sr-only">Ir a {event.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Events
