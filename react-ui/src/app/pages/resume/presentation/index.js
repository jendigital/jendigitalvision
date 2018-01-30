import React, { Component } from 'react';
import MainLayout from '../../../layouts/default';

import './index.css';

export default class Presentation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainLayout>
                <div id="presentation">
                    <div className="content">
                        <img className='logo' alt='Jen Digital Vision &#38; Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo.png' />
                    </div>
                    <div id="menu">
                        <a id="actuality_button" href='/actuality' rel="noopener noreferrer">
                            <img src='https://storage.googleapis.com/jendigitalvision/commun/logo/innovation.png' />
                            Actualités
                        </a>
                        <a id="ambitions_button" href='/ambitions' rel="noopener noreferrer">
                            <img src='https://storage.googleapis.com/jendigitalvision/commun/logo/ambition.png' />
                            Ambitions
                        </a>
                        <a id="contact_button" href='/contact' rel="noopener noreferrer">
                            <img src='https://storage.googleapis.com/jendigitalvision/commun/logo/contact.png' />
                            Contactez-moi
                        </a>
                        <a id="missions_button" href='/missions' rel="noopener noreferrer">
                            <img src='https://storage.googleapis.com/jendigitalvision/commun/logo/missionsdone.png' />
                            Missions
                        </a>
                        <a id="references_button" href='/references' rel="noopener noreferrer">
                            <img src='https://storage.googleapis.com/jendigitalvision/commun/logo/evaluation.png' />
                            References
                        </a>
                        <a className='language'>
                            <img alt='English' src='https://storage.googleapis.com/jendigitalvision/commun/usa.png' />
                            English
                        </a>
                        <a id="company_button" href='/company' rel="noopener noreferrer">
                            <img alt='Digital Vision &#38; Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo/company.png' />
                            Digital Vision &#38; Co
                        </a>
                        <a className='responsive_button' href='/technology'>
                            <img alt='Portfolio' src='https://storage.googleapis.com/jendigitalvision/commun/logo/respdesign.png' />
                            Portfolio
                        </a>
                    </div>
                </div>
            </ MainLayout>
        )
    }
}