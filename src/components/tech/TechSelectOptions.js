import React from 'react'

import { useTech } from '../../context/tech/TechContext'

const TechSelectOptions = () => {
	const [ { techs, loading } ] = useTech()

	return (
		!loading &&
		techs &&
		techs.map((tech) => (
			<option
				key={tech.id}
				value={`${tech.firstName} ${tech.lastName}`}
			>{`${tech.firstName} ${tech.lastName}`}</option>
		))
	)
}

export default TechSelectOptions
