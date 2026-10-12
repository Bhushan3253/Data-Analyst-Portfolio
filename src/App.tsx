import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DashboardGallerySection from "./components/DashboardGallery";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-navy-950 text-slate-100">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-950"
      >
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.10),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.08),_transparent_30%),linear-gradient(180deg,_rgba(10,14,26,1)_0%,_rgba(10,14,26,0.98)_100%)]" />

      <Navbar />

      <main id="content" className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DashboardGallerySection />
        <Education />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App
