import ButtonClient from '@/client/buttonClient';

const BlogCard = ({ data }) => {
    return (
        <div className="relative flex flex-col mt-6 text-white  bg-clip-border rounded-xl">
            <div className="relative h-52 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                    src={ data.poster }
                    alt="card-image"
                />
            </div>
            <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    { data.title }
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    { data.description }
                </p>
            </div>
            <ButtonClient id={ data._id } />
        </div>
    );
}

export default BlogCard;
