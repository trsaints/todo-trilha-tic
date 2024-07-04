import { createContext } from 'react'
import { IBlockContext } from './BlockContext/IBlockContext'

const BlockContext = createContext<IBlockContext>({
	name: '',
	level: 1,
})

export { BlockContext }
