import Chrome from "@/components/Chrome";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubSection from "@/components/GitHubSection";
import ProcessSection from "@/components/ProcessSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Chrome />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <GitHubSection />
        <ProcessSection />
        <ExpertiseSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
