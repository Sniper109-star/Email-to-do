import { NextResponse } from "next/server";
import {
  monadPublicClient,
  getBalance,
  sendMonadTransaction,
  encodeTransfer,
} from "@/lib/integrations/monad";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");

  if (!address) {
    return NextResponse.json({ error: "Address required" }, { status: 400 });
  }

  try {
    const balance = await getBalance(address as `0x${string}`);
    return NextResponse.json({ address, balance: balance.toString() });
  } catch {
    return NextResponse.json({ error: "Failed to fetch balance" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { to, value, privateKey } = body;

    if (!to || !value) {
      return NextResponse.json({ error: "Missing transaction fields" }, { status: 400 });
    }

    const hash = await sendMonadTransaction(to as `0x${string}`, BigInt(value));
    return NextResponse.json({ hash });
  } catch {
    return NextResponse.json({ error: "Transaction failed" }, { status: 500 });
  }
}
