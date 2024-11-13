import ClassCard from "@/components/ClassCard/ClassCard";

const characters = [
  {
    name: "Rogue",
    imageSrc: "/rogue.jpg",
  },
  {
    name: "Mage",
    imageSrc: "/mage.png",
  },
  {
    name: "Warrior",
    imageSrc: "/warrior.jpg",
  },
];

const ClassChoice = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">Choose your class!</h1>
      <div className="w-1/2 h-1/2 mt-10 flex gap-5">
        {characters.map((character) => (
          <ClassCard
            key={character.name}
            name={character.name}
            imageSrc={character.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default ClassChoice;
