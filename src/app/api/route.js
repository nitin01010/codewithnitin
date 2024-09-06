import { NextResponse } from "next/server";

export async function GET() {
    try {
        return NextResponse.json({ message: 'This is testing route' });
    } catch (error) {
        return NextResponse.json({ message: 'This is testing route' });
    }
}