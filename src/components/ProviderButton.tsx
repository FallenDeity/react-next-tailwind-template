"use client";

import { signIn, signOut } from "next-auth/react";
import React from "react";

import { Button } from "./ui/button";

export default function ProviderButton({
	id,
	name,
	callback,
	isSignIn = true,
}: {
	id: string;
	name: string;
	callback: string;
	isSignIn?: boolean;
}): React.JSX.Element {
	return (
		<>
			{isSignIn ? (
				<Button
					key={name}
					/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
					onClick={async (): Promise<void> => void (await signIn(id, { callbackUrl: callback }))}>
					Sign in with {name}
				</Button>
			) : (
				<Button
					key={name}
					/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
					onClick={async (): Promise<undefined> => await signOut({ callbackUrl: callback })}>
					Sign out
				</Button>
			)}
		</>
	);
}
