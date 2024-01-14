import React, { useEffect, useState } from 'react'
import Card from './card';
import { useDrop } from 'react-dnd';

const CardList = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState([]);
    const [inprogress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);

    useEffect(() => {
        const fTodos = tasks.filter(task => task.status === "low")
        const fInProgress = tasks.filter(task => task.status === "high")
        const fDone = tasks.filter(task => task.status === "complete")

        setTodos(fTodos);
        setInProgress(fInProgress)
        setDone(fDone)
    }, [tasks]);

    const statuses = ["low", "high", "complete"]
    return (
        <div className='flex gap-16'>
            {statuses.map((status, index) => (
                <Section key={index} status={status} tasks={tasks} setTasks={setTasks} todos={todos} inprogress={inprogress} done={done} />))}
        </div>
    )
}

export default CardList;


const Section = ({ status, tasks, setTasks, todos, inprogress, done }) => {

    const [{ isOver }, drop] = useDrop({
        accept: 'CARD',
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    const addItemToSection = (id) => {
        setTasks(prev => {
            const mTasks = prev.map(task => {
                if (task.id === id) {
                    return { ...task, status: status }
                }
                return task
            })
            return mTasks;
        })
    }

    let text = "To do"
    let bg = "bg-slate-500"
    let tasksToMap = todos

    if (status === 'high') {
        text = "InProgress"
        bg = 'bg-purple-500'
        tasksToMap = inprogress
    }

    if (status === 'complete') {
        text = "Done"
        bg = 'bg-green-500'
        tasksToMap = done
    }

    return (
        <div ref={drop} className={`w-80 ${isOver}`}>
            <Header text={text} bg={bg} count={tasksToMap.length} />
            {tasksToMap.length > 0 &&
                tasksToMap.map((task) => (
                    <Card
                        key={task.id}
                        status={task.status}
                        title={task.title}
                        Sentence={task.Sentence}
                        comments={task.comments}
                        files={task.files}
                    />
                ))}
        </div>
    )
}



const Header = ({ text, bg, count }) => {
    return <div className={`${bg} flex items-center h-12 pl-4 rounded-md text-sm text-white`}>{text} <div className='ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center'>{count}</div></div>
}
