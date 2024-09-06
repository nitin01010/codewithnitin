// app/api/contact/route.js

import Contact from '@/module/contact';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, message: 'All fields are required.' },
                { status: 400 }
            );
        }

        const data = await Contact.create({ name, email, message });
        console.log(data);

        return NextResponse.json(
            { success: true, message: 'Data received successfully' }
        );
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json(
            { success: false, message: 'Error processing request' },
            { status: 500 }
        );
    }
}
