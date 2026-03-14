import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import CreationsSection from "./components/CreationsSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <HeroSection />

      <main>
        <AboutSection />
        <CreationsSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
