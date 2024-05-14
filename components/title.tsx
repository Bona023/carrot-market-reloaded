interface IPageTitle {
    title: string;
}

export default function PageTitle({ title }: IPageTitle) {
    return (
        <div className="w-full flex justify-center items-center py-3 text-base font-medium border-b border-white fixed top-0 bg-darkBg">
            <span>{title}</span>
        </div>
    );
}
