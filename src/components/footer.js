import React, {Component} from 'react';
import '../App.css';
import { GoFilePdf } from "react-icons/go";

import {FiGithub, FiLinkedin} from 'react-icons/fi'


class Footer extends Component {

    render() {
        return (
            <div className="center">
              <a href="https://github.com/rishidk22/"><FiGithub/></a>
              <a href="https://www.linkedin.com/in/rishi-kalluri/"><FiLinkedin/></a>
            </div>
        );
    }
}

export default Footer;
