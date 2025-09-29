import ContactForm from "../components/shared/ContactForm"

const Contact = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-4 py-12 px-4 text-white">
      <div className="flex flex-col gap-4 rounded-xl bg-blue-secondary p-4 w-full">
        <ContactForm />
      </div>
    </main>
  )
}
export default Contact
