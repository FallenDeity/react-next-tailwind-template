import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import React from "react";

import ProviderButton from "@/components/ProviderButton";
import { authOptions } from "@/lib/auth";

export default async function Login(): Promise<React.JSX.Element> {
	const providers = await getProviders();
	const session = await getServerSession(authOptions);
	if (session) {
		redirect("/");
	}
	return (
		<div className="h-screen overflow-hidden">
			<div className="flex h-full flex-col items-center justify-center">
				<div className="flex flex-col items-center justify-center space-y-10">
					{providers &&
						Object.values(providers).map((provider) => (
							<ProviderButton key={provider.name} id={provider.id} name={provider.name} callback={"/"} />
						))}
				</div>
			</div>
		</div>
	);
}
