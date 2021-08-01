import axios from 'axios'
import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR } from './types'

// Get techs
// Get logs from server
export const getTechs = () => async (dispatch) => {
	try {
		setLoading()

		const res = await axios.get('/techs')
		dispatch({
			type: GET_TECHS,
			payload: res.data
		})
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
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
