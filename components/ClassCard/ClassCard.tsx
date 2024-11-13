import Image from "next/image";
import { LinkCustom } from "../LinkCustom/LinkCustom";

const ClassCard = ({ name, imageSrc }: { name: string; imageSrc: string }) => {
  return (
    <div className="flex flex-1 flex-col items-center p-4 border-2">
      <h2 className="text-2xl mb-3">{name}</h2>
      <Image src={imageSrc} alt={`${name} image`} width={200} height={200} />
      <LinkCustom href="">Choose {name}</LinkCustom>
    </div>
  );
};

export default ClassCard;
