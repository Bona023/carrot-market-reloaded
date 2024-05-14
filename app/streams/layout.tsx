import TabBar from "@/components/tabBar";
import PageTitle from "@/components/title";

export default function LiveLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <PageTitle title="라이브" />
            {children}
            <TabBar />
        </>
    );
}
