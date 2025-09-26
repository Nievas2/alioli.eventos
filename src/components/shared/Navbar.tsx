import { Icon } from "@iconify/react"
import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import IconTheme from "./IconTheme"
import { GoToUp } from "../../utils/functions/GoToUp"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky bg-[#fff1e7] dark:bg-[#0F0F0F] w-full top-0 z-50">
      <nav className="mx-auto max-w-8xl px-2 md:px-8 py-3 w-full">
        <div className="flex items-center justify-between z-10 w-full">
          {/* Logo */}
          <Link onClick={GoToUp} to="/" className="flex items-center gap-2">
            <img
              src="/logo.webp"
              alt="logo"
              className={`size-12 ${open ? "block" : "block ml-[-3px]"}`}
            />
            <h3 className="font-sans font-bold leading-10 tracking-wide text-2xl ">
              Alioli
            </h3>
          </Link>

          {/* Open menu button */}
          <div className="items-center md:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md  cursor-pointer p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>

              {/* Open */}
              <Icon
                className={`${open ? "block" : "block ml-[-3px]"}`}
                icon="material-symbols:menu"
                width="24"
                height="24"
              />
            </button>
          </div>

          {/* NavLinks */}
          <div className="hidden md:ml-6 md:flex md:flex-1">
            <div className="flex w-full items-center justify-end text-center flex-row gap-2 re">
              <NavLink
                onClick={GoToUp}
                to="/"
                className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-blue-secondary transition-all duration-300 ${
                  pathname === "/" ? "text-blue-secondary" : "text-light"
                }`}
              >
                Inicio
                <span
                  className={`h-[2.5px] inline-block bg-blue-secondary absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${
                    pathname === "/" ? "w-[80%]" : "w-0"
                  }`}
                >
                  &nbsp;
                </span>
              </NavLink>

              <NavLink
                onClick={GoToUp}
                to="/servicios"
                className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-blue-secondary transition-all duration-300 ${
                  pathname === "/servicios"
                    ? "text-blue-secondary"
                    : "text-light"
                }`}
              >
                Servicios
                <span
                  className={`h-[2.5px] inline-block bg-blue-secondary absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${
                    pathname === "/servicios" ? "w-[80%]" : "w-0"
                  }`}
                >
                  &nbsp;
                </span>
              </NavLink>

              <NavLink
                onClick={GoToUp}
                to="/sobre-nosotros"
                className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-blue-secondary transition-all duration-300 ${
                  pathname === "/sobre-nosotros"
                    ? "text-blue-secondary"
                    : "text-light"
                }`}
              >
                Sobre Nosotros
                <span
                  className={`h-[2.5px] inline-block bg-blue-secondary absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${
                    pathname === "/sobre-nosotros" ? "w-[80%]" : "w-0"
                  }`}
                >
                  &nbsp;
                </span>
              </NavLink>

              <NavLink
                onClick={GoToUp}
                to="/contacto"
                className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-blue-secondary transition-all duration-300 ${
                  pathname === "/contacto"
                    ? "text-blue-secondary"
                    : "text-light"
                }`}
              >
                Contactanos
                <span
                  className={`h-[2.5px] inline-block bg-blue-secondary absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${
                    pathname === "/contacto" ? "w-[80%]" : "w-0"
                  }`}
                >
                  &nbsp;
                </span>
              </NavLink>

              <IconTheme />
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div
          className={`fixed inset-0 bg-black/80 bg-opacity-50 flex justify-end z-50 md:hidden transition-all duration-300 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className={`bg-white-main dark:bg-black-main w-[280px] h-full p-6 flex flex-col gap-6 transition-all duration-300 ${
              open ? "-translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-row items-center justify-between">
              <IconTheme />

              <button
                type="button"
                className="self-start"
                onClick={() => {
                  setOpen(false)
                  GoToUp()
                }}
              >
                <Icon
                  className="text-light"
                  icon="material-symbols:close"
                  width="24"
                  height="24"
                />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-blue-secondary text-white"
                      : "hover:bg-blue-secondary/80 hover:text-white"
                  } transition-colors duration-300`
                }
                onClick={() => {
                  setOpen(false)
                  GoToUp()
                }}
              >
                Inicio
              </NavLink>

              <NavLink
                to="servicios"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-blue-secondary text-white"
                      : "hover:bg-blue-secondary/80 hover:text-white"
                  } transition-colors duration-300`
                }
                onClick={() => {
                  setOpen(false)
                  GoToUp()
                }}
              >
                Servicios
              </NavLink>

              <NavLink
                to="sobre-nosotros"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-blue-secondary text-white"
                      : "hover:bg-blue-secondary/80 hover:text-white"
                  } transition-colors duration-300`
                }
                onClick={() => {
                  setOpen(false)
                  GoToUp()
                }}
              >
                Sobre nosotros
              </NavLink>

              <NavLink
                to="contacto"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-blue-secondary text-white"
                      : "hover:bg-blue-secondary/80 hover:text-white"
                  } transition-colors duration-300`
                }
                onClick={() => {
                  setOpen(false)
                  GoToUp()
                }}
              >
                Contactanos
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
