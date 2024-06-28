import { createContext } from 'react'
import ISectionContext from './interface/ISectionContext'

const SectionContext = createContext<ISectionContext>({
    block: '',
    level: 0
})

export { SectionContext }
