import Image from "next/image";

export default function Footer(){
    return (
        <div className="flex justify-between flex-wrap">

       
        <div className="ml-20">
            <Image
                src="/upridelogo.png"
                height={100}
                width={100}
                alt="upride"
            />
            <p className="text-xs text-gray-400">Sometimes features require a short description. <br /> This can be detailed description or just a short text.</p>
            <p className="text-sm font-semibold">Download App</p>
            <p className="text-xs text-gray-400">Available on</p>
            <div className="flex gap-4">
            <Image
                src="/playstore.png"
                height={30}
                width={30}
                alt="playstore"
            />
            <Image
                src="/appstore.png"
                height={30}
                width={30}
                alt="apptore"
            /></div>
        </div>
        <div className="flex justify-around mr-20">
            <div>
                <p className="text-sm font-bold p-2">Company</p>
                <p className="text-xs text-gray-400 p-2">About Us</p>
                <p className="text-xs text-gray-400 p-2">Testimonial</p>
                <p className="text-xs text-gray-400 p-2">Terms of services</p>
                <p className="text-xs text-gray-400 p-2">Privacy Policy</p>
                <p className="text-xs text-gray-400 p-2">Investor</p>
            </div>
            <div>
                <p className="text-sm font-bold p-2">Services</p>
                <p className="text-xs text-gray-400 p-2">Booking</p>
                <p className="text-xs text-gray-400 p-2">Support Center</p>
                <p className="text-xs text-gray-400 p-2">Blog</p>
                <p className="text-xs text-gray-400 p-2">Review</p>
                <p className="text-xs text-gray-400 p-2">Room</p>
            </div>
            <div>
                <p className="text-sm font-bold p-2">Recourses</p>
                <p className="text-xs text-gray-400 p-2">Help Center</p>
                <p className="text-xs text-gray-400 p-2">Guide</p>
                <p className="text-xs text-gray-400 p-2">Partner Network</p>
                <p className="text-xs text-gray-400 p-2">FAQ’s</p>
                <p className="text-xs text-gray-400 p-2">Documentation</p>
            </div>
        </div>
        </div>
    )
}