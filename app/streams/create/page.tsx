import BasicBtn from "@/components/basicBtn";
import Input from "@/components/input";
import TextArea from "@/components/textarea";

export default function CreateLive() {
    return (
        <div className="px-4 py-20 space-y-5">
            <Input
                name="name"
                label="Name"
                required
            />
            <Input
                kind="price"
                name="price"
                label="Price"
            />
            <TextArea
                label="Description"
                name="description"
                required
            />
            <BasicBtn
                text="Go Live"
                large
            />
        </div>
    );
}
