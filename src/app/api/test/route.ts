import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/require-await, @typescript-eslint/no-unused-vars
export async function GET(_req: NextRequest): Promise<NextResponse> {
	const random = Math.random();
	return NextResponse.json({ random }, { status: 200 });
}
