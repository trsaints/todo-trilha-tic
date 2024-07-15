import {Button} from '../Button'

import {ITaskCard} from './ITaskCard'
import './TaskCard.css'

function TaskCardMenu() {
    return (
        <menu className='task__menu'>
            <li>
                <Button blockElement='task'
                        variant='secondary'
                        type='button'
                        data-action='delete'>
                    Excluir
                </Button>
            </li>

            <li>
                <Button
                    blockElement='task'
                    variant='secondary'
                    type='button'
                    data-action='edit'>
                    Editar
                </Button>
            </li>
        </menu>
    )   
}

function TaskCard(props: ITaskCard) {
    const {isEditable, task} = props
    const priotityTranslation = {
        low: 'Baixa',
        medium: 'Média',
        high: 'Alta',
    }

    return (
        <details className='task'>
            <summary className='task__title'>{task.title}</summary>

            <ul className='task__meta'>
                <li>Prioridade: {priotityTranslation[task.priority]}</li>
                <li>Expira em: {task.completionDate.toLocaleDateString()}</li>
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
