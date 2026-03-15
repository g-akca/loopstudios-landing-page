function CreationsItem({ title, imgFile }) {
  return (
    <div className="relative h-30 desktop:h-112.5">
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={`/loopstudios-landing-page/images/desktop/${imgFile}`}
        />
        <img
          src={`/loopstudios-landing-page/images/mobile/${imgFile}`}
          className="w-full h-full object-cover"
        />
      </picture>

      <div className="absolute inset-0 w-60 bg-linear-to-l from-transparent to-black/60 desktop:bg-linear-to-b desktop:w-full desktop:h-full"></div>

      <p
        className="
          absolute bottom-8 left-5 
          font-josefin text-white font-light text-2xl leading-[100%] 
          uppercase whitespace-pre-line
          tablet:left-9.5
        "
      >
        {title}
      </p>
    </div>
  );
}

export default CreationsItem;