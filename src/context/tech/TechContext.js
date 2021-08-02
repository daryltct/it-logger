import React, { createContext, useContext, useReducer } from 'react'

import techReducer from './techReducer'

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
