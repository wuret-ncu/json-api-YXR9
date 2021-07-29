import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import ToDoList from './components/ToDoList';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path = "/">
                    <LogIn />
                </Route>
                <Route path = "/signup">
                    <SignUp />
                </Route>
                <Route path = "/todolist">
                    <ToDoList />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;