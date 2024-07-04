import React from 'react'
import { Task } from '../../types'

export interface ITaskList extends React.ComponentProps<'div'> {
	tasks: Task[]
}
