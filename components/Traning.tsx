import Image from "next/image";
import TrainCard from "./TrainCard";
export default function Training() {
  return (
    <>
    <div className="ml-80">
      <div className="flex gap-10 ml-5 font-bold flex-wrap">
        <p>All</p>
        <p>Traning</p>
        <p>RTO & Rules</p>
      </div>
      <div className="flex gap-0 mb-10">
        <hr className="w-14 bg-slime h-1" />
        <hr className="w-60 bg-gray-300 h-0.5 self-center" />
      </div>
    </div>
      <div className="flex justify-center gap-10 flex-wrap">

      <TrainCard
        path="/lesson1.png"
        title="Learn Basics"
        desc="Learn about basics of car driving. Understand the combination of clutch, brake & accelerator"
      />
       <TrainCard
        path="/lesson2.png"
        title="Learn Basics-2"
        desc="Learn about basics of car driving. Understand the combination of clutch, brake & accelerator"
      />
       <TrainCard
        path="/lesson3.png"
        title="Road Safety"
        desc="Learn about basics of car driving. Understand the combination of clutch, brake & accelerator"
      />
       <TrainCard
        path="/lesson4.png"
        title="Traffic Rules"
        desc="Learn about basics of car driving. Understand the combination of clutch, brake & accelerator"
      />
      
      </div>
      </>
  );
}
