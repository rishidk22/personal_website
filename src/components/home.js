import React, {Component} from 'react';
import '../App.css';

import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

const cursor  = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 500,
}

class Home extends Component {

    constructor() {
        super();
        this.state = {renderSecond: false}
    }

    setNext = () =>
        this.setState({renderSecond: true})


    render() {
        return (
            <div>
                <Typist className = 'home-header' startDelay = {500} cursor = {cursor} onTypingDone={this.setNext}>
                    rishi kalluri
                </Typist>
                <div>
                    {this.state.renderSecond ? (
                        <Typist className = 'home-content' startDelay = {1500} blink = {true} cursor = {cursor}>
                            B.E. Computer Engineering 2020, UIUC
                        </Typist>
                    ) : null
                    }
                </div>
            </div>
        );
    }
}

export default Home;