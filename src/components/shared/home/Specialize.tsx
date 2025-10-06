const Specialize = () => {
  return (
    <div className="flex justify-center items-center w-full transition-colors duration-150 p-2 sm:p-6 md:p-16">
      <div className="w-full">
        <div className="bg-opacity-25 bg-blue-secondary dark:backdrop-filter flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:20 py-5 px-5 rounded-xl text-white">
          <div className="flex flex-col gap-5 text-center lg:text-left leading-[normal] max-w-[600px]">
            <p className="text-base lg:text-[20px] leading-[32px]">
              Ofrecemos un servicio completo de catering con menús
              personalizados, nos encargamos de la comida,mesa dulce, torta,
              bebida y hasta fin de fiesta.
            </p>
            <p className="text-base lg:text-[20px] leading-[32px]">
              Tu única preocupación será disfrutar de tu día especial mientras
              nosotros nos ocupamos de todo.
            </p>
            
            <p className="text-base lg:text-[20px] leading-[32px]">Desde eventos íntimos hasta grandes celebraciones, nos adaptamos a
            tus necesidades y presupuesto, no dudes en consultarnos.</p>
          </div>

          <img
            src="/logo.webp"
            alt="logo"
            className="w-52 lg:w-[40%] lg:max-w-[400px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Specialize
