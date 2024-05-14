import Link from "next/link";

export default function Chat() {
    return (
        <div className="pt-12 pb-18 divide-y-[1px]">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                <Link
                    className="block"
                    href={`/chats/${i}`}
                    key={i}
                >
                    <div className="flex px-4 cursor-pointer py-3 items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-slate-300" />
                        <div>
                            <p className="text-lightOrange">Steve Jebs</p>
                            <p className="text-sm  text-gray-300">See you tomorrow in the corner at 2pm!</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
