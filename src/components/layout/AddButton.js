import React from 'react'

const AddButton = () => {
	return (
		<div className="fixed-action-btn">
			<a href="#add-log-modal" className="btn-floating btn-large blue-grey darken-4 modal-trigger">
				<i className="large material-icons">add</i>
			</a>
			<ul>
				<li>
					<a href="#tech-list-modal" className="btn-floating blue-grey lighten-2 modal-trigger">
						<i className="material-icons">groups</i>
					</a>
				</li>
				<li>
					<a href="#tech-modal" className="btn-floating blue-grey modal-trigger">
						<i className="material-icons">person_add</i>
					</a>
				</li>
			</ul>
		</div>
	)
}

export default AddButton
