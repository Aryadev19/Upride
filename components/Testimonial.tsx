import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="flex flex-col justify-center content-center mt-10 flex-wrap">
      <div className="text-center w-1/3 px-16 mt-10 bg-white border-3 border-slime self-center rounded-2xl">
        <h1 className="text-2xl font-semibold mt-10">
          Prepare for Learner’s License Test
        </h1>
        <p className="text-xs text-gray-400 mt-2">
          Curated videos for you to easily pass learner’s license test. Watch
          now <br /> and pass the test with utmost ease.{" "}
        </p>
        <Image
          src="/button2.png"
          height={200}
          width={200}
          alt="button2"
          className="self-center ml-24"
        />
      </div>

      <div className="ml-56 mt-20">
        <h1 className="text-3xl font-bold mb-4">What our clients say</h1>
        <p className="text-xs text-gray-400">
          Quality training and easy to get driving license
        </p>
      </div>
      <div className="flex justify-center">
        <Image src="/review1.png" height={400} width={400} alt="review1" />
        <Image src="/review2.png" height={400} width={400} alt="review1" />
        <Image src="/review3.png" height={400} width={400} alt="review1" />
      </div>
      <Image 
        src="/slider.png"
        height={50}
        width={50}
        alt="slider"
        className="self-center mb-10"
      />
    </div>
  );
}
