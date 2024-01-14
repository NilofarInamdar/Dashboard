import React, { useState } from 'react'
import { TbCircles } from "react-icons/tb";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { LuCalendarRange } from "react-icons/lu";
import { RiQuestionnaireLine } from "react-icons/ri";
import { MdOutlineNotifications } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { CiGrid41 } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { BsJournalCheck } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdOutlineAddLink } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { CiFilter } from "react-icons/ci";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";
import { BsFillLightbulbFill } from "react-icons/bs";
import Card from './card'
import { useDrop } from 'react-dnd'
import CardList from './cardList'

const dummyTasks = [
    {
        id: 1,
        status: 'inprogress',
        title: 'Brainstorming',
        Sentence: 'Brainstorming brings team members  diverse experience into play.',
        comments: 12,
        files: 0,
    },
    {
        id: 2,
        status: 'inprogress',
        title: 'Wireframes',
        Sentence: 'Low fidelity wireframes include the most basic content and visuals.',
        comments: 2,
        files: 0,
    },
    {
        id: 3,
        status: 'complete',
        title: 'Mobile App Design',
        Sentence: '',
        comments: 12,
        files: 15,
    },
    {
        id: 4,
        status: 'complete',
        title: 'Design System',
        Sentence: 'It just needs to adapt the UI from what you did before',
        comments: 14,
        files: 15,
    },
    {
        id: 5,
        status: 'high',
        title: 'Research',
        Sentence: 'User research helps you to create an optimal product for users.',
        comments: 10,
        files: 3,
    },
    {
        id: 6,
        status: 'low',
        title: 'Onboarding Illustrations',
        Sentence: '',
        comments: 12,
        files: 0,
    },
    {
        id: 7,
        status: 'low',
        title: 'Moodboard',
        Sentence: '',
        comments: 9,
        files: 10,
    },
];

