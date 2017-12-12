import React from 'react'
import { Router } from 'react-static'


import 'particles.js';
import particlejsConfig from './particlesjs-config';
const particlejsConfigUri = "data:text/plain;base64,"+window.btoa(JSON.stringify(particlejsConfig));
//
import Routes from 'react-static-routes'

import Nav from './components/Nav';

import './app.css'

export default class App extends React.Component {
    componentDidMount() {
        particlesJS.load('particles-js', particlejsConfigUri, function() {
            console.log('callback - particles.js config loaded');
        });
    }

    render() {
        return (
            <Router>
                <div  className="app">
                    <Nav/>
                    <div className="content" id="particles-js">
                        <Routes />
                    </div>
                </div>
            </Router>
        );
    }
};
