const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4 flex-1">
      <h2 className="font-bold text-2xl">Contactanos</h2>
      <div className="flex gap-4">
        <input
          className="w-full border-b border-black dark:border-white"
          type="text"
          placeholder="Nombre"
        />
        <input
          className="w-full border-b border-black dark:border-white"
          type="email"
          placeholder="Email"
        />
      </div>
      <input
        className="w-full border-b border-black dark:border-white"
        type="tel"
        placeholder="Numero de Telefono"
      />
      <input
        className="w-full border-b border-black dark:border-white"
        type="text"
        placeholder="Lugar"
      />
      <input
        className="w-full border-b border-black dark:border-white"
        type="text"
        placeholder="Cantidad de personas"
      />
      <textarea
        className="w-full border-b border-black dark:border-white"
        placeholder="Mensaje"
      />
      <button
        className=""
        type="submit"
      >
        Send
      </button>
    </form>
  )
}
export default ContactForm
