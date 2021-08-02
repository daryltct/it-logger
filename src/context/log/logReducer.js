import { GET_LOGS, SET_LOADING, LOGS_ERROR } from '../actionTypes'

const logReducer = (state, action) => {
	switch (action.type) {
		case GET_LOGS:
			return {
				...state,
				logs: action.payload,
				loading: false
			}
		case SET_LOADING:
			return {
				...state,
				loading: true
			}
		case LOGS_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			}
		default:
			return
	}
}

export default logReducer
