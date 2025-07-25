import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './app/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
<React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
</React.StrictMode>
)
