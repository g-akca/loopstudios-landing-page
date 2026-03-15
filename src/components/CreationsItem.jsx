function CreationsItem({ title, imgFile }) {
  return (
    <div 
      className="h-30 bg-cover relative" 
      style={{ backgroundImage: `url(/loopstudios-landing-page/images/mobile/${imgFile})` }}
    >
      <div className="w-60 h-full bg-linear-to-l from-transparent to-black/60"></div>

      <p 
        className="
          absolute top-13 left-5 
          font-josefin text-white font-light text-2xl leading-[100%] 
          uppercase whitespace-pre-line
        "
      >
        {title}
      </p>
    </div>
  )
}

export default CreationsItem;