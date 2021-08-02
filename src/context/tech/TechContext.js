import React, { createContext, useContext, useReducer } from 'react'
import axios from 'axios'

import techReducer from './techReducer'
import { GET_TECHS, ADD_TECH, SET_LOADING, TECHS_ERROR } from '../actionTypes'

const TechContext = createContext()

// CUSTOM HOOK
export const useTech = () => {
	const { techState, techDispatch } = useContext(TechContext)
	return [ techState, techDispatch ]
}

// CONTEXT PROVIDER
const TechContextProvider = (props) => {
	const initialState = {
		techs: null,
		loading: false,
		error: null
	}

	const [ techState, techDispatch ] = useReducer(techReducer, initialState)

	return <TechContext.Provider value={{ techState, techDispatch }}>{props.children}</TechContext.Provider>
}

export default TechContextProvider

// ACTION CREATORS

// Get techs from server
export const getTechs = async (dispatch) => {
	try {
		setLoading(dispatch)

		const res = await axios.get('/techs')
		dispatch({ type: GET_TECHS, payload: res.data })
	} catch (err) {
		techsError(dispatch, err.response.statusText)
	}
}

// Add tech to server
export const addTech = async (dispatch, tech) => {
	try {
		setLoading(dispatch)

		const res = await axios.post('/techs', tech)
		dispatch({ type: ADD_TECH, payload: res.data })
	} catch (err) {
		techsError(dispatch, err.response.statusText)
	}
}

// Set loading
export const setLoading = (dispatch) => {
	dispatch({ type: SET_LOADING })
}

// Logs error
export const techsError = (dispatch, errorMsg) => {
	dispatch({ type: TECHS_ERROR, payload: errorMsg })
}
