import { Link } from "react-router-dom"
import { motion } from "motion/react"
const Events = () => {
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
          Te mostramos algunos momentos vividos, ¡Esperamos que el próximo seas tú!.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-4 grid-rows-8 lg:grid-cols-8 lg:grid-rows-8 p-4">
        <Link
          to="/servicios#1"
          className="col-span-1 md:col-span-2 md:row-span-3 lg:col-span-2 lg:row-span-6 bg-blue-main w-full h-full bg-[url('/logo.webp')] bg-cover bg-center bg-no-repeat"
        >
          1
        </Link>

        <Link
          to="/servicios#2"
          className="col-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-7 bg-blue-main w-full h-full bg-[url('/logo.webp')] bg-cover bg-center bg-no-repeat"
        >
          2
        </Link>

        <Link
          to="/servicios#3"
          className="col-span-1 md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-5 lg:col-start-3 lg:row-start-1 bg-blue-main w-full h-96 bg-[url('/logo.webp')] bg-cover bg-center bg-no-repeat"
        >
          3
        </Link>

        <Link
          to="/servicios#4"
          className="col-span-1 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-4 lg:col-start-7 lg:row-start-1 bg-blue-main w-full h-full bg-[url('/logo.webp')] bg-cover bg-center bg-no-repeat"
        >
          4
        </Link>

        <Link
          to="/servicios#5"
          className="col-span-1 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-6 bg-blue-main w-full h-full bg-[url('/logo.webp')] bg-cover bg-center bg-no-repeat"
        >
          5
        </Link>

        <Link
          to="/servicios#6"
          className="col-span-1 md:col-span-2 md:row-span-4 lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-6 bg-blue-main w-full h-full bg-[url('/logo.webp')] bg-cover bg-center bg-no-repeat"
        >
          6
        </Link>

        <Link
          to="/servicios#7"
          className="col-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-4 lg:col-start-7 lg:row-start-5 bg-blue-main w-full h-full bg-[url('/logo.webp')] bg-cover bg-center bg-no-repeat"
        >
          7
        </Link>
      </section>
    </main>
  )
}
export default Events
