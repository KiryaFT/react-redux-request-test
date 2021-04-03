import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UsersInfo from './components/UsersInfo'
import FetchUsers from './components/FetchUsers'
import NavBar from './components/NavBar'

export default function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <NavBar/>
            <Switch>
                <Route exact path='/'>
                    <FetchUsers/>
                </Route>
                <Route path='/usersInfo'>
                    <UsersInfo/>
                </Route>
            </Switch>
        </Router>
    )
}

