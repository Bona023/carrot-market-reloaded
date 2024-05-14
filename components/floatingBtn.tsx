import Link from "next/link";
import React from "react";

interface FloatingButton {
    children: React.ReactNode;
    href: string;
}

export default function FloatingBtn({ children, href }: FloatingButton) {
    return (
        <Link
            href={href}
            className="fixed hover:bg-deepYellow hover:text-deepTeal transition-colors cursor-pointer bottom-24 right-5 shadow-xl bg-mainOrange rounded-full p-3 text-white"
        >
            {children}
        </Link>
    );
}
