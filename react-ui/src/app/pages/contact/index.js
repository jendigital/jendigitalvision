import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '../../layouts/default';

import './index.css';

export default class Contact extends Component {
    render() {
        return (
            <MainLayout>
                <div id='contact'>
                    <div className='content'>
                        <Link to='/'>
                            <img alt='back' className='back' src='https://storage.googleapis.com/jendigitalvision/commun/back.png' />
                            <img className='logo' alt='Jen Digital Vision' src='https://storage.googleapis.com/jendigitalvision/commun/logo-black-and-white.png' />
                        </Link>
                        
                        <h3>Vous cherchez des renseignements? M'engager? Avoir mon aide? </h3>

                        <div id='info'>
                            <div>
                                <img alt='jendigital' id='jendigital' src='https://storage.googleapis.com/jendigitalvision/commun/jendigital.jpg' />
                            </div>
                            <div id='info_details'>
                                <p id='name'>JENNIFER LIM BITANE</p>
                                <p>PARIS - VAL D'EUROPE</p>
                                <p>FRANCE</p>

                                <p id='mail'><a href='mailto:contact@jendigitalvision.com'>contact@jendigitalvision.com</a></p>
                                <p><a id='tel' href='tel:0788335060'>0788335060</a></p>
                            </div>
                            <div id='profiles'>
                                <a rel="noopener noreferrer" target='_blank' href='https://drive.google.com/file/d/12Uk1AJunTdRiuFEX4ZVEDQh9DJ3EfLw9/view?usp=sharing'>
                                    <img alt='cv' src='https://storage.googleapis.com/jendigitalvision/commun/resume.png' />
                                </a>
                                <a rel="noopener noreferrer" target='_blank' href='https://github.com/jendigital'>
                                    <img alt='github' id='git' src='https://storage.googleapis.com/jendigitalvision/commun/github.png' />
                                </a>
                                <a rel="noopener noreferrer" target='_blank' href='https://github.com/jendigital'>
                                    <img alt='linkedin' src='https://storage.googleapis.com/jendigitalvision/commun/linkedin.png' />
                                </a>
                                <a rel="noopener noreferrer" target='_blank' href='https://plus.google.com/u/1/communities/108554192909407640979?hl=fr'>
                                    <img alt='google+' src='https://storage.googleapis.com/jendigitalvision/commun/google-plus.png' />
                                </a>
                                <a rel="noopener noreferrer" target='_blank' href='https://twitter.com/_jendigital_'>
                                    <img alt='twitter' src='https://storage.googleapis.com/jendigitalvision/commun/twitter.png' />
                                </a>
                                <a rel="noopener noreferrer" target='_blank' href='https://www.instagram.com/jendigitalvision/'>
                                    <img alt='instagram' src='https://storage.googleapis.com/jendigitalvision/commun/instagram.jpeg' />
                                </a>
                                <a rel="noopener noreferrer" target='_blank' href='https://www.facebook.com/jendigitalvision'>
                                    <img alt='facebook' src='https://storage.googleapis.com/jendigitalvision/commun/facebook.png' />         
                                </a>
                                <a rel="noopener noreferrer" target='_blank' href='https://dribbble.com/Jendigital'>
                                    <img alt='dribble' src='https://storage.googleapis.com/jendigitalvision/commun/dribbble.png' />
                                </a>
                                <a rel="noopener noreferrer" target='_blank' href='https://www.meetup.com/fr-FR/meetup-group-rtNFtyYH'>
                                    <img alt='meetup' src='https://storage.googleapis.com/jendigitalvision/commun/meetup.png' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </ MainLayout>
        )
    }
}
