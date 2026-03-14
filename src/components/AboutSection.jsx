import interactiveImg from "/images/mobile/image-interactive.jpg";

function AboutSection() {
  return (
    <section>
      <img src={interactiveImg} alt="Person wearing VR goggles" />

      <div className="pt-12 px-6 flex flex-col gap-4 text-center">
        <h2 className="uppercase font-josefin font-light text-[32px] leading-[100%]">The leader in interactive VR</h2>
        <p className="opacity-50">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
      </div>
    </section>
  )
}

export default AboutSection;