import React from 'react';
import logo from './logo.svg';
import time from './time.svg';
import './Heart.css';

class Heart extends React.Component {
    constructor(props) {
        super(props)
        this.state = { pulse: false }
    }

    render(){
        return(
            <div className="header">
                <h1>Website in development. Please be patient I work full time</h1>
                <div className="heart"> </div>
            </div>
        );
    }
}

export default Heart;
