import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { BsFolder2 } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { useDrag } from 'react-dnd';

const Card = ({ id, status, title, Sentence, comments, files }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'CARD',
        item: { id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const getStatusColor = () => {
        switch (status.toLowerCase()) {
            case 'low':
                return ' w-12 bg-orange-100 text-orange-700';
            case 'high':
                return 'w-14 bg-orange-100 text-orange-700';
            case 'complete':
                return 'w-20 bg-green-200 text-green-800';
            default:
                return '';
        }
    };

    const statusColor = getStatusColor();
    return (
        <div
            className={`rounded-[.5rem] p-4 bg-gray-100 mt-4 cursor-grabbing ${isDragging ? 'opacity-50' : ''
                }`}
            ref={drag}
        >
            <div className='flex justify-between'>
                <div className={`rounded-md ${statusColor}`}>
                    <p className='ml-2'>{status}</p>
                </div>
                <BsThreeDots size={30} />
            </div>
            <h2 className='font-bold mt-2'>{title}</h2>
            <p className='mt-1'>{Sentence}</p>
            <div className='flex mt-4 justify-between'>
                <div class="flex -space-x-2 overflow-hidden">
                    <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                </div>
                <div className='flex gap-2 text-gray-500'>
                    <div className='flex'>
                        <AiOutlineMessage size={22} /> <p>{comments} Comments</p>
                    </div>
                    <div className='flex'>
                        <BsFolder2 size={22} /> <p>{files} Files</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
