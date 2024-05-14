import TabBar from "@/components/tabBar";
import PageTitle from "@/components/title";

export default function ChatsLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <PageTitle title="채팅" />
            {children}
            <TabBar />
        </>
    );
}
