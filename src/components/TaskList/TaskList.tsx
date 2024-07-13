import {useContext} from 'react'
import {BlockContext, DataContext} from '../../context/models'

import {TaskCard} from '../TaskCard'

import {ITaskList} from './ITaskList'

function TaskList(props: ITaskList) {
    const blockContext = useContext(BlockContext)
    const {isEditable} = useContext(DataContext)
    const element      = `${blockContext.name}__tasks`

    const tasks = props.tasks.map((task) => (
        <li key={task.id}>
            <TaskCard task={task} isEditable={isEditable}/>
        </li>
    ))

    return <ul className={element}>{tasks}</ul>
}

export {TaskList}
