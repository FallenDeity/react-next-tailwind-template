/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
	],
	pages: {
		signIn: "/login",
	},
	session: {
		strategy: "jwt",
	},
	debug: process.env.NODE_ENV === "development",
	secret: process.env.NEXTAUTH_SECRET as string,
};
