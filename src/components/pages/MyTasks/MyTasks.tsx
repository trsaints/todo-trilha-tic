import { Button } from '../../Button'
import { Heading } from '../../Heading'
import { Section } from '../../Section'
import { TaskForm } from '../../TaskForm'

function Root() {
    return (
        <Section.Root block="my-tasks">
            <Heading.Root>minhas tarefas</Heading.Root>

            <Button.Root variant="primary" type="button">criar tarefa</Button.Root>
            <TaskForm.Root />
        </Section.Root>
    )
}

export const MyTasks = {
    Root,
}
