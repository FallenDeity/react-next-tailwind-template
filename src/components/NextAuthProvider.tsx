"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import React from "react";
import { RecoilRoot } from "recoil";

export default function NextAuthProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
	return (
		<SessionProvider>
			<ThemeProvider attribute="class">
				<RecoilRoot>{children}</RecoilRoot>
			</ThemeProvider>
		</SessionProvider>
	);
}
