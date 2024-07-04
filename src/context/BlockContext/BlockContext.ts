import { createContext } from 'react'
import { IBlockContext } from './IBlockContext'

const BlockContext = createContext<IBlockContext>({
	name: '',
	level: 1,
})

export { BlockContext }
