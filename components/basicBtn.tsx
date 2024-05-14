import { cls } from "../libs/utils";

interface ButtonProps {
    large?: boolean;
    text: string;
    [key: string]: any;
}

export default function BasicBtn({ large = false, onClick, text, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={cls("basicBtn", large ? "text-lg" : "text-sm")}
        >
            {text}
        </button>
    );
}
