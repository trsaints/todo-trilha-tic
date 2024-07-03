import React from 'react'
import { Task } from '../../Types/Task'

export interface ITaskList extends React.ComponentProps<'div'> {
	tasks: Task[]
}
