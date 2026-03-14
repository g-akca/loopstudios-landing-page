import CreationsItem from "./CreationsItem.jsx";

function CreationsSection() {
  const creations = [
    { title: "Deep earth", imgUrl: "image-deep-earth.jpg" },
    { title: "Night arcade", imgUrl: "image-night-arcade.jpg" },
    { title: "Soccer team VR", imgUrl: "image-soccer-team.jpg" },
    { title: "The grid", imgUrl: "image-grid.jpg" },
    { title: "From up above VR", imgUrl: "image-from-above.jpg" },
    { title: "Pocket borealis", imgUrl: "image-pocket-borealis.jpg" },
    { title: "The curiosity", imgUrl: "image-curiosity.jpg" },
    { title: "Make it fisheye", imgUrl: "image-fisheye.jpg" },
  ];

  return (
    <section className="flex flex-col items-center gap-8">
      <div>
        <h2 className="uppercase font-josefin font-light text-[32px] leading-[100%] mb-12">Our creations</h2>
        
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