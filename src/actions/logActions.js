import axios from 'axios'
import { GET_LOGS, ADD_LOG, DELETE_LOG, UPDATE_LOG, SET_LOADING, LOGS_ERROR, SET_CURRENT, CLEAR_CURRENT } from './types'

// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading()
//         const res = await axios.get('/logs')

//         dispatch({
//             type: GET_LOGS,
//             payload: res.data
//         })
//     }
// }

// Get logs from server
export const getLogs = () => async (dispatch) => {
	try {
		setLoading()

		const res = await axios.get('/logs')
		dispatch({
			type: GET_LOGS,
			payload: res.data
		})
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		})
	}
}

// Add new log to server
export const addLog = (log) => async (dispatch) => {
	try {
		setLoading()

		const res = await axios.post('/logs', log)
		dispatch({
			type: ADD_LOG,
			payload: res.data
		})
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		})
	}
}

// Delete existing log
export const deleteLog = (id) => async (dispatch) => {
	try {
		setLoading()

		await axios.delete(`/logs/${id}`)
		dispatch({
			type: DELETE_LOG,
			payload: id
		})
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		})
	}
}

// Update log on server
export const updateLog = (log) => async (dispatch) => {
	try {
		setLoading()

		const res = await axios.put(`/logs/${log.id}`, log)
		dispatch({
			type: UPDATE_LOG,
			payload: res.data
		})
	} catch (err) {
		console.log(err)
		// dispatch({
		// 	type: LOGS_ERROR,
		// 	payload: err.response.data
		// })
	}
}

// Set current log
export const setCurrent = (log) => {
	return {
		type: SET_CURRENT,
		payload: log
	}
}

// Clear current log
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT
	}
}

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING
	}
}
