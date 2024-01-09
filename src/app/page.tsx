import { getServerSession } from "next-auth";
import React from "react";

import ProviderButton from "@/components/ProviderButton";
import { authOptions } from "@/lib/auth";

export default async function Home(): Promise<React.JSX.Element> {
	const session = await getServerSession(authOptions);
	console.log(session);
	return (
		<div className="h-screen overflow-hidden">
			<div className="flex h-full flex-col items-center justify-center">
				<div className="flex flex-col items-center justify-center space-y-10">
					<h1 className="text-4xl font-bold">Welcome to Next.js + NextAuth.js + TailwindCSS + Recoil</h1>
					<p className="text-lg font-medium">
						This is a starter template for Next.js + NextAuth.js + TailwindCSS + Recoil
					</p>
					<p className="text-lg font-medium">You are currently {session ? "logged in" : "logged out"}</p>
					{session && (
						<div className="flex flex-col items-center justify-center space-y-10">
							<p className="text-lg font-medium">Your session:</p>
							<p className="text-md text-balance font-medium">{JSON.stringify(session)}</p>
							<ProviderButton id={""} name={""} callback={"/login"} isSignIn={false} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
