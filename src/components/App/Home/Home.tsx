import { Heading } from '../../Heading'
import { Section } from '../../Section'

function Root() {
    return (
        <Section.Root block="home">
            <Heading.Root>Home</Heading.Root>
        </Section.Root>
    )
}

export const Home = {
    Root,
}
