import "@/styles/globals.css";

import { Inter } from "next/font/google";
import React from "react";

import NextAuthProvider from "@/components/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<NextAuthProvider>{children}</NextAuthProvider>
			</body>
		</html>
	);
}
