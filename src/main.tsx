import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './components'

import './reset.css'
import './palette.css'
import './units.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
