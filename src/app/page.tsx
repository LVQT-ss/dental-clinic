import About from "@/components/About";
import Doctors from "@/components/Doctors";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MakeAppointment from "@/components/MakeAppointment";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <MakeAppointment />
        <Doctors />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
