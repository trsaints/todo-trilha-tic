import {FormEvent, useContext} from 'react'
import {Priority, Task} from '../../types'
import {DataContext} from '../../context/models'

import {Button, TextField} from '../../components'

function TaskForm() {
    const {createTask, setTask} = useContext(DataContext)
    const today                 = new Date()

    const saveTaskTemporarily = (e: FormEvent) => {
        const data = new FormData(e.currentTarget.closest('form') ?? undefined)

        const formTask: Task = {
            id: Date.now(),
            title: data.get('title') as string,
            priority: data.get('priority') as Priority,
            completionDate: new Date(data.get('completionDate') as string),
            creationDate: today,
            description: data.get('description') as string,
        }

        setTask(formTask)
    }

    return (
        <form className='task-form' onChange={saveTaskTemporarily} onSubmit={createTask}>
            <fieldset className='task-form__fieldset'>
                <legend className='task-form__legend'>Nova Tarefa</legend>

                <TextField
                    name='title'
                    label='título'
                    type='text'
                    id='title'
                />

                <div className='form__field'>
                    <label htmlFor='priority'>Prioridade:</label>
                    
                    <select name='priority' id='priority'>
                        <option value='low'>baixa</option>
                        <option value='medium'>média</option>
                        <option value='high'>alta</option>
                    </select>
                </div>

                <TextField
                    name='completionDate'
                    label='data de conclusão'
                    type='date'
                    id='completionDate'/>

                <TextField
                    name='description'
                    label='descrição'
                    id='description'
                />
            </fieldset>

            <Button blockElement='task-form' variant='primary' type='submit'>
                criar tarefa
            </Button>
        </form>
    )
}

export {TaskForm}