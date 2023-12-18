import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Sticker from "./Sticker";
import Stats from "./Stats";
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});
export default function Service() {
  return (
      <div className={`text-center flex flex-col flex-wrap ${jakarta.className}`}>
        <p className="text-sm text-slime">OUR SERVICES</p>
        <h2 className="text-3xl p-2 font-bold">How can we help you?</h2>
        <div className="border-2 m-8 p-5 shadow-lg flex flex-col self-center rounded-md flex-wrap">
          <div className="flex justify-around text-center text-xs text-gray-400 p-8 flex-wrap">
            <Sticker
              path="/stick1.png"
              alt="stick1"
              up="Driving"
              down="Schools"
            />
            <Sticker
              path="/stick2.png"
              alt="stick2"
              up="Book Driving"
              down="Instructors"
            />
            <Sticker
              path="/stick3.png"
              alt="stick3"
              up="International Driver’s"
              down="License Consultation"
            />
            <Sticker
              path="/stick4.png"
              alt="stick4"
              up="Car/Bike Wash"
              down="Near Me"
            />
            
            
          </div>
          <hr />
          <div className="flex justify-between text-left ml-5 mt-4 p-5 gap-4 flex-wrap">
            <div>
              <h2 className="text-2xl font-bold my-5 pt-5">
                Top Rated Driving
                <br />
                Schools Nearby
              </h2>
              <p className="text-xs">
                Discover the convenience of finding highly-
                <br />
                rated driving schools near you with Upride.
                <br />
                Whether you're eager to get your driver's
                <br /> license or seeking professional training to
                <br /> sharpen your driving skills, Upride simplifies
                <br /> your search. Just click on "near me" in our
                <br /> search bar and instantly connect with the
                <br /> best driving schools near you.
              </p>
              <p className="text-slime text-xs mt-5 font-medium">Book Now</p>
            </div>
            <div>
              <Image
                src="/service.png"
                height={320}
                width={320}
                alt="service"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
            <h2 className="text-2xl font-medium">
            Why Choose  <b>Upride</b> as your choice <br />
            for a comprehensive driving learning experience?
            </h2>
        </div>
        <div className="flex ml-12 mt-8 p-5 content-center justify-around w-3/5 self-center flex-wrap">
            <Stats
              stat="1000+"
              up="Trained"
              down="through upride"
            />
            <Stats
              stat="99%"
              up="Rating"
              down="Customer satisfaction"
            />
            <Stats
              stat="60"
              up="Minutes"
              down="per Session"
            />
            <Stats
              stat="150+"
              up="Reviews"
              down="Five-star rated in Google"
            />
        </div>
      </div>
  );
}
