import Image from "next/image";
import { LinkCustom } from "../LinkCustom/LinkCustom";

interface ClassProps {
  classHref: string;
  description: string;
  imageSrc: string;
  name: string;
}

const ClassCard = ({ classHref, description, imageSrc, name }: ClassProps) => {
  return (
    <div className="flex flex-1 flex-col items-center p-2 border-2">
      <h2 className="text-2xl">{name}</h2>
      <Image src={imageSrc} alt={`${name} image`} width={150} height={150} />
      <p className="w-3/4 p-4 mb-10">{description}</p>
      <LinkCustom href={classHref}>Choose {name}</LinkCustom>
    </div>
  );
};

export default ClassCard;
