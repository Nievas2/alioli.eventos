import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="w-full bg-[#fff1e7] dark:bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-start gap-8">
          <div className="flex flex-col lg:w-1/3">
            <div className="flex flex-col items-center justify-center lg:items-start">
              <img src="/logo.webp" alt="Logo" className="h-16 w-auto mb-4" />
              <h3 className="text-xl font-bold italic  mb-2">
                Sé un invitado más
              </h3>
              <p className="text-lg ">
                Servicio de catering integral
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:w-1/3">
            <h4 className="text-lg font-semibold mb-4">
              Navegación
            </h4>
            <nav className="flex gap-18">
              <div className="flex flex-col gap-3">
                <Link
                  to="/"
                  className=" hover:text-red-400 transition-colors duration-300 text-base"
                >
                  Inicio
                </Link>

                <Link
                  to="/sobre-nosotros"
                  className=" hover:text-red-400 transition-colors duration-300 text-base"
                >
                  Sobre Nosotros
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  to="/servicios"
                  className=" hover:text-red-400 transition-colors duration-300 text-base"
                >
                  Servicios
                </Link>

                <Link
                  to="/contacto"
                  className=" hover:text-red-400 transition-colors duration-300 text-base"
                >
                  Contactanos
                </Link>
              </div>
            </nav>
          </div>

          <div className="flex flex-col lg:w-1/3">
            <h4 className="text-lg font-semibold mb-4">
              Síguenos
            </h4>
            <div className="flex flex-col gap-4">
              {/* <Link
                to="#"
                className="flex items-center gap-3  hover:text-red-400 transition-colors duration-300"
              >
                <Icon icon="ic:baseline-facebook" className="text-2xl" />
                <span className="text-base">Facebook</span>
              </Link> */}
              <Link
                to="#"
                className="flex items-center gap-3  hover:text-red-400 transition-colors duration-300"
              >
                <Icon icon="mdi:instagram" className="text-2xl" />
                <span className="text-base">Instagram</span>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3  hover:text-red-400 transition-colors duration-300"
              >
                <Icon icon="ic:baseline-whatsapp" className="text-2xl" />
                <span className="text-base">WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-sm">
              © 2025 Tu Empresa. Todos los derechos reservados.
            </p>
            <p className="text-sm">
              Diseñado con amor para tus eventos especiales
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
