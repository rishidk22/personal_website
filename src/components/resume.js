import React, {Component} from 'react';
import '../App.css';
import { Document, Page, Outline } from 'react-pdf/dist/entry.webpack';
import resume from '../Resume.pdf';

class Resume extends Component {

    constructor() {
        super();
        this.state = {
            numPages: 1,
            pageNumber: 1,
        }
    }

    render() {
        return (
          <div className="center">
            <Document
                file={"../Resume.pdf"}
             >
                <Page width={1735} pageNumber={this.state.pageNumber} scale={2}/>
            </Document>
          </div>
        )

    }
}

export default Resume;
