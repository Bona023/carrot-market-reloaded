interface TextAreaProps {
    label?: string;
    name?: string;
    [key: string]: any;
}

export default function TextArea({ label, name, ...rest }: TextAreaProps) {
    return (
        <div>
            {label ? (
                <label
                    htmlFor={name}
                    className="mb-1 block text-sm font-medium"
                >
                    {label}
                </label>
            ) : null}
            <textarea
                id={name}
                className="mt-1 shadow-sm w-full outline-none ring-2 focus:ring-lightOrange rounded-md border-gray-300  text-gray-500 px-3 py-2 resize-none"
                rows={4}
                {...rest}
            />
        </div>
    );
}
