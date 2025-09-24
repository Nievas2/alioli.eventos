const Specialize = () => {
  return (
    <div className="flex justify-center items-center w-full transition-colors duration-150 p-2 sm:p-6 md:p-16">
      <div className="w-full">
        <div className="bg-opacity-25 bg-blue-secondary dark:backdrop-filter flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:20 py-5 px-5 rounded-xl ">
          <div className="flex flex-col gap-5 text-center lg:text-left leading-[normal] max-w-[600px]">
            <h2 className="text-[24px] lg:text-[36px] font-extrabold lg:text-left">
              Nos encargamos de que la pases bien
            </h2>

            <p className="text-base lg:text-[20px] leading-[32px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              debitis rerum voluptas possimus ut nisi magnam aliquid repellat a
              fuga et, nobis non id, esse accusamus neque culpa, nesciunt
              reprehenderit? Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Adipisci est, magnam nihil, repudiandae iure aperiam fugit
              cumque ipsa sequi id totam ipsam rerum, quod suscipit! Repudiandae
              architecto nisi debitis deleniti.
            </p>
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
