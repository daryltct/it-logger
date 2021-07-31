import axios from 'axios'
import { GET_LOGS, ADD_LOG, SET_LOADING, LOGS_ERROR } from './types'

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

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING
	}
}
