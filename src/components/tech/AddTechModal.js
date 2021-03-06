import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'

import { addTech } from '../../actions/techActions'

const AddTechModal = ({ addTech }) => {
	const [ formDetails, setFormDetails ] = useState({
		firstName: '',
		lastName: ''
	})
	const { firstName, lastName } = formDetails

	const inputChange = (e) => {
		const { name, value } = e.target
		setFormDetails((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (!firstName || !lastName) {
			M.toast({ html: 'Please enter a first and last name' })
		} else {
			addTech(formDetails)
			M.toast({ html: 'New technician added' })

			// Clear input fields
			setFormDetails({
				firstName: '',
				lastName: ''
			})
		}
	}

	return (
		<div id="tech-modal" className="modal">
			<div className="modal-content">
				<h4>New Technician</h4>
				{/* First Name Input */}
				<div className="row">
					<div className="input-field">
						<input type="text" name="firstName" value={firstName} onChange={inputChange} />
						<label htmlFor="firstName" className="active">
							First Name
						</label>
					</div>
				</div>
				{/* Last Name Input */}
				<div className="row">
					<div className="input-field">
						<input type="text" name="lastName" value={lastName} onChange={inputChange} />
						<label htmlFor="lastName" className="active">
							Last Name
						</label>
					</div>
				</div>
			</div>
			<div className="modal-footer" style={{ textAlign: 'center' }}>
				<a
					href="!#"
					onClick={onSubmit}
					className="modal-close waves-effect waves-light blue-grey darken-4 btn"
					style={{ width: '50%' }}
				>
					Submit
				</a>
			</div>
		</div>
	)
}

AddTechModal.propTypes = {
	addTech: PropTypes.func.isRequired
}

export default connect(null, { addTech })(AddTechModal)
