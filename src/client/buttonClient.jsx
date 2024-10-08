"use client"
import { useRouter } from 'next/navigation'

const ButtonClient = ({ id }) => {
    const router = useRouter();
    return (
        <div className="p-6 pt-0" key={ id }>
            <button
                onClick={ () => router.push(`/blog/${id}`) }
                className="align-middle  select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-white w-[100%] text-black shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button">
                Read More
            </button>
        </div>
    )
}

export default ButtonClient