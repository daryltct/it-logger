import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import './App.css'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddButton from './components/layout/AddButton'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/tech/AddTechModal'
import TechListModal from './components/tech/TechListModal'
import LogContextProvider from './context/log/LogContext'
import TechContextProvider from './context/tech/TechContext'

const App = () => {
	useEffect(() => {
		M.AutoInit() // initialize Materialize
	})

	return (
		<TechContextProvider>
			<LogContextProvider>
				<SearchBar />
				<div className="container">
					<Logs />
					<AddButton />
					<AddLogModal />
					<EditLogModal />
					<AddTechModal />
					<TechListModal />
				</div>
			</LogContextProvider>
		</TechContextProvider>
	)
}

export default App
