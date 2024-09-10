import AwardsSection from "./components/AwardsSection";
import ContactSection from "./components/ContactSection";
import { FeedbackSection } from "./components/FeedbackSection";
import Footer from "./components/Footer";
import MeSection from "./components/MeSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import Technology from "./components/Technology";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <section>
          <MeSection />
        </section>
        <section>
          <ProjectsSection />
        </section>
        <section>
          <Technology />
        </section>
        <section>
          <AwardsSection />
        </section>
        <section>
          <FeedbackSection />
        </section>
        <section>
          <ContactSection />
        </section>
      </div>
      <Footer />
    </main>
  );
}
