import FloatingBtn from "@/components/floatingBtn";
import Item from "@/components/item";

export default function Loved() {
    return (
        <>
            <div className="flex flex-col space-y-4 divide-y-[1px] pt-14 pb-24 h-full">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                    <Item
                        key={i}
                        id={i}
                        title="iPhone 14"
                        price={99}
                        color="black"
                        comments={1}
                        hearts={1}
                    />
                ))}
            </div>
            <FloatingBtn href="/item/add-item">
                <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            </FloatingBtn>
        </>
    );
}
