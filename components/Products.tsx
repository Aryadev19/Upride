import ProductCard from "./ProductCard";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});


export default function Products() {
  return (
    <div className="flex flex-col justify-center flex-wrap">
    <div className={`ml-64 my-20 ${jakarta.className}`}>
      <h2 className="text-3xl ml-20 font-semibold py-4">
        Recommended Driving Schools
      </h2>
      <div className="flex justify-between ">
        <p className="text-sm ml-20 mt-2 text-gray-500">
          These are upride Verified most recommended Driving Schools in
          Bengaluru
        </p>
        <div className="flex justify-around gap-5 mr-80">
          <div className="bg-slime rounded-2xl w-fit h-min p-0.5 flex text-center justify-center gap-1">
            <Image
              src="/locate.png"
              width={20}
              height={20}
              quality={100}
              alt="location"
              className="self-center"
            />
            <p className="text-white text-xs self-center">Near me</p>
          </div>
          <div className="rounded-2xl text-xs p-1 w-16 shadow-inner font-semibold text-center self-center border-1.5">
            View All
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-3 grid-rows-2 gap-x-10 gap-y-8 justify-items-center rounded-xl self-center">
        <ProductCard
            path="/prod1.png"
            nameUp="SharpDrives Driving School-"
            nameDown="Kerekodi"
            location="Kerekodi, Bengaluru"
            price="2500"
        />
        <ProductCard
            path="/prod2.png"
            nameUp="Prerana Driving School-"
            nameDown="Uttarahalli"
            location="Uttarhalli Hobli, bengaluru"
            price="2500"
        />
        <ProductCard
            path="/prod3.png"
            nameUp="Riders driving School-"
            nameDown="ThyagarajNagar"
            location="Thyagaraj Nagar, Bengaluru"
            price="1500"
        />
        <ProductCard
            path="/prod1.png"
            nameUp="SharpDrives Driving School-"
            nameDown="Kerekodi"
            location="Kerekodi, Bengaluru"
            price="2500"
        />
        <ProductCard
            path="/prod2.png"
            nameUp="Prerana Driving School-"
            nameDown="Uttarahalli"
            location="Uttarhalli Hobli, bengaluru"
            price="2500"
        />
        <ProductCard
            path="/prod3.png"
            nameUp="Riders driving School-"
            nameDown="ThyagarajNagar"
            location="Thyagaraj Nagar, Bengaluru"
            price="1500"
        />
    </div>
    </div>
  );
}
