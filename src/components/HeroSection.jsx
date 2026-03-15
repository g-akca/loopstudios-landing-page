import Header from "./Header.jsx";

function HeroSection() {
  return (
    <div 
      className="
        py-10 px-6 h-162.5 relative
        flex flex-col gap-40.75 
        bg-[url('/images/mobile/image-hero.jpg')] bg-cover bg-no-repeat bg-center
        tablet:py-16 tablet:px-20 tablet:bg-[url('/images/desktop/image-hero.jpg')] tablet:gap-32.5
        desktop:px-41
      "
    >
      <div className="absolute inset-0 z-0 bg-black/40"></div>

      <Header />

      <div className="border-2 border-white py-4.5 px-6 max-w-100 relative z-1 tablet:p-10 tablet:pb-5 tablet:max-w-162.5">
        <p className="font-josefin text-[40px] font-light text-white uppercase leading-[100%] tablet:text-[72px]">Immersive experiences that deliver</p>
      </div>
    </div>
  )
}

export default HeroSection;