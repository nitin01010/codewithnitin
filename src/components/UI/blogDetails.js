import React, { useEffect, useState } from 'react';
import axios from 'axios';
const BlogDetails = ({ postId }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post('/api/blog/blogfind', { id: postId });
                setData(res.data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [postId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data!</p>;
    if (!data) return <p>No data available</p>;

    const date = new Date(data.timestamp);
    const formattedDate = `${date.getDate()} ${date.toLocaleString('en-US', { month: 'short' })}, ${date.getFullYear().toString().slice(-2)}`;

    return (
        <div className=' rounded-t-lg p-1 w-[95%] lg:w-[75%] m-auto rounded bg-transparent'>
            <img
                src={ data.poster }
                className="object-cover rounded-t-lg w-[100%] h-[300px] md:h-[400px] lg:h-[600px]"
                alt="Blog"
            />
            <div className=' text-white p-2  relative'>
                <h1 className=' font-bold text-2xl capitalize'>
                    <b>{ data.title }</b>
                </h1>
                <br />
                <div className='p-1 gap-5 mb-2   flex flex-wrap  justify-end  '>
                    <p className='font-bold uppercase'><b>{ data.Category }</b></p>
                    <div className='w-[1px] rounded bg-orange-400 h-[24px] p-1'></div>
                    <p className='font-bold uppercase'><b>{ formattedDate }</b></p>
                </div>
                <p>{ data.contente }</p>
            </div>
        </div>
    );
};
export default BlogDetails;
