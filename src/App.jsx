import { useState } from "react";

import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import CreationsSection from "./components/CreationsSection.jsx";
import Footer from "./components/Footer.jsx";
import Menu from "./components/Menu.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <HeroSection openMenu={() => setMenuOpen(true)} />

      <Menu isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />

      <main className="px-6 py-24 flex flex-col items-center gap-24 text-base leading-base tablet:px-20 desktop:p-40">
        <AboutSection />
        <CreationsSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;