const Hero = () => {
  return (
    <section className=" w-full h-[90vh] flex justify-center items-center bg-[url('/portada.webp')] bg-cover bg-no-repeat"
    style={{ backgroundPosition: "20% 75%" }}>
      <div className="p-4 flex flex-col items-center justify-center gap-6">{/* 
        <img src="/logo.webp" alt="logo" className="size-18" /> */}

        <h1 className="font-bold leading-10 tracking-wide text-4xl sm:text-5xl md:text-6xl text-center text-shadow-2xs text-shadow-black-main">
          <i>Sé un invitado más</i>
        </h1>

        <h2 className="font-semibold leading-6 tracking-wide text-2xl text-center text-shadow-xs text-shadow-black-main">
          Servicio de catering integral
        </h2>
      </div>
    </section>
  )
}
export default Hero
