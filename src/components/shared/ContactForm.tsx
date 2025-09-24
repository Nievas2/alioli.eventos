const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4 w-full">
      <div className="flex gap-4">
        <input
          className="w-full border-b border-gray-500"
          type="text"
          placeholder="Nombre"
        />
        <input
          className="w-full border-b border-gray-500"
          type="email"
          placeholder="Email"
        />
      </div>
      <input
        className="w-full border-b border-gray-500"
        type="tel"
        placeholder="Numero de Telefono"
      />
      <input
        className="w-full border-b border-gray-500"
        type="text"
        placeholder="Lugar"
      />
      <input
        className="w-full border-b border-gray-500"
        type="text"
        placeholder="Cantidad de personas"
      />
      <textarea
        className="w-full border-b border-gray-500"
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
