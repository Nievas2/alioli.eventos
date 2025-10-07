import { Link } from "react-router-dom"
import { motion } from "motion/react"

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Pizza Party",
      description:
        "Clasico servicio de pizza libre, ideal para un evento mas descontracturado...",
      image: "/home/pizza-party.webp",
      gridClass:
        "col-span-1 md:col-span-2 md:row-span-3 lg:col-span-2 lg:row-span-6 h-96 md:h-full lg:h-full",
    },
    {
      id: 2,
      title: "Lunch Party",
      description: "Para tus eventos mas descontracturado tipo buffet...",
      image: "/home/lunch.webp",
      gridClass:
        "col-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-7 h-full",
    },
    {
      id: 4,
      title: "MESA DULCE Y TORTA",
      description:
        "Te resolvemos todo en un solo lugar. para sumar a tu servicio...",
      image: "/home/sweet-table.webp",
      gridClass:
        "col-span-1 md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-5 lg:col-start-3 lg:row-start-1 md:h-96 h-full",
    },
    {
      id: 3,
      title: "MENU AL PLATO / CARNES",
      description:
        "Para un evento mas formal, con comida al plato y servicio de mesa...",
      image: "/home/meats.webp",
      gridClass:
        "col-span-1 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-4 lg:col-start-7 lg:row-start-1 h-full",
    },
    {
      id: 5,
      title: "Bebidas",
      description: "Podes agregar a tus eventos la Bebida Libre...",
      image: "/home/drinks.webp",
      gridClass:
        "col-span-1 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-6 h-full",
    },
    {
      id: 6,
      title: "Corporativos",
      description:
        "Para eventos empresariales, con buffet dulce o salado, coffee break, etc...",
      image: "/home/corporate.webp",
      gridClass:
        "col-span-1 md:col-span-2 md:row-span-4 lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-6 h-full",
    },
    {
      id: 7,
      title: "Meriendas",
      description:
        "Coffee break, con alquiler de cafeteras, te, jugos y pasteleria...",
      image: "/home/snack.webp",
      gridClass:
        "col-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-4 lg:col-start-7 lg:row-start-5 h-full",
    },
  ]

  return (
    <main className="flex flex-col gap-12">
      {/* Header */}
      <div className="text-center w-full">
        <h2 className="text-4xl font-bold mb-4 text-blue-800 dark:text-blue-100">
          Eventos
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "150px", transition: { duration: 1 } }}
          className="h-1 bg-red-main mx-auto mb-4"
        ></motion.div>
        <p className="text-lg text-gray-600 dark:text-gray-200">
          Te mostramos algunos momentos vividos, ¡Esperamos que el próximo seas
          tú!.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-4 grid-rows-8 lg:grid-cols-8 lg:grid-rows-8 p-4">
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/servicios#${event.id}`}
            className={`bg-blue-main w-full bg-cover bg-center bg-no-repeat relative overflow-hidden group ${event.gridClass}`}
            style={{ backgroundImage: `url('${event.image}')` }}
          >
            {/* Overlay para mobile - siempre visible */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12 pb-4 px-4 lg:hidden">
              <h3 className="text-white font-semibold text-xl">
                {event.title}
              </h3>

              <p className="text-xs text-white mt-2 line-clamp-1">
                {event.description}
              </p>
            </div>

            {/* Overlay para desktop - visible en hover */}
            <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
              <div className="w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-white font-bold text-2xl">{event.title}</h3>
                <p className="text-xs text-white mt-2 line-clamp-1">
                  {event.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
export default Events
