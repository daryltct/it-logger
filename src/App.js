import React, { Fragment, useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import './App.css'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/Logs'
import AddButton from './components/layout/AddButton'
import AddLogModal from './components/AddLogModal'
import EditLogModal from './components/EditLogModal'

const App = () => {
	useEffect(() => {
		M.AutoInit() // initialize Materialize
	})

	return (
		<Fragment>
			<SearchBar />
			<div className="container">
				<Logs />
				<AddButton />
				<AddLogModal />
				<EditLogModal />
			</div>
		</Fragment>
	)
}

export default App
