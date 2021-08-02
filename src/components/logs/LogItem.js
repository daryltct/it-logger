import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

import { useLog, deleteLog } from '../../context/log/LogContext'

const LogItem = ({ log }) => {
	const [ , logDispatch ] = useLog()

	const onDelete = () => {
		deleteLog(logDispatch, log.id)
	}

	return (
		<li className="collection-item">
			<div>
				<a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'black-text'}`}>
					{log.message}
				</a>
				<br />
				<span className="grey-text">
					Last updated by: <span className="grey-text text-darken-3">{log.tech}</span> on{' '}
					<Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
				</span>
				<a href="#!" className="secondary-content" onClick={onDelete}>
					<i className="material-icons grey-text">delete</i>
				</a>
			</div>
		</li>
	)
}

LogItem.propTypes = {
	log: PropTypes.object.isRequired
}

export default LogItem
