import React from 'react'
import Button from './Button'
import Image from 'next/image'


const Card = ({ data }) => {
    const { id, title, descrption, date, contente } = data
    return (
        <div
            className="relative flex max-w-[24rem] mb-4 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                <Image src={ '/thum.jpg' } width={ 200 } height={ 200 } className=' w-[100%] object-cover   m-auto  rounded-md' alt="ui/ux review check" />
            </div>
            <div className="p-6">
                <h4 className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    { title }
                </h4>
                <p className="block mt-3 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
                    { descrption }
                </p>
            </div>
            <div className="flex items-center justify-between p-6">
                <Button id={ id } />
                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                    { date }
                </p>
            </div>
        </div>
    )
}

export default Card