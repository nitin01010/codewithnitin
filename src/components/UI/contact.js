"use client";
import axios from 'axios';
import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const contactData = {
            name,
            email,
            message
        };

        try {
            // Make the API request with axios
            const response = await axios.post('/api/contact', contactData);

            // Check if response is successful
            if (response.status === 200) {
                // Success
                setResponseMessage('Data received successfully!');
                // Clear the form
                setName('');
                setEmail('');
                setMessage('');
            } else {
                // Handle server-side error
                setResponseMessage(response.data.message || 'Something went wrong.');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('Error processing request.');
        }
    };

    return (
        <div className="container px-2 py-4 bg-animation">
            <h2 className="text-3xl md:text-5xl text-center font-bold mb-8 leading-snug text-white">
                Love to hear from you, <br /> Get in touch 👋
            </h2>
            <form onSubmit={ handleSubmit } className="grid grid-cols-1 md:grid-cols-2 bg-white gap-4 max-w-3xl mx-auto p-4 rounded">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Jon Doe'
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                        className="w-full border bg-[#f2f2f2] border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder='jondoe@gmail.com'
                        name="email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                        className="w-full bg-[#f2f2f2] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4 col-span-1 md:col-span-2">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder='Type Message ...'
                        value={ message }
                        onChange={ (e) => setMessage(e.target.value) }
                        className="w-full bg-[#f2f2f2] border border-gray-300 rounded-md px-4 py-2 h-[150px] md:h-[300px] focus:outline-none focus:border-blue-500"
                        required
                    ></textarea>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Just Send
                    </button>
                </div>
                { responseMessage && (
                    <div className="col-span-1 md:col-span-2 mt-4 text-center">
                        <p className={ `text-lg ${responseMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}` }>
                            { responseMessage }
                        </p>
                    </div>
                ) }
            </form>
        </div>
    );
};

export default Contact;
