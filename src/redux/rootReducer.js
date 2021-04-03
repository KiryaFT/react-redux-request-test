import {FETCH_USERS, CLEAR_USERS} from './types'

const initialState = {
    users: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { users: action.payload }
        case CLEAR_USERS:
            return { users: [] }
        default: return state
    }
}