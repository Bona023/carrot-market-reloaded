import TabBar from "@/components/tabBar";
import PageTitle from "@/components/title";

export default function ProfileLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <PageTitle title="나의캐럿" />
            {children}
            <TabBar />
        </>
    );
}
