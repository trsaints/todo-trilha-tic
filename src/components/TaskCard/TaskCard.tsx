import {Button} from '../Button'

import {ITaskCard} from './ITaskCard'

function TaskCard(props: ITaskCard) {
    const {isEditable, task} = props

    return (
        <details className='task'>
            <summary className='task__title'>{task.title}</summary>

            <ul className='task__meta'>
                <li>Prioridade: {task.priority}</li>
                <li>Expira em: {task.completionDate.toLocaleDateString()}</li>
                <li>Criado em: {task.creationDate.toLocaleDateString()}</li>
            </ul>

            <p className='task__description'>{task.description}</p>

            {isEditable && (
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
            )}
        </details>
    )
}

export {TaskCard}
