import React, { useState, useEffect } from 'react'
import axios from 'axios'

import TechItem from './TechItem'

const TechListModal = () => {
	const [ techs, setTechs ] = useState([])
	const [ loading, setLoading ] = useState(false)

	useEffect(() => {
		getTechs()
	}, [])

	const getTechs = async () => {
		try {
			setLoading(true)
			const res = await axios.get('/techs')
			setTechs(res.data)
			setLoading(false)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div id="tech-list-modal" className="modal">
			<div className="modal-content">
				<h4>Technician List</h4>
				<ul className="collection">
					{!loading && techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
				</ul>
			</div>
		</div>
	)
}

export default TechListModal
