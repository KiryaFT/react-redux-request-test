import React from 'react'
import {clearUsers, fetchUsers} from '../redux/actions'
import {useDispatch} from 'react-redux'

export default function FetchUsers() {
    const dispatch = useDispatch()

    return (
        <div>
            <button className='btn btn-primary m-2' onClick={() => dispatch(fetchUsers())}>Request</button>
            <button className='btn btn-primary m-2' onClick={() => dispatch(clearUsers())}>Clear</button>
        </div>
    )
}

