import ChatMessage from "@/components/chatMsg";

export default function Stream() {
    return (
        <div className="pt-16 pb-20 px-4 space-y-5">
            <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
            <div className="mt-5">
                <h1 className="text-3xl font-bold">Galaxy S50</h1>
                <span className="text-2xl block mt-3 text-gray-300">$140</span>
                <p className="my-6 text-gray-300">
                    My money&apos;s in that office, right? If she start giving me some bullshit about it ain&apos;t there, and we got to go someplace else and get it, I&apos;m gonna shoot you in the
                    head then and there. Then I&apos;m gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I&apos;m talking to you,
                    motherfucker. You listen: we go in there, and that ni**a Winston or anybody else is in there, you the first motherfucker to get shot. You understand?
                </p>
            </div>
            <div>
                <h2 className="text-2xl font-bold">Live Chat</h2>
                <div className="py-10 pb-16 h-[50vh] overflow-y-scroll  px-4 space-y-4">
                    <ChatMessage
                        message="Hi how much are you selling them for?"
                        reversed
                    />
                    <ChatMessage message="I want ￦20,000" />
                    <ChatMessage
                        message="Hi how much are you selling them for?"
                        reversed
                    />
                    <ChatMessage message="I want ￦20,000" />
                    <ChatMessage
                        message="Hi how much are you selling them for?"
                        reversed
                    />
                    <ChatMessage message="I want ￦20,000" />
                    <ChatMessage
                        message="Hi how much are you selling them for?"
                        reversed
                    />
                    <ChatMessage message="I want ￦20,000" />
                    <ChatMessage
                        message="Hi how much are you selling them for?"
                        reversed
                    />
                    <ChatMessage message="I want ￦20,000" />
                    <ChatMessage
                        message="Hi how much are you selling them for?"
                        reversed
                    />
                    <ChatMessage message="I want ￦20,000" />
                </div>
                <div className="fixed py-2 bg-darkBg bottom-[75px] inset-x-0">
                    <div className="flex relative max-w-md items-center w-full mx-auto">
                        <input
                            type="text"
                            className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 pl-4 py-1 text-gray-700 focus:border-orange-500"
                        />
                        <div className="absolute inset-y-0 flex py-1 pr-1.5 right-0">
                            <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full hover:bg-orange-600 text-sm text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    className="w-8 h-7 px-2 py-1"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
