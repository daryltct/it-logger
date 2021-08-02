import React, { createContext, useReducer, useContext } from 'react'
import axios from 'axios'

import logReducer from './logReducer'
import { GET_LOGS, SET_LOADING, LOGS_ERROR } from '../actionTypes'

const LogContext = createContext()

// CUSTOM HOOK
export const useLog = () => {
	const { logState, logDispatch } = useContext(LogContext)
	return [ logState, logDispatch ]
}

// CONTEXT PROVIDER
const LogContextProvider = (props) => {
	const initialState = {
		logs: null,
		current: null,
		loading: false,
		error: null
	}

	const [ logState, logDispatch ] = useReducer(logReducer, initialState)

	return <LogContext.Provider value={{ logState, logDispatch }}>{props.children}</LogContext.Provider>
}

export default LogContextProvider

// ACTION CREATORS

// Get logs from server
export const getLogs = async (dispatch) => {
	try {
		setLoading(dispatch)

		const res = await axios.get('/logs')
		dispatch({ type: GET_LOGS, payload: res.data })
	} catch (err) {
		logsError(dispatch, err.response.statusText)
	}
}

// Set loading
export const setLoading = (dispatch) => {
	dispatch({ type: SET_LOADING })
}

// Logs error
export const logsError = (dispatch, errorMsg) => {
	dispatch({ type: LOGS_ERROR, payload: errorMsg })
}
