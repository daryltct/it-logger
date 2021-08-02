import React, { useEffect } from 'react'

import { useLog, getLogs } from '../../context/log/LogContext'
import { useTech, getTechs } from '../../context/tech/TechContext'
import LogItem from './LogItem'
import Loader from '../layout/Loader'

const Logs = () => {
	const [ { logs, loading: logsLoading }, logDispatch ] = useLog()
	const [ { loading: techsLoading }, techDispatch ] = useTech()

	useEffect(
		() => {
			getLogs(logDispatch)
			getTechs(techDispatch)
		},
		[ logDispatch, techDispatch ]
	)

	if (logsLoading || techsLoading || !logs) {
		return <Loader />
	}

	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">System Logs</h4>
			</li>
			{!logsLoading && logs.length === 0 ? (
				<p className="center">No Logs</p>
			) : (
				logs.map((log) => <LogItem log={log} key={log.id} />)
			)}
		</ul>
	)
}

export default Logs