const Dashboard = () => {
    const [tasks, setTasks] = useState(dummyTasks)
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'DargCard',
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    return (
        <div ref={drop} className={`w-full flex ${isOver}`}>
            <div className=' border-r'>
                <div className=' flex mt-9 border-b pb-4 ml-8 gap-2'>
                    <TbCircles size={28} className=' text-blue-500' />
                    <p className='font-bold text-2xl'>Project M.</p>
                    <div className='ml-16'>
                        <HiChevronDoubleLeft size={34} className='text-gray-500' />
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <ul className='ml-10 text-2xl text-gray-500'>
                        <li className='flex mt-6 mb-8 gap-3'> <CiGrid41 size={30} />Home</li>
                        <li className='flex mb-8 gap-3'><AiOutlineMessage size={32} />Messages</li>
                        <li className='flex mb-8 gap-3'><BsJournalCheck size={26} />Tasks</li>
                        <li className='flex mb-8 gap-3'><BsPeople size={30} />Members</li>
                        <li className='flex gap-3 border-b pb-8'><IoSettingsOutline size={30} />Settings</li>
                    </ul>
                </div>
                <div className=' flex mt-8 ml-10 text-gray-500 font-bold justify-between'>
                    <p>MY PROJECT</p>
                    <CiSquarePlus size={25} className='mr-4' />
                </div>
                <div className='cursor-pointer ml-10 text-gray-500 text-lg'>
                    <li className='mt-8'>Mobile App</li>
                    <li className='mt-4'>Website Redesign</li>
                    <li className='mt-4'>Design System</li>
                    <li className='mt-4'>Wireframes</li>
                </div>
                <div className='w-[80%] p-4 rounded-[1rem] bg-[#F5F5F5] ml-8 mt-16'>
                    <div className='pt-4'>
                        <div className='flex bg-orange-100 p-2 rounded-full justify-center items-center h-16 w-16 -mt-16 ml-[4rem]'>
                            <BsFillLightbulbFill size={30} className='text-yellow-400' />
                        </div>
                        <p className='font-bold text-center text-lg'>Thoughts Time</p>
                        <p className='py-4'>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
                        <input className='bg-white p-2 w-full focus:outline-none' type="type" placeholder='Write a message'>
                        </input>
                    </div>
                </div>
            </div >
            <div className=''>
                <div className='border-b pb-3'>
                    <div className='mr-40 flex gap-2'>
                        <div className='mt-6'>
                            <div className='bg-gray-100 rounded flex items-center px-2 h-[45px] w-[500px] ml-6'>
                                <IoSearchOutline size={25} className='text-gray-500' />
                                <input className='bg-transparent p-2 w-full focus:outline-none' type="search" placeholder='Search for anything...'></input>
                            </div>
                        </div>
                        <div className='flex ml-40 mt-8 gap-4'>
                            <LuCalendarRange size={28} />
                            <RiQuestionnaireLine size={28} />
                            <span class="relative flex h-3 w-3 ">
                                <span class="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span class="relative rounded-full h-3 w-3 bg-red-500">
                                    <MdOutlineNotifications size={30} />
                                </span>
                            </span>
                        </div>
                        <div className='flex ml-20'>
                            <div className='mt-6'>
                                <p>Anima Agrawal</p>
                                <p className='ml-12'>U.P,India</p>
                            </div>
                            <div className='flex'>
                                <img className="ml-6 h-10 w-10 rounded-full mt-7" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="the girl" />
                                <p className=''><IoIosArrowDown size={25} className='mt-8' /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-4'>
                        <div className='mt-10 ml-10'>
                            <h1 className='font-bold text-4xl'>Mobile App</h1>
                        </div>
                        <div className='bg-[#5030E5]/20 p-2 rounded-[.5rem] mt-10'>
                            <CiEdit size={25} className='text-[#5030e5]' />
                        </div>
                        <div className=' bg-[#5030E5]/20 p-2 rounded-[.5rem] mt-10'>
                            <MdOutlineAddLink size={25} className='text-[#5030e5]' />
                        </div>
                    </div>
                    <div className='flex gap-4 mr-20 mt-10'>
                        <div className=''>
                            <div className=' bg-[#5030E5]/20 p-2 rounded-[.5rem]'>
                                <GoPlus size={25} className='text-[#5030e5]' />
                            </div>
                        </div>
                        <p className='text-[#5030e5] text-[1.5rem] '>Invite</p>
                        <div class="flex -space-x-2 overflow-hidden ">
                            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mt-8'>
                    <div className='flex gap-4 ml-10'>
                        <span className="hidden sm:block">
                            <button type="button" className="inline-flex gap-2  items-center rounded-md bg-white px-6 h-[3rem] text-1xl font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300">
                                <CiFilter size={20} />
                                Filter
                                <IoIosArrowDown size={25} />
                            </button>
                        </span>
                        <span className="hidden sm:block">
                            <button type="button" className="inline-flex gap-2  items-center rounded-md bg-white px-6 h-[3rem] text-1xl font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300">
                                <MdOutlineCalendarMonth size={20} />
                                Today
                                <IoIosArrowDown size={25} />
                            </button>
                        </span>
                    </div>
                    <div className='flex gap-4 mr-20'>
                        <span className="hidden sm:block">
                            <button type="button" className="inline-flex gap-2  items-center rounded-md bg-white px-4 h-[3rem] text-1xl font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300">
                                <CiShare2 size={20} />
                                Share
                            </button>
                        </span>
                        <div className='border-r border-black'>
                        </div>
                        <div className='bg-[#5030E5]/20 p-2 rounded-[.5rem] '>
                            <CiGrid2H size={30} />
                        </div>
                        <div className='mt-2'>
                            <CiGrid41 size={30} className='text-gray-500' />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className=' mt-10 ml-10'>
                        <CardList tasks={tasks} setTasks={setTasks} />
                        {/* <div className='w-[30%] p-4 rounded-[1rem] bg-[#F5F5F5] ml-10'>
                            <div className='flex justify-between border-b-4 pb-2'>
                                <li className='font-bold text-lg'>to do</li>
                                <div className=' bg-[#5030E5]/20 w-5 rounded-full flex items-center justify-center -ml-10'>
                                </div>
                                <div className=' bg-[#5030E5]/20 p-1 rounded-[.5rem]'>
                                    <GoPlus size={25} className='text-[#5030e5]' />
                                </div>
                            </div>
                            <Card
                                status='Low'
                                title='Brainstorming'
                                Sentence='Brainstorming brings team members  diverse experience into play.'
                                comments={12}
                                files={0}
                            />
                            <Card
                                status='High'
                                title='Wireframes'
                                Sentence='Low fidelity wireframes include the most basic content and visuals.'
                                comments={2}
                                files={0}
                            />
                        </div>
                        <div className='w-[30%] p-4 rounded-[1rem] bg-[#F5F5F5]'>
                            <div className='flex justify-between border-b-4 pb-2'>
                                <li className='font-bold text-lg'>on-progress</li>
                            </div>
                            <Card
                                status='High'
                                title='Research'
                                Sentence='User research helps you to create an optimal product for users.'
                                comments={10}
                                files={3}
                            />
                            <Card
                                status='Low'
                                title='Onboarding Illustrations'
                                Sentence=''
                                comments={12}
                                files={0}
                            />
                            <Card
                                status='Low'
                                title='Moodboard'
                                Sentence=''
                                comments={9}
                                files={10}
                            />
                        </div>
                        <div className='w-[30%] p-4 rounded-[1rem] bg-[#F5F5F5]'>
                            <div className='flex justify-between border-b-4 pb-2'>
                                <li className='font-bold text-lg'>Done</li>
                            </div>
                            <Card
                                status='Low'
                                title='Mobile App Design'
                                Sentence=''
                                comments={12}
                                files={15}
                            />
                            <Card
                                status='High'
                                title='Design System'
                                Sentence='It just needs to adapt the UI from what you did before'
                                comments={12}
                                files={15}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
