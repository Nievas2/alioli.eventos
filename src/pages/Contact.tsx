import ContactForm from "../components/shared/ContactForm"

const Contact = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-4 py-12 px-4 text-white">
      <div className="flex flex-col gap-4 rounded-xl bg-blue-secondary p-4">
        <h2 className="font-bold text-2xl">Contactanos</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          sint qui, ratione expedita illum incidunt voluptatum, sit eaque
          aperiam eos
        </p>
        <ContactForm />
      </div>
    </main>
  )
}
export default Contact
