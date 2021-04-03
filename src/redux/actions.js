import {CLEAR_USERS, FETCH_USERS} from './types'

export function fetchUsers() {
    return async dispatch => {
        try {
            const response = await fetch('https://reqres.in/api/users')
            const json = await response.json()
            dispatch({ type: FETCH_USERS, payload: json })
        } catch (error) {
            console.log(error)
        }
    }
}

export function clearUsers() {
    return {
        type: CLEAR_USERS
    }
}