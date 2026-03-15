import interactiveMobile from "/images/mobile/image-interactive.jpg";
import interactiveDesktop from "/images/desktop/image-interactive.jpg";

function AboutSection() {
  return (
    <section className="flex flex-col items-center w-full max-w-277.5 desktop:relative desktop:items-start">
      <picture >
        <source
          srcSet={interactiveDesktop}
          media="(min-width: 768px)"
        />
        <img
          src={interactiveMobile}
          alt="Person wearing VR goggles"
        />
      </picture>

      <div 
        className="
          pt-12 px-6 flex flex-col gap-4 text-center 
          desktop:absolute desktop:bottom-0 desktop:right-0 desktop:w-135.25 
          desktop:bg-white desktop:pt-24 desktop:pl-24 desktop:pr-0
          desktop:text-start
        "
      >
        <h2 className="uppercase font-josefin font-light text-[32px] leading-[100%] tablet:text-5xl">The leader in interactive VR</h2>
        <p className="opacity-50">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
      </div>
    </section>
  )
}

export default AboutSection;