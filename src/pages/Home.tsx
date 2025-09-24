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
      <ContactForm />
    </main>
  )
}
export default Home
