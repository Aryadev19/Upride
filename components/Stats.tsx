type Props = {
    // color:string,
    stat:string,
    up:string,
    down:string
}
export default function Stats(props: Props){
    const isgreen = props.up=="Rating" ? "bg-grass" : ""
    const isyellow = props.up=="Minutes" ? "bg-banana" : ""
    const isSlike = props.up=="Traning" || "Reviews" ? "bg-slime" : ""
    return (
        <div className="flex flex-col flex-wrap">
                <div className={`${isgreen || isyellow || isSlike} rounded-xl text-center text-white text-3xl font-bold w-fit px-2 self-center`}>
                  {props.stat}
                </div>
                <p className="my-1 text-3xl font-extrabold">{props.up}</p>
                <p className="mt-1 text-xs text-gray-500">{props.down}</p>

            </div>
    )
}