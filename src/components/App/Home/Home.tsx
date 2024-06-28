import { Content } from '../../Content'
import { Heading } from '../../Heading'
import { Section } from '../../Section'

function Root() {
    return (
        <Section.Root block="home">
            <Heading.Root>Início</Heading.Root>

            <Content.Root>
                <Heading.Root>Opções</Heading.Root>
            </Content.Root>
        </Section.Root>
    )
}

export const Home = {
    Root,
}
