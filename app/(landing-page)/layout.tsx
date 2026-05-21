import Navigation from '@/components/navigation/Header';
import React from 'react';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative min-h-screen w-full">
            <Navigation />
            {children}
        </div>
    );
}
