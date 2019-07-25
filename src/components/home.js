import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

import Footer from './footer'

import { GoFilePdf } from "react-icons/go";


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
                    hi, there!
                </Typist>
                <div style={{color:'#FFD42C'}}>
                    {this.state.renderSecond ? (
                        <Typist className = 'home-content' blink = {true} cursor = {cursor2}>
                            my name is rishi, welcome!
                            <br />
                        </Typist>
                    ) : null
                    }
                </div>
            </div>
        );
    }
}

export default Home;
