import React, { Component } from 'react';
import MainLayout from '../../../layouts/default';

import './index.css';

class Presentation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainLayout>
                <div id="presentation">
                    <div id="content">
                        <img id='logo' alt='Jen Digital Vision & Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo.png' />
                    </div>
                    <div id="menu">
                        <a id="news" href='/actualities' rel="noopener noreferrer">
                            <img src='https://storage.googleapis.com/jendigitalvision/commun/logo/innovation.png' />
                            Actualités
                        </a>
                        <a id="ambitions" href='/ambitions' rel="noopener noreferrer">
                            <img src='https://storage.googleapis.com/jendigitalvision/commun/logo/ambition.png' />
                            Ambitions
                        </a>
                        <a id="contact" href='/contactme' rel="noopener noreferrer">
                            <img src='https://storage.googleapis.com/jendigitalvision/commun/logo/contact.png' />
                            Contactez-moi
                        </a>
                        <a id="missions" href='/missions' rel="noopener noreferrer">
                            <img src='https://storage.googleapis.com/jendigitalvision/commun/logo/missionsdone.png' />
                            Missions
                        </a>
                        <a id="references" href='/references' rel="noopener noreferrer">
                            <img src='https://storage.googleapis.com/jendigitalvision/commun/logo/evaluation.png' />
                            References
                        </a>
                        <a className='language'>
                            <img alt='English' src='https://storage.googleapis.com/jendigitalvision/commun/usa.png' />
                            English
                        </a>
                        <a id="company" href='/digitalvisionandco' rel="noopener noreferrer">
                            <img src='https://storage.googleapis.com/jendigitalvision/commun/logo/company.png' />
                            Digital Vision &#38; Co
                        </a>
                        <a className='responsive'>
                            <img alt='Digital Vision & Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo/respdesign.png' />
                            Portfolio
                        </a>
                    </div>
                </div>
            </ MainLayout>
        )
    }
}

export default Presentation;
