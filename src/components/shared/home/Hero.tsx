const Hero = () => {
  return (
    <section className=" w-full h-[90vh] flex justify-center items-center bg-[url('/hero.jpg')] bg-cover bg-no-repeat">
      <div className="p-4 flex flex-col items-center justify-center gap-6">
        <img src="/logo.webp" alt="logo" className="size-18" />

        <h1 className="font-bold leading-10 tracking-wide text-5xl ">
          <i>Sé un invitado más</i>
        </h1>

        <h2 className="font-semibold leading-2 tracking-wide text-lg ">
          Servicio de catering integral
        </h2>
      </div>
    </section>
  )
}
export default Hero
