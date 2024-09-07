import { dbConnect } from "@/app/lib/db";
import Blog from "@/module/blogs";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(req, res) {
    try {
        const { id } = await req.json();
        if (!id) {
            return NextResponse.json({ message: 'id is required.' }, { status: 400 });
        }
        const data = await Blog.findById(id);

        return NextResponse.json({ message: 'data post succefull', data });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'data post faild to find', error }, { status: 400 });
    }
}