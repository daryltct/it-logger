import React, { useState, useEffect } from 'react'
import axios from 'axios'

import LogItem from './LogItem'
import Loader from '../layout/Loader'

const Logs = () => {
	const [ logs, setLogs ] = useState([])
	const [ loading, setLoading ] = useState(false)

	useEffect(() => {
		getLogs()
	}, [])

	const getLogs = async () => {
		try {
			setLoading(true)
			const res = await axios.get('/logs')
			setLogs(res.data)
			setLoading(false)
		} catch (err) {
			console.log(err)
		}
	}

	if (loading) {
		return <Loader />
	}

	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className="center">No Logs</p>
			) : (
				logs.map((log) => <LogItem log={log} key={log.id} />)
			)}
		</ul>
	)
}

export default Logs
