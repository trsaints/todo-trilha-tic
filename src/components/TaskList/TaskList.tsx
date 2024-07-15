import {useContext} from 'react'
import {BlockContext, DataContext} from '../../context/models'

import {TaskCard} from '../TaskCard'

import {ITaskList} from './ITaskList'
import './TaskList.css'

function TaskList(props: ITaskList) {
    const {tasks, onHandleClick} = props

    const {isEditable} = useContext(DataContext)
    const blockContext = useContext(BlockContext)
    const element      = `${blockContext.name}__tasks`

    const cards = tasks.map((task) => (
        <li key={task.id}>
            <TaskCard task={task} isEditable={isEditable}/>
        </li>
    ))

    return <ul className={element} onClick={onHandleClick}>{cards}</ul>
}

export {TaskList}
