import React, { useEffect } from 'react'

import { useTech, getTechs } from '../../context/tech/TechContext'
import TechItem from './TechItem'

const TechListModal = () => {
	const [ techState, techDispatch ] = useTech()
	const { techs, loading } = techState

	useEffect(
		() => {
			getTechs(techDispatch)
		},
		[ techDispatch ]
	)

	return (
		<div id="tech-list-modal" className="modal">
			<div className="modal-content">
				<h4>Technician List</h4>
				<ul className="collection">
					{!loading && techs && techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
				</ul>
			</div>
		</div>
	)
}

export default TechListModal
