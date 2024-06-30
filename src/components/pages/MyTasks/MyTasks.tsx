import { Heading } from '../../Heading'
import { Section } from '../../Section'

function Root() {
    return (
        <Section.Root block="my-tasks">
            <Heading.Root>My Tasks</Heading.Root>
        </Section.Root>
    )
}

export const MyTasks = {
    Root,
}
