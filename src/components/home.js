import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

const cursor1  = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 500,
}

const cursor2  = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: false,
    hideWhenDoneDelay: 500,
}


class Home extends Component {

    constructor() {
        super();
        this.state = {renderFirst: true, renderSecond: false}
    }

    setNext = () =>
        this.setState({renderSecond: true})


    render() {
        return (
            <div className="home">
                <Typist className = 'home-header' startDelay = {500} cursor = {cursor1} onTypingDone={this.setNext}>
                    rishi kalluri
                </Typist>
                <div>
                    {this.state.renderSecond ? (
                        <Typist className = 'home-content' startDelay = {1500} blink = {true} cursor = {cursor2}>
                            B.E. Computer Engineering 2020, UIUC
                            <Typist.Delay ms={1000}/>
                            <br />
                            <br />
                            ./work
                            <br />
                            <Link to='/projects'>./projects</Link>
                            <br />
                            <Link to="/resume">./resume</Link>
                            <br />
                            ./skills
                            <br />
                            ./about
                        </Typist>
                    ) : null
                    }
                </div>
            </div>
        );
    }
}

export default Home;