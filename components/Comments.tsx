import Image from "next/image";

export default function Comments (props: any) {
    return (
        <div className="flex flex-col md:flex-row mt-8 py-8 shadow-xl px-8">
            <div className="flex flex-col justify-center items-center w-full md:w-1/3">
                <div>
                <Image
                    src={props.comment.avatar}
                    alt={props.comment.comment}
                    layout="fixed"
                    unoptimized={true}
                    height='80%'
                    width='80%'
                    className="rounded-full"
                />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="font-mono text-xs antialiased font-thin text-gray-700">{props.comment.name}</p>
                    <p className="font-mono text-xs antialiased font-thin text-gray-700">{props.comment.email}</p>
                </div>
            </div>
            <div className="w-ful md:w-2/3 mt-8 md:mt-0">
                <p className="text-sm antialiased font-thin ml-4">{props.comment.comment}</p>
            </div>
        </div>
    )
}