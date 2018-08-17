import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './components/home'
import Resume from './components/resume'
import Projects from './components/projects'
import Work from './components/work'

export default (
    <div>
        <Switch>
            <Route component = {Home} exact path = "/personal_website" />
            <Route component = {Resume} exact path = "/personal_website/resume"/>
            <Route component = {Projects} exact path = '/personal_website/projects'/>
            <Route component = {Work} exact path = '/personal_website/experience'/>
        </Switch>
    </div>
)