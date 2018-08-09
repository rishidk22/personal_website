import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './components/home'
import Resume from './components/resume'
import Projects from './components/projects'
import Work from './components/work'

export default (
    <div>
        <Switch>
            <Route component = {Home} exact path = "/" />
            <Route component = {Resume} exact path = "/resume"/>
            <Route component = {Projects} exact path = '/projects'/>
            <Route component = {Work} exact path = '/work'/>
        </Switch>
    </div>
)