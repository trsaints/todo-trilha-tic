import {Button, TextField} from '../../components'

import {ITaskForm} from './ITaskForm.ts'
import './TaskForm.css'

function TaskForm(props: ITaskForm) {
    const {onHandleSubmit, onHandleChange} = props

    return (
        <form className='task-form' onChange={onHandleChange} onSubmit={onHandleSubmit}>
            <fieldset className='task-form__fieldset'>
                <legend className='task-form__legend'>Nova Tarefa</legend>

                <TextField
                    name='title'
                    label='título'
                    type='text'
                    id='title'
                />

                <div className='text-field'>
                    <label className='text-field__label' htmlFor='priority'>Prioridade:</label>

                    <select className='text-input' name='priority' id='priority'>
                        <option value='low'>baixa</option>
                        <option value='medium'>média</option>
                        <option value='high'>alta</option>
                    </select>
                </div>

                <TextField
                    name='completionDate'
                    label='prazo'
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