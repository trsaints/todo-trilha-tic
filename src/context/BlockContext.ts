import { createContext } from 'react'
import { IBlockContext } from './interface/IBlockContext'

const BlockContext = createContext<IBlockContext>({
	name: '',
	level: 1,
})

export { BlockContext }
