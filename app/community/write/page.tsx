import BasicBtn from "@/components/basicBtn";
import TextArea from "@/components/textarea";

export default function Write() {
    return (
        <form className="px-4 pt-16 pb-20">
            <TextArea
                required
                placeholder="질문을 작성해주세요"
            />
            <BasicBtn text="Submit" />
        </form>
    );
}
