import { GET_TECHS, ADD_TECH, SET_LOADING, TECHS_ERROR } from '../actionTypes'

const techReducer = (state, action) => {
	switch (action.type) {
		case GET_TECHS:
			return {
				...state,
				techs: action.payload,
				loading: false
			}
		case ADD_TECH:
			return {
				...state,
				techs: [ ...state.techs, action.payload ],
				loading: false
			}
		case SET_LOADING:
			return {
				...state,
				loading: true
			}
		case TECHS_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			}
		default:
			return state
	}
}

export default techReducer
