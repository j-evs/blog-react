import React from 'react'

import IconGithub from './IconGithub';
import IconMail from './IconMail';

import './home.css';

export default () => (
    <div className="home">
        <div className="home__wrapper">
            <p className="home__name">Jan Evseev</p>
            <ul className="home__contacts">
                <li className="home__contact contact">
                    <a href="https://github.com/j-evs" aria-label="Jan github profile">
                        <IconGithub/>
                    </a>
                </li>
                <li className="home__contact contact">
                    <a href="mailto://jan.evseev@gmail.com" aria-label="Jan email">
                        <IconMail/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
);
