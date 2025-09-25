import Hero from "./components/Hero";
import FeaturesAndBenefits from "./components/FeaturesAndBenefits";
import Legacy from "./components/Legacy";
import ProjectShowcase from "./components/ProjectShowcase";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Legacy />
      <FeaturesAndBenefits />
      <ProjectShowcase />
      <ContactSection />
      <Footer />
    </main>
  );
}
