import {
	GET_LOGS,
	ADD_LOG,
	DELETE_LOG,
	UPDATE_LOG,
	SEARCH_LOGS,
	SET_CURRENT,
	SET_LOADING,
	LOGS_ERROR
} from '../actionTypes'

const logReducer = (state, action) => {
	switch (action.type) {
		case GET_LOGS:
			return {
				...state,
				logs: action.payload,
				loading: false
			}
		case ADD_LOG:
			return {
				...state,
				logs: [ ...state.logs, action.payload ],
				loading: false
			}
		case DELETE_LOG:
			return {
				...state,
				logs: state.logs.filter((log) => action.payload !== log.id),
				loading: false
			}
		case UPDATE_LOG:
			return {
				...state,
				logs: state.logs.map((log) => (log.id === action.payload.id ? action.payload : log)),
				loading: false
			}
		case SEARCH_LOGS:
			return {
				...state,
				logs: action.payload,
				loading: false
			}
		case SET_CURRENT:
			return {
				...state,
				current: action.payload
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
