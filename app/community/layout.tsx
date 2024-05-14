import TabBar from "@/components/tabBar";
import PageTitle from "@/components/title";

export default function CommunityLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <PageTitle title="동네생활" />
            {children}
            <TabBar />
        </>
    );
}
