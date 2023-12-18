import Image from "next/image";

export default function Chips(){
    return (
        <div className="flex justify-center mt-2 p-10 gap-3 flex-wrap">
            <Image
              src="/chip1.png"
              height={200}
              width={200}
              quality={100}
              alt="chip1"
            />
            <Image
              src="/chip2.png"
              height={200}
              width={200}
              quality={100}
              alt="chip2"
            />
            <Image
              src="/chip3.png"
              height={200}
              width={200}
              quality={100}
              alt="chip3"
            />
        </div>
    )
}