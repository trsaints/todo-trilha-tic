import { useContext } from 'react'
import { BlockContext, TaskContext } from '../../context/models'
import { ITaskList } from './ITaskList'
import { TaskCard } from '../TaskCard'

function Root(props: ITaskList) {
	const blockContext = useContext(BlockContext)
	const { isEditable } = useContext(TaskContext)
	const element = `${blockContext.name}__tasks`

	const tasks = props.tasks.map((task) => (
		<li key={task.id}>
			<TaskCard.Root task={task} isEditable={isEditable} />
		</li>
	))

	return <ul className={element}>{tasks}</ul>
}

export const TaskList = {
	Root,
}
