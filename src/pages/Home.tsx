import Specialize from "../components/shared/home/events"
import ContactForm from "../components/shared/ContactForm"
import Events from "../components/shared/home/events"
import Hero from "../components/shared/home/Hero"

const Home = () => {
  return (
    <main className="flex flex-col gap-24">
      <Hero />
      <Specialize />
      <Events />
      <ContactForm />
    </main>
  )
}
export default Home
