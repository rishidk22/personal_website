import React, {Component} from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import {Link} from 'react-router-dom';
import { FaBars, FaAngleUp, FaHome } from 'react-icons/fa';
import styled from 'styled-components';
import '../App.css';

const Menu = styled.div`

    border-bottom: 2px solid White;
    
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



class Navi extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <ResponsiveMenu
                    menuOpenButton={<FaBars size={30}/>}
                    menuCloseButton={<FaAngleUp size={30}/>}
                    menu={
                        <div>
                            <Menu className='text-right'>
                                <ul>
                                    <li>
                                        <Link to='/'>~home</Link>
                                    </li>
                                    <li>
                                        <Link to='/experience'>~experience</Link>
                                    </li>
                                    <li>
                                        <Link to='/projects'>~projects</Link>
                                    </li>
                                    <li>
                                        <Link to='/resume'>~resume</Link>
                                    </li>
                                    <li>
                                        <Link to='/about'>~about</Link>
                                    </li>
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