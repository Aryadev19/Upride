import Image from "next/image";
import Coupon from "./Coupon";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

export default function Offers() {
  return (
    <div className={poppins.className}>
    <div className="mt-10 ml-80" >
      <h3 className="text-sm text-slime font-medium">Our Offers</h3>
      <hr className="ml-3 my-2 w-10 h-0.5 bg-slime" />
      <h1 className="text-3xl font-bold">Best offers this month</h1>
      <div className="flex justify-between flex-wrap">
        <p className="text-xs mt-6 text-gray-600">
          Detailed Description of these offers here.
        </p>
        <Image
          src="/button.png"
          height={70}
          width={70}
          quality={100}
          className="mr-80 self-center"
          alt="button"
        />
      </div>
      <div className="flex gap-40 my-16 flex-wrap">
        <Coupon />
        <Coupon />
      </div>
    </div>
      <h2 className="text-3xl font-medium text-center">Personalized Learning Programs</h2>
      <div className="flex justify-center mt-8 gap-20 flex-wrap">
        <Image
            src="/thumbsup.png"
            height={350}
            width={350}
            quality={100}
            alt="thumbsup"
            className="self-center"
        />
        <div className="mt-10">
            <p className="text-3xl font-medium">Easy, reliable, <br /> and flexible.</p>
            <p className="text-xs text-gray-400 mt-7">At Upride, we know that every learner is unique, and so <br /> are their needs when it comes to driving education. Our <br /> commitment to personalized learning goes beyond the <br /> conventional, offering tailor-made programs designed <br /> to cater to individual preferences .</p>
            <p className="text-sm text-slime font-normal mt-2">Learn More</p>
        </div>
      </div>
    </div>
  );
}
