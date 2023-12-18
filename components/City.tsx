import { Roboto } from "next/font/google"
const roboto = Roboto({
    weight:"300",
    subsets:["latin"]
})
export default function City(){
    return (
        <div className={roboto.className}>
        <div className="hidden sm:flex gap-8 w-full p-1 justify-around bg-slime text-white text-xs">
            <p>Kerakodi</p>
            <p>BansaNagar</p>
            <p>YashranthPur</p>
            <p>MG Road</p>
            <p>JP Nagar</p>
            <p>JayaNagar</p>
            <p>VijayaNagar</p>
            <p>Kormangal</p>
            <p>RajNagar</p>
            <p>Rajeshwari Nagar</p>
            <p>Kormangala</p>
        </div>
        </div>
    )
}