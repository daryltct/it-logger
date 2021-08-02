import React, { createContext, useReducer, useContext } from 'react'

import logReducer from './logReducer'

const LogContext = createContext()

// Custom hook
export const useLog = () => {
	const { logState, logDispatch } = useContext(LogContext)
	return [ logState, logDispatch ]
}

// Context provider
const LogContextProvider = (props) => {
	const initialState = {
		logs: null,
		current: null,
		loading: false,
		errors: null
	}

	const [ logState, logDispatch ] = useReducer(logReducer, initialState)

	return <LogContext.Provider value={{ logState, logDispatch }}>{props.children}</LogContext.Provider>
}

export default LogContextProvider
