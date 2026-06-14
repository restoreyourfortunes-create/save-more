import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Situations from "./components/Situations";
import HowItWorks from "./components/HowItWorks";
import WhyUs from "./components/WhyUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Situations />
        <HowItWorks />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
