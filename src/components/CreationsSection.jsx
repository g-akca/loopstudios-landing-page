import CreationsItem from "./CreationsItem.jsx";

function CreationsSection() {
  const creations = [
    { title: "Deep\nearth", imgFile: "image-deep-earth.jpg" },
    { title: "Night\narcade", imgFile: "image-night-arcade.jpg" },
    { title: "Soccer\nteam VR", imgFile: "image-soccer-team.jpg" },
    { title: "The\ngrid", imgFile: "image-grid.jpg" },
    { title: "From up\nabove VR", imgFile: "image-from-above.jpg" },
    { title: "Pocket\nborealis", imgFile: "image-pocket-borealis.jpg" },
    { title: "The\ncuriosity", imgFile: "image-curiosity.jpg" },
    { title: "Make it\nfisheye", imgFile: "image-fisheye.jpg" },
  ];

  return (
    <section className="flex flex-col items-center gap-8 w-full max-w-220">
      <div className="w-full">
        <h2 
          className="
            uppercase font-josefin font-light text-[32px] leading-[100%] text-center 
            mb-12 tablet:text-5xl tablet:mb-8
          "
        >
          Our creations
        </h2>
        
        <div className="flex flex-col gap-6">
          {creations.map(item => (
            <CreationsItem key={item.title} {...item} />
          ))}
        </div>
      </div>

      <button type="button" className="border w-39.25 h-10 uppercase text-[14px] leading-[100%] tracking-[5px]">See all</button>
    </section>
  )
}

export default CreationsSection;