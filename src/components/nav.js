import React, {Component} from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import {Link} from 'react-router-dom';
import { FaBars, FaAngleUp, FaHome } from 'react-icons/fa';


import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

import styled from 'styled-components';
import '../App.css';

import {FiGithub, FiLinkedin, FiFileText, FiUser, FiHome, FiBriefcase, FiTerminal} from 'react-icons/fi'

const Menu = styled.div`

    ul {
        padding: 0;
    }

    li {
        display: inline;
        font-size= 10px;
        list-style-type: none;
        margin-left: 30px;
    }

    a {
        text-decoration: none;
        text-transform: lowercase;
        font-size: 20px;
        color: White;

        &:hover {
            color: blue;
        }
    }

    @media (max-width: 500px) {
        padding: 10px 0;
        li{
            padding: 10px 0;
            display: block;
            margin-left: 0;
        }
    }
    `;


const cursor1  = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: false,
}

class Navi extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="navbar">
            <Typist cursor = {cursor1} onTypingDone={this.setNext}>
              <h>rishi kalluri</h>
            </Typist>
                <ResponsiveMenu
                    menuOpenButton={<FaBars size={30}/>}
                    menuCloseButton={<FaAngleUp size={30}/>}
                    menu={
                        <div>
                            <Menu className='text-right'>
                                <ul>
                                <Link to='/personal_website/'><FiHome size={32}/></Link> <li></li>
                                <Link to='/personal_website/projects'><FiTerminal size={32}/></Link> <li></li>
                                <Link to='/personal_website/experience'><FiBriefcase size={32}/></Link> <li></li>
                                <a href="https://drive.google.com/file/d/1CiHQmu4CJ5Z_0LjK1GxhuoF3Yp1SMJoL/view?usp=sharing">
                                  <FiFileText size={32}/>
                                </a>  <li></li>
                                <a href="https://github.com/rishidk22/"><FiGithub size={32}/></a>  <li></li>
                                <a href="https://www.linkedin.com/in/rishi-kalluri/"><FiLinkedin size={32}/></a>


                                </ul>
                            </Menu>

                        </div>
                    }
                />
              </div>

        )
    }

}

export default Navi;
