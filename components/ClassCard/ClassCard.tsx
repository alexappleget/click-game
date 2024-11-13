import Image from "next/image";

const ClassCard = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-1 flex-col items-center p-4 border-2">
      <h2 className="text-2xl">{name}</h2>
      <Image src="/rogue.jpg" alt={`${name} image`} width={20} height={20} />
    </div>
  );
};

export default ClassCard;
