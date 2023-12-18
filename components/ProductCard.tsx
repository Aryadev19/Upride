import Image from "next/image";

type Props = {
    path:string,
    nameUp:string,
    nameDown:string,
    location:string,
    price:string

}

export default function ProductCard(props:Props){
    return (
        <div className="w-fit shadow-2xl">
            <Image
                src={props.path}
                height={250}
                width={250}
                alt={props.path}
                className="rounded-t-xl"
            />
            <div className="bg-white border-2 p-2">
                <p className="font-semibold ">{props.nameUp}<br />{props.nameDown}</p>
                <p className="text-xs text-gray-400">{props.location}</p>
                <div className="flex justify-between mt-10 mb-6">
                    <div className="flex justify-between gap-2 px-2 rounded-3xl shadow-lg">
                    <Image
                        src="/star.png"
                        height={13}
                        width={13}
                        alt="start"
                        className="self-center"
                    />
                    <p className="text-gray-500 font-medium">4.8</p>
                    </div>
                    <div className="flex justify-between self-center gap-1">
                        <p className="text-sm text-slime self-end font-semibold">₹ {props.price}/</p>
                        <p className="text-xs text-gray-500 self-end">Starting From</p>
                    </div>
                </div>
            </div>
        </div>
    )
}