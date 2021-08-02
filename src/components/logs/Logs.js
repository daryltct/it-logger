import React, { useEffect } from 'react'

import { useLog, getLogs } from '../../context/log/LogContext'
import LogItem from './LogItem'
import Loader from '../layout/Loader'

const Logs = () => {
	const [ logState, logDispatch ] = useLog()
	const { logs, loading } = logState

	useEffect(
		() => {
			getLogs(logDispatch)
		},
		[ logDispatch ]
	)

	if (loading || !logs) {
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
