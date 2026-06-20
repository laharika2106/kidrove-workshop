import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkshopDetails from "./components/WorkshopDetails";
import WhyChooseUs from "./components/WhyChooseUs";
import LearningOutcomes from "./components/LearningOutcomes";
import FAQ from "./components/FAQ";
import RegistrationForm from "./components/RegistrationForm";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkshopDetails />
      <WhyChooseUs />
      <LearningOutcomes />
      <FAQ />
      <RegistrationForm />
      <CTA />
      <Footer />
    </>
  );
}

export default App;