import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './components/home'
import Resume from './components/resume'
import Projects from './components/projects'
import Work from './components/work'
import Experience from './components/experience'

import Particle from './components/particles'


export default (
    <div>
        <Particle/>
        <Switch>
            <Route component = {Home} exact path = "/"/>
            <Route component = {Home} exact path = "/personal_website" />
            <Route component = {Projects} exact path = '/personal_website/projects'/>
            <Route component = {Experience} exact path = '/personal_website/experience'/>
        </Switch>


    </div>
)
