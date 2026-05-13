import type {Metadata} from 'next';
import {Noto_Serif} from 'next/font/google';
import React, { ViewTransition } from "react";
import './globals.css';

const roboto = Noto_Serif({
    weight: ['400'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Vegan Gluten Free Recipes',
    description: 'Collection of recipes that work for ME',
};

export default function RootLayout({children,}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={roboto.className}>
            <div className="binder-rings" aria-hidden="true" />
            <ViewTransition name="page-container">
                {children}
            </ViewTransition>
        </body>
        </html>
    );
}
