import Header from "./Header.jsx";

function HeroSection() {
  return (
    <div className="py-10 px-6 h-162.5 flex flex-col gap-40.75 bg-[url('/images/mobile/image-hero.jpg')] bg-cover bg-no-repeat">
      <Header />

      <div className="border-2 border-white py-4 px-6">
        <p className="font-josefin text-[40px] font-light text-white uppercase leading-[100%]">Immersive experiences that deliver</p>
      </div>
    </div>
  )
}

export default HeroSection;