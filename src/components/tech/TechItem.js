import React from 'react'
import PropTypes from 'prop-types'

import { useTech, deleteTech } from '../../context/tech/TechContext'

const TechItem = ({ tech }) => {
	const [ , techDispatch ] = useTech()

	const onDelete = () => {
		deleteTech(techDispatch, tech.id)
	}
	return (
		<li className="collection-item">
			<div>
				{tech.firstName} {tech.lastName}
				<a href="#!" className="secondary-content" onClick={onDelete}>
					<i className="material-icons grey-text">delete</i>
				</a>
			</div>
		</li>
	)
}

TechItem.propTypes = {
	tech: PropTypes.object.isRequired
}

export default TechItem
