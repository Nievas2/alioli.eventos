const Services = () => {
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

      <div className="md:hidden flex items-center justify-center">
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
        <div className="mx-6 w-3 h-3 bg-red-main rounded-full"></div>
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
      </div>

      {/* First */}
      <div className="flex flex-col items-center md:flex-row gap-4 z-20">
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
          alt="How we optimize our work - Image"
          className="w-[352px] lg:w-[40%] lg:max-w-[400px] lg:flex"
        />
      </div>

      <div className="flex items-center justify-center">
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
        <div className="mx-6 w-3 h-3 bg-red-main rounded-full"></div>
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
      </div>

      {/* Second */}
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
          alt="How we optimize our work - Image"
          className="w-[352px] lg:w-[40%] lg:max-w-[400px] lg:flex"
        />
      </div>

      <div className="flex items-center justify-center">
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
        <div className="mx-6 w-3 h-3 bg-red-main rounded-full"></div>
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
      </div>

      {/* Third */}
      <div className="flex flex-col items-center md:flex-row gap-4 z-20">
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
          alt="How we optimize our work - Image"
          className="w-[352px] lg:w-[40%] lg:max-w-[400px] lg:flex"
        />
      </div>
    </div>
  )
}

export default Services
