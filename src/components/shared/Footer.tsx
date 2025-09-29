import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import { motion } from "motion/react"

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
              <p className="text-lg ">Servicio de catering integral</p>
            </div>
          </div>

          <div className="flex flex-col lg:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <nav className="flex gap-18">
              <div className="flex flex-col gap-3">
                <Link
                  to="/"
                  className=" hover:text-red-main transition-colors duration-300 text-base"
                >
                  Inicio
                </Link>

                <Link
                  to="/sobre-nosotros"
                  className=" hover:text-red-main transition-colors duration-300 text-base"
                >
                  Sobre Nosotros
                </Link>

                <Link
                  to="/servicios"
                  className=" hover:text-red-main transition-colors duration-300 text-base"
                >
                  Servicios
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  to="/contacto"
                  className=" hover:text-red-main transition-colors duration-300 text-base"
                >
                  Contactanos
                </Link>
              </div>
            </nav>
          </div>

          <div className="flex flex-col lg:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex flex-col gap-4">
              <Link
                to="https://www.instagram.com/alioli.eventos"
                about="_blank"
                className="flex items-center gap-3  hover:text-red-main transition-colors duration-300"
              >
                <Icon icon="mdi:instagram" className="text-2xl" />
                <span className="text-base">Instagram</span>
              </Link>

              <Link
                to="https://wa.me/5491136801229"
                about="_blank"
                className="flex items-center gap-3  hover:text-red-main transition-colors duration-300"
              >
                <Icon icon="ic:baseline-whatsapp" className="text-2xl" />
                <span className="text-base">WhatsApp</span>
              </Link>

              <Link
                to="https://www.google.com/maps/place/Derechos+del+Trabajador+953,+B1635+Pres.+Derqui,+Provincia+de+Buenos+Aires/data=!4m2!3m1!1s0x95bc9bddeeff905d:0x9fcba292fecaf735?utm_source=mstt_1&entry=gps&g_ep=CAESCTExLjQ4LjgwMRgAIP___________wEqAA%3D%3D"
                about="_blank"
                className="flex items-center gap-3  hover:text-red-main transition-colors duration-300"
              >
                <Icon icon="ic:baseline-place" className="text-2xl" />
                <span className="text-base">
                  Pilar, Buenos Aires, Argentina
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-8 gap-4">
          <motion.hr
            initial={{ width: 0 }}
            animate={{ width: "100%", transition: { duration: 1 } }}
            className="text-blue-secondary m-1"
          />

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
