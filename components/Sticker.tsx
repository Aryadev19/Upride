import Image from "next/image";

type StickProps = {
    path:string,
    alt:string,
    up:string,
    down:string
};
export default function Sticker(props: StickProps) {
  const isActive = props.path == "/stick1.png" ? "text-slime" : ""
  const isMargin = props.path =="/stick3.png" ? "ml-5" : ""
  return (
    <div>
      <Image
       src={props.path}
       height={70}
       width={70}
       alt={props.alt}
       className={isMargin} />
      <p className={isActive}>
        {props.up} <br /> {props.down}
      </p>
    </div>
  );
}
