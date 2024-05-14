import BasicBtn from "@/components/basicBtn";
import TextArea from "@/components/textarea";

export default function CommunityPostDetail() {
    return (
        <div className="pt-10 pb-20">
            <div className="pt-4 px-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-deepTeal">동네질문</span>
            </div>
            <div className="flex cursor-pointer px-4 py-5 border-b items-center space-x-3 mb-5">
                <div className="size-10 rounded-full bg-slate-300" />
                <div>
                    <p className="text-base font-medium text-lightTeal">Steve Jebs</p>
                    <p className="text-xs font-medium text-gray-300">View profile &rarr;</p>
                </div>
            </div>
            <div className="px-4">
                <div className="mt-3 text-gray-300">
                    <span className="text-mainOrange">Q.</span> 만두 맛집 추천 좀 해주세요!
                </div>
            </div>
            <div className="flex space-x-5 mt-3 py-2.5 border-t border-b-2 w-full px-4">
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
            <div className="px-4 py-5 space-y-5">
                <div className="flex items-start space-x-3">
                    <div className="size-8 bg-slate-300 rounded-full" />
                    <div>
                        <span className="text-sm block font-medium">동네사람</span>
                        <span className="text-xs block text-gray-400">2시간 전</span>
                        <p className="text-gray-200">우리 아파트 옆에 만둣집이 맛있어요</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <div className="size-8 bg-slate-300 rounded-full" />
                    <div>
                        <span className="text-sm block font-medium">동네사람</span>
                        <span className="text-xs block text-gray-400">2시간 전</span>
                        <p className="text-gray-200">우리 아파트 옆에 만둣집이 맛있어요</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <div className="size-8 bg-slate-300 rounded-full" />
                    <div>
                        <span className="text-sm block font-medium">동네사람</span>
                        <span className="text-xs block text-gray-400">2시간 전</span>
                        <p className="text-gray-200">우리 아파트 옆에 만둣집이 맛있어요</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <div className="size-8 bg-slate-300 rounded-full" />
                    <div>
                        <span className="text-sm block font-medium">동네사람</span>
                        <span className="text-xs block text-gray-400">2시간 전</span>
                        <p className="text-gray-200">우리 아파트 옆에 만둣집이 맛있어요</p>
                    </div>
                </div>
            </div>

            <form className="px-4">
                <TextArea placeholder="답변을 입력해주세요!" />
                <BasicBtn
                    text="Reply"
                    large
                />
            </form>
        </div>
    );
}
