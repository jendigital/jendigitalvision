import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import MainLayout from '../../layouts/default';

import './index.css';

export default class Presentation extends Component {
    render() {
        return (
            <MainLayout>
                <div id="presentation">
                    <div className="content">
                        <img className='logo' alt='Jen Digital Vision &#38; Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo-black-and-white.png' />                 
                    </div>
                    <div id="menu">
                        <Link id="actuality_button" to='/actuality' >
                            <img alt='actuality' src='https://storage.googleapis.com/jendigitalvision/commun/logo/innovation.png' />
                            <FormattedMessage id="presentation.news" />
                        </Link>
                        <Link id="ambitions_button" to='/ambitions'>
                            <img alt='ambitions' src='https://storage.googleapis.com/jendigitalvision/commun/logo/ambition.png' />
                            Ambitions
                        </Link>
                        <Link id="contact_button" to='/contact'>
                            <img alt='contact' src='https://storage.googleapis.com/jendigitalvision/commun/logo/contact.png' />
                            Contactez-moi
                        </Link>
                        <Link id="missions_button" to='/missions'>
                            <img alt='missions' src='https://storage.googleapis.com/jendigitalvision/commun/logo/missionsdone.png' />
                            Missions
                        </Link>
                        <Link id="references_button" to='/references'>
                            <img alt='references' src='https://storage.googleapis.com/jendigitalvision/commun/logo/evaluation.png' />
                            References
                        </Link>
                        <a id='english' rel="noopener noreferrer" target='_blank'>
                            <img alt='English' src='https://storage.googleapis.com/jendigitalvision/commun/usa.png' />
                            English
                        </a>
                        <Link id="company_button" to='/company'>
                            <img alt='Digital Vision &#38; Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo/company.png' />
                            Digital Vision &#38; Co
                        </Link>
                        <Link className='responsive_button' to='/technology'>
                            <img alt='Portfolio' src='https://storage.googleapis.com/jendigitalvision/commun/logo/respdesign.png' />
                            Portfolio
                        </Link>
                    </div>
                </div>
            </ MainLayout>
        )
    }
}