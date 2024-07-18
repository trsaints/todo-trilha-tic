import {Button} from '../Button'

import {ITaskCard} from './ITaskCard'
import './TaskCard.css'
import {dateUtils} from '../../utils/date-utils.ts'

function TaskCardMenu() {
    return (
        <menu className='task__menu'>
            <li>
                <Button blockElement='task'
                        variant='secondary'
                        type='button'
                        action='delete'
                        >
                    Excluir
                </Button>
            </li>

            <li>
                <Button
                    blockElement='task'
                    variant='secondary'
                    type='button'
                    action='edit'
                    >
                    Editar
                </Button>
            </li>
        </menu>
    )   
}

function TaskCard(props: ITaskCard) {
    const {isEditable, task} = props
    const priorityTranslation = {
        low: 'Baixa',
        medium: 'Média',
        high: 'Alta',
    }
    
    const adjustedDatetime = dateUtils.adjustDateForDisplay(task.completionDate)

    return (
        <details className='task' data-task-id={task.id}>
            <summary className='task__title'>{task.title}</summary>

            <ul className='task__meta'>
                <li>Prioridade: {priorityTranslation[task.priority]}</li>
                <li>Expira em: {adjustedDatetime.toLocaleDateString()}</li>
                <li>Criado em: {task.creationDate.toLocaleDateString()}</li>
            </ul>

            <p className='task__description'>
                Descrição:
                <br/>
                {task.description}
            </p>

            {isEditable && <TaskCardMenu />}
        </details>
    )
}

export {TaskCard}
