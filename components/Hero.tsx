import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});
export default function Hero() {
  return (
      <div className={`m-5 p-4 flex justify-around content-center flex-wrap-reverse ${jakarta.className}`}>
        <div className="pt-16">
          <div className="text-6xl">
            <p className="pb-2 text-navy">Learn Driving: Book</p>
            <p className="font-bold pb-2">
              <span className="text-navy">Top Driving</span>
              <span className="text-slime"> Schools</span>
            </p>
            <p className="pb-2 text-navy">Near You</p>
          </div>
          <div className="text-sm font-semibold py-5">
            <p>
              Empower yourself with safe and confident driving skills today.
            <br />
              Book expert Instructors and top-rated driving schools near you.
            </p>
          </div>
          <div className="flex bg-white border-2 rounded-full shadow my-5 h-10 justify-between content-center">
            <p className="p-2 text-gray-400 text-sm overflow-hidden">
              Search Location, Driving School or Services...
            </p>
            <div className="flex justify-around gap-4">
              <Image
                src="/search.png"
                width={20}
                height={20}
                alt="search"
                className="self-center"
              />
              <div className="mt-1 p-1 mr-2 w-24 h-7 bg-slime rounded-3xl text-white text-sm flex justify-around place-content-end">
                <Image
                  src="/locate.png"
                  width={20}
                  height={20}
                  quality={100}
                  alt="location"
                />
                Near Me
              </div>
            </div>
          </div>
          <div className="flex gap-5 font-medium pt-5">
            <button className="bg-slime text-white rounded-lg p-4 px-8 border-2 shadow-inner">
              BOOK DRIVING SCHOOL
            </button>
            <button className="bg-white rounded-lg p-4 px-6 border-2 shadow-inner">
              HIRE INSTRUCTORS
            </button>
          </div>
        </div>

        <div>
          <Image
            src="/Hero.png"
            width={500}
            height={500}
            quality={100}
            alt="Hero Banner"
          />
        </div>
      </div>
  );
}
