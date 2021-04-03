import React from 'react'
import {useSelector} from 'react-redux'

export default function UsersInfo() {
    const users = useSelector(state => state.users)

    return (
        <p>{JSON.stringify(users.data)}</p>
    )
}
