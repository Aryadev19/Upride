import Image from "next/image";

type Props = {
    path:string,
    title:string,
    desc:string
}

export default function TrainCard(props:Props){
    return(
        <div className="flex justify-center flex-wrap">
        <div className="w-min shadow-2xl">
          <Image src={props.path} height={200} width={200} alt={props.path} />
          <div className="bg-white w-48 px-3">
            <p className="font-bold my-2">{props.title}</p>
            <p className="text-xs text-gray-400">{props.desc}</p>
          </div>
        </div>
      </div>
    )
}