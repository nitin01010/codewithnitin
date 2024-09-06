import { NextResponse } from "next/server";
import { dbConnect } from "@/app/lib/db";
import Blog from "@/module/blogs";

dbConnect();

export async function POST(req, res) {
    try {
        const body = await req.json();
        const { id, poster, title, description, contente, Category } = body;
        if (!id || !poster || !title || !description || !contente || !Category) {
            return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
        }
        const data = await Blog.create({
            id,
            poster,
            title,
            description,
            contente,
            Category
        });
        return NextResponse.json({ message: 'data post succefull', data });
    } catch (error) {
        return NextResponse.json({ message: 'data post faild', error }, { status: 400 });
    }
}

export async function GET(req) {
    try {
        const posts = await Blog.find({});
        return NextResponse.json({ allPost: posts });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Failed to fetch posts', error }, { status: 500 });
    }
}