import React, { useRef } from 'react'

import { useLog, searchLogs } from '../../context/log/LogContext'

const SearchBar = () => {
	const [ , logDispatch ] = useLog()

	const query = useRef('')

	const onChange = () => {
		searchLogs(logDispatch, query.current.value)
	}

	return (
		<nav style={{ marginBottom: '30px' }} className="blue-grey darken-4">
			<div className="nav-wrapper">
				<form>
					<div className="input-field">
						<input id="search" type="search" placeholder="Search Logs..." ref={query} onChange={onChange} />
						<label className="label-icon" htmlFor="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons">close</i>
					</div>
				</form>
			</div>
		</nav>
	)
}

export default SearchBar
