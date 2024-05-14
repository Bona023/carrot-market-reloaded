import BasicBtn from "@/components/basicBtn";
import Input from "@/components/input";

export default function Upload() {
    return (
        <div className="px-4 pt-16 pb-20 space-y-5">
            <div>
                <label className="w-full cursor-pointer text-lightTeal hover:border-mainOrange hover:text-mainOrange flex items-center justify-center border-2 border-dashed border-lightTeal h-48 rounded-md">
                    <svg
                        className="h-12 w-12"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <input
                        className="hidden"
                        type="file"
                    />
                </label>
            </div>
            <div>
                <Input
                    name="name"
                    label="Name"
                    kind="text"
                    required
                />
            </div>
            <div>
                <Input
                    name="price"
                    label="Price"
                    type="number"
                    kind="price"
                />
            </div>
            <div>
                <label
                    htmlFor="description"
                    className="mb-1 block text-sm font-medium "
                >
                    Description
                </label>
                <textarea
                    id="description"
                    className="mt-1 shadow-sm w-full outline-none ring-2 focus:ring-lightOrange rounded-md border-gray-300  text-gray-500 px-3 py-2 resize-none"
                    rows={4}
                />
            </div>
            <BasicBtn
                text="Upload Item"
                large
            />
        </div>
    );
}
