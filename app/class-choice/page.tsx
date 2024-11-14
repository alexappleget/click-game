import ClassCard from "@/components/ClassCard/ClassCard";

const characters = [
  {
    name: "Rogue",
    imageSrc: "/rogue.jpg",
    classHref: "/rogue",
    description:
      "Rogues have a knack for finding the solution to just about any problem, prioritizing subtle strikes over brute strength.",
  },
  {
    name: "Mage",
    imageSrc: "/mage.png",
    classHref: "/mage",
    description:
      "Mages harness and channel the raw, roiling power of innate magic that is stamped into their very being.",
  },
  {
    name: "Warrior",
    imageSrc: "/warrior.jpg",
    classHref: "/warrior",
    description:
      "Warriors are mighty beings who are powered by primal forces of the multiverse that manifest as a Rage.",
  },
];

const ClassChoice = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-16">
      <h1 className="text-6xl">Choose your class!</h1>
      <div className="w-3/5 h-1/2 mt-10 flex gap-5">
        {characters.map((character) => (
          <ClassCard
            classHref={character.classHref}
            description={character.description}
            imageSrc={character.imageSrc}
            key={character.name}
            name={character.name}
          />
        ))}
      </div>
    </section>
  );
};

export default ClassChoice;
