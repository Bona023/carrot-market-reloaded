import TabBar from "@/components/tabBar";
import PageTitle from "@/components/title";

export default function ItemLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <PageTitle title="상품" />
            {children}
            <TabBar />
        </>
    );
}
