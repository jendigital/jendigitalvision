import React, { Component } from 'react';
//import { Icon } from 'react-fa';
import './index.css';

class Menu extends Component {
    render() {
        return (
            <div id='header'>
                <a href='https://github.com/jendigital/' target='_blank' rel="noopener noreferrer">
                    Github
                </a>
                <a href='https://www.facebook.com/jendigitalvision' target='_blank' rel="noopener noreferrer">
                    Facebook
                </a>
                <a href='https://twitter.com/_jendigital_' target='_blank' rel="noopener noreferrer">
                    Twitter
                </a>
                <a href='https://stackoverflow.com/' target='_blank' rel="noopener noreferrer">
                    Stackoverflow
                </a>
                <a href='https://github.com/jendigital/jendigitalvision' target='_blank' rel="noopener noreferrer">
                    Website Stack
                </a>
            </div>
        );
    }
}

export default Menu;
