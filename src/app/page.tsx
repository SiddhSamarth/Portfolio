import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Academics from "@/components/Academics";
import AboutMe from "@/components/AboutMe";
import SecurityInsights from "@/components/SecurityInsights";
import Certificates from "@/components/Certificates";
import SecurityPrinciples from "@/components/SecurityPrinciples";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-blue-500/30 selection:text-blue-200 pd-acrylic-page">
      <Navbar />
      <Hero />
      {/* Transition background element */}
      <div className="relative w-full h-32 -mt-16 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
      </div>
      <Academics />
      {/* Transition between sections */}
      <div className="relative w-full h-32 -mt-16 -mb-16 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
      </div>
      <AboutMe />
      {/* Transition between sections */}
      <div className="relative w-full h-32 -mt-16 -mb-16 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
      </div>
      <SecurityInsights />
      {/* Transition between sections */}
      <div className="relative w-full h-32 -mt-16 -mb-16 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
      </div>
      <Certificates />
      {/* Transition between sections */}
      <div className="relative w-full h-32 -mt-16 -mb-16 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
      </div>
      <SecurityPrinciples />
      {/* Transition between sections */}
      <div className="relative w-full h-32 -mt-16 -mb-16 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
      </div>
      <Experience />
      {/* Transition between sections */}
      <div className="relative w-full h-32 -mt-16 -mb-16 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
      </div>
      <Projects />
      {/* Transition between sections */}
      <div className="relative w-full h-32 -mt-16 -mb-16 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
      </div>
      <Skills />
      {/* Transition before footer */}
      <div className="relative w-full h-32 -mt-16 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
      </div>
      <Footer />
    </main>
  );
}
