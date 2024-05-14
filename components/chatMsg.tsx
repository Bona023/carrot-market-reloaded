import { cls } from "../libs/utils";

interface MsgProps {
    message: string;
    reversed?: boolean;
    avatarUrl?: string;
}

export default function ChatMessage({ message, avatarUrl, reversed }: MsgProps) {
    return (
        <div className={cls("flex  items-start space-x-2", reversed ? "flex-row-reverse space-x-reverse" : "")}>
            <div className="size-8 rounded-full bg-slate-400" />
            <div className={cls("w-1/2 text-sm px-3 py-2 rounded-lg", reversed ? "bg-lightOrange  text-gray-700" : "bg-lightTeal text-gray-100")}>
                <p>{message}</p>
            </div>
        </div>
    );
}
