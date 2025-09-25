import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"

const AboutUs = () => {
  return (
    <div className=" px-6 py-12">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
          Sobre Nosotros
        </h2>
        <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
        <p className="text-xl font-light max-w-2xl mx-auto leading-relaxed opacity-80">
          Te contamos quiénes somos, por qué somos lo que hacemos y cómo nació
          nuestra empresa.
        </p>
      </section>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* Logo Section */}
        <div className="lg:col-span-1 flex justify-center lg:justify-start">
          <div className="relative">
            <img
              src="/logo.webp"
              className="w-80 h-80 object-contain rounded-2xl shadow-2xl border-4 border-blue-100 dark:border-blue-900"
              alt="Nosotros"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-red-500/10 rounded-2xl"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-5">
              En el corazón de nuestra historia hay un grupo de amigos unidos
              por una pasión inquebrantable: el amor por la buena comida, la
              excelencia en el servicio y la alegría de crear experiencias
              inolvidables. Fue esa conexión especial la que nos llevó a unirnos
              con un propósito claro: ofrecer un servicio integral y
              personalizado para eventos que transformen momentos especiales en
              recuerdos imborrables.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Para lograrlo, nos esforzamos por estar siempre a la vanguardia.
              Nos capacitamos de manera constante, explorando nuevas tendencias,
              técnicas y estilos para ofrecerte un servicio innovador y de
              calidad. Esta dedicación nos permite presentarte un amplio abanico
              de opciones, desde menús exquisitos que deleitan el paladar hasta
              detalles personalizados que reflejan tu visión y estilo.
            </p>
          </div>
        </div>
      </div>

      {/* Story Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-700">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
              <Icon icon="mdi:heart" className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">
              Nuestra Pasión
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Nos emociona ser parte de los instantes que marcan la vida, desde
            celebraciones íntimas hasta grandes eventos. Nos dedicamos a cuidar
            cada detalle con esmero, desde la planificación hasta la ejecución,
            para que tú solo tengas que preocuparte por disfrutar.
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-8 rounded-2xl shadow-lg border border-red-200 dark:border-red-700">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
              <Icon icon="mdi:target" className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-red-600 dark:text-red-400">
              Nuestra Misión
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Nuestra misión es simple pero poderosa: queremos que vivas tu evento
            como un invitado más, libre de preocupaciones y con la certeza de
            que todo está en las mejores manos.
          </p>
        </div>
      </div>

      {/* Additional Content */}
      <div className="space-y-8 mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center">
            <Icon icon="mdi:certificate" className="mr-3 text-blue-600" />
            Nuestro Compromiso
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Nuestro compromiso va más allá de cumplir expectativas; buscamos
            superarlas. Cada evento es una oportunidad para demostrar nuestra
            pasión por lo que hacemos, trabajando con profesionalismo,
            creatividad y un enfoque humano que nos distingue. Con cada
            celebración, nuestro objetivo sigue siendo el mismo: que tú y tus
            seres queridos puedan disfrutar plenamente, confiando en que cada
            aspecto está cuidadosamente orquestado para hacer de tu día algo
            verdaderamente especial.
          </p>
        </div>
      </div>

      {/* Partnership Section */}
      <section className="text-center bg-gradient-to-br from-blue-100 to-red-100 dark:from-blue-900/30 dark:to-red-900/30 p-12 rounded-3xl shadow-2xl border border-blue-200 dark:border-blue-700">
        <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
          Por si no lo sabías
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mb-6"></div>
        <p className="text-xl font-light mb-8 opacity-80">
          Estamos asociados con La Dulce Tradición
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="https://www.instagram.com/la.dulce.tradicion/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-all duration-300 hover:shadow-lg rounded-full"
          >
            <Icon
              icon="mdi:instagram"
              className="w-14 h-14 drop-shadow-lg"
              style={{ color: "#E1306C" }}
            />
          </Link>

          <Link
            to="https://api.whatsapp.com/send/?phone=5491162569879"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-all duration-300 hover:shadow-lg rounded-full"
          >
            <Icon
              icon="logos:whatsapp-icon"
              className="w-14 h-14 drop-shadow-lg"
            />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
