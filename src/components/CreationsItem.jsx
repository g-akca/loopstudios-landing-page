function CreationsItem({ title, imgFile }) {
  return (
    <div className="relative h-30 desktop:h-112.5 group cursor-pointer">
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

      {/* Default dark gradient overlay */}
      <div className="absolute inset-0 w-60 bg-linear-to-l from-transparent to-black/60 desktop:bg-linear-to-b desktop:w-full desktop:h-full"></div>

      {/* Hover gray overlay */}
      <div className="absolute inset-0 bg-gray-200/80 opacity-0 group-hover:opacity-100 transition-all"></div>

      <p
        className="
          absolute bottom-8 left-5 
          font-josefin font-light text-2xl leading-[100%] 
          uppercase whitespace-pre-line
          text-white group-hover:text-black
          tablet:left-9.5 desktop:text-[32px]
        "
      >
        {title}
      </p>
    </div>
  );
}

export default CreationsItem;