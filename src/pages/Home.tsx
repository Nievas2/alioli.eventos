import ContactForm from "../components/shared/ContactForm"
import Hero from "../components/shared/home/Hero"
import Images from "../components/shared/home/Images"
import Specialize from "../components/shared/home/Specialize"

const Home = () => {
  return (
    <main className="flex flex-col gap-24">
      <Hero />
      <Specialize />
      <Images />
      <div className="text-black dark:text-white p-4 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Contactanos</h2>
        <p className="font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          sint qui, ratione expedita illum incidunt voluptatum, sit eaque
          aperiam eos
        </p>
        <ContactForm />
      </div>
    </main>
  )
}
export default Home
