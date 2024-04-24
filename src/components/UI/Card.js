import React from 'react'
import Button from './Button'
import Item from 'antd/es/list/Item'

const Card = ({ data }) => {
    const { id, title, descrption, date, contente } = data
    return (
        <div
            className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                    alt="ui/ux review check" />
            </div>
            <div className="p-6">
                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    { title }
                </h4>
                <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
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