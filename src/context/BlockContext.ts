import { createContext } from 'react'
import { IBlockContext } from './interface/IBlockContext'

const BlockContext = createContext<IBlockContext>({
	block: '',
	level: 0,
})

export { BlockContext }
