import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'

import { addLog } from '../../actions/logActions'
import TechSelectOptions from '../tech/TechSelectOptions'

const modalStyle = {
	width: '75%',
	height: '75%'
}

const AddLogModal = ({ addLog }) => {
	const [ formDetails, setFormDetails ] = useState({
		message: '',
		attention: false,
		tech: ''
	})
	const { message, attention, tech } = formDetails

	const inputChange = (e) => {
		const { name, value } = e.target
		setFormDetails((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (!message || !tech) {
			M.toast({ html: 'Please enter a message and technician' })
		} else {
			const newLog = {
				...formDetails,
				date: new Date()
			}

			addLog(newLog)
			M.toast({ html: `Log added by ${tech}` })

			// Clear input fields
			setFormDetails({
				message: '',
				attention: false,
				tech: ''
			})
		}
	}

	return (
		<div id="add-log-modal" className="modal" style={modalStyle}>
			<div className="modal-content">
				<h4>Enter System Log</h4>
				{/* Log Message Input */}
				<div className="row">
					<div className="input-field">
						<input type="text" name="message" value={message} onChange={inputChange} />
						<label htmlFor="message" className="active">
							Log Message
						</label>
					</div>
				</div>
				{/* Select Technician Input */}
				<div className="row">
					<div className="input-field">
						<select name="tech" value={tech} className="browser-default" onChange={inputChange}>
							<option value="" disabled>
								Select Technician
							</option>
							<TechSelectOptions />
						</select>
					</div>
				</div>
				{/* Requires Attention Input */}
				<div className="row">
					<div className="input-field">
						<p>
							<label>
								<input
									type="checkbox"
									name="attention"
									className="filled-in"
									checked={attention}
									value={attention}
									onChange={() =>
										setFormDetails((prevState) => ({
											...prevState,
											attention: !attention
										}))}
								/>
								<span>Requires Attention</span>
							</label>
						</p>
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

AddLogModal.propTypes = {
	addLog: PropTypes.func.isRequired
}

export default connect(null, { addLog })(AddLogModal)
