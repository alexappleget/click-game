import ClassCard from "@/components/ClassCard/ClassCard";

const ClassChoice = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">Choose your class!</h1>
      <div className="w-1/2 h-1/2 mt-10 flex gap-5">
        {["Rogue", "Mage", "Barbarian"].map((className) => (
          <ClassCard key={className} name={className} />
        ))}
      </div>
    </section>
  );
};

export default ClassChoice;
