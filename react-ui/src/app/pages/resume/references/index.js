import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '../../../layouts/default';

import './index.css';

export default class References extends Component {
    render() {
        return (
            <MainLayout>
                <div id='references'>
                    <div className='content'>
                        <Link to='/'>
                            <img className='back' alt='back' src='https://storage.googleapis.com/jendigitalvision/commun/back.png' />
                            <img className='logo' alt='Jen Digital Vision &#38; Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo-black-and-white.png' />
                        </Link>
                                          
                        <h2>Qu'est-ce qu'on dit de moi? </h2>

                        <div id='ref_description'>
                            <div className='details'>
                                <div className='ref'>
                                    <h3>M. Pierre Louis</h3>
                                    <h4>Collegues d'Avendre A Louer</h4>
                                    <p>
                                        "Jennifer LIM est passionnée, est toujours a fond dans tous ce qu'elle fait,
                                        reste motivée et sérieuse dans n'importe quel circonstance."
                                    </p>
                                </div>
                                <div className='ref'>
                                    <h3>M. Wu</h3>
                                    <h4>Collegues de chez Lyxor Société Générale</h4>
                                    <p> 
                                        "Jennifer a fait preuve d'une excellente expertise pour mettre en place l'application
                                        de monitoring des actions gérés par l'entreprise."
                                    </p>
                                </div>
                                <div className='ref'>
                                    <h3>M. Bello</h3>
                                    <h4>Collegues de chez Backelite</h4>
                                    <p>
                                        "Jennifer est enthousiaste, et sait annalyser un projet de la bonne manière.
                                        Elle a su réaliser des projets Angular JS et React JS de bout en bout."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ MainLayout>
        )
    }
}
