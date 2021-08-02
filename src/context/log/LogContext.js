import React, { createContext, useReducer, useContext } from 'react'
import axios from 'axios'

import logReducer from './logReducer'
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

// Add log to server
export const addLog = async (dispatch, log) => {
	try {
		setLoading(dispatch)

		const res = await axios.post('/logs', log)
		dispatch({ type: ADD_LOG, payload: res.data })
	} catch (err) {
		dispatch({ type: LOGS_ERROR, payload: err.response.statusText })
	}
}

// Delete log from server
export const deleteLog = async (dispatch, logId) => {
	try {
		setLoading(dispatch)

		await axios.delete(`/logs/${logId}`)
		dispatch({ type: DELETE_LOG, payload: logId })
	} catch (err) {
		dispatch({ type: LOGS_ERROR, payload: err.response.statusText })
	}
}

// Update log on server
export const updateLog = async (dispatch, log) => {
	try {
		setLoading(dispatch)

		const res = await axios.put(`/logs/${log.id}`, log)
		dispatch({ type: UPDATE_LOG, payload: res.data })
	} catch (err) {
		dispatch({ type: LOGS_ERROR, payload: err.response.statusText })
	}
}

// Search logs based on query
export const searchLogs = async (dispatch, query) => {
	try {
		setLoading(dispatch)

		const res = await axios.get(`/logs/?q=${query}`)
		dispatch({ type: SEARCH_LOGS, payload: res.data })
	} catch (err) {
		dispatch({ type: LOGS_ERROR, payload: err.response.statusText })
	}
}

// Set current log
export const setCurrent = (dispatch, log) => {
	dispatch({ type: SET_CURRENT, payload: log })
}

// Set loading
export const setLoading = (dispatch) => {
	dispatch({ type: SET_LOADING })
}

// Logs error
export const logsError = (dispatch, errorMsg) => {
	dispatch({ type: LOGS_ERROR, payload: errorMsg })
}
