export default function Community() {
    return (
        <div className="pt-16 pb-20 space-y-8">
            {[1, 2, 3, 4, 5].map((_, i) => (
                <div
                    key={i}
                    className="flex flex-col items-start cursor-pointer"
                >
                    <span className="flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-deepTeal ml-4">동네질문</span>
                    <div className="mt-3 text-gray-300 px-5">
                        <span className="text-mainOrange">Q.</span> 만두 맛집 추천 좀 해주세요!
                    </div>
                    <div className="mt-5 flex items-center justify-between w-full text-gray-300 font-medium text-xs px-5">
                        <span>니꼬</span>
                        <span>18시간 전</span>
                    </div>
                    <div className="flex space-x-5 mt-3 py-2.5 border-t border-b-2 w-full px-5">
                        <span className="flex space-x-2 items-center text-sm">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <span>궁금해요 1</span>
                        </span>
                        <span className="flex space-x-2 items-center text-sm">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                ></path>
                            </svg>
                            <span>답변 1</span>
                        </span>
                    </div>
                </div>
            ))}
            <button className="fixed hover:bg-deepYellow transition-colors cursor-pointer bottom-24 right-5 shadow-xl bg-mainOrange rounded-full p-3 text-white hover:text-deepTeal">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    ></path>
                </svg>
            </button>
        </div>
    );
}
