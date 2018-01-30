import React, { Component } from 'react';
import MainLayout from '../../../layouts/default';

import './index.css';

export default class Technology extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainLayout>
                <div id='tech'>
                    <div className='content'>
                        <img className='logo' alt='Jen Digital Vision & Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo-black-and-white.png' />
                    
                        <h2>Quelles stacks/technologies j'utilise? </h2>

                        <div id='stacks'>
                            <h1>
                                Parce que je les aimes
                            </h1>
                            <div className='details'>
                                <div className='hardskills'>
                                    <img src='' />
                                    <h2>React JS</h2>
                                    <p>
                                        Moderne avec la facilitation du Live Reload
                                    </p>
                                </div>
                                <div className='hardskills'>
                                    <img src='' />
                                    <h2>React Native (Android & iOS)</h2>
                                    <p> 
                                        Une seule base de code pour reprendre les deux types d'applications
                                    </p>
                                </div>
                                <div className='hardskills'>
                                    <img src='' />
                                    <h2>Angular JS de 1 à 4</h2>
                                    <p>
                                        Pratique pour les dashboards d'administrations car fournis avec plein de librairies
                                    </p>
                                </div>
                                <div className='hardskills'>
                                    <img src='' />
                                    <h2>Symfony PHP de 1 à 3</h2>
                                    <p>
                                        Backend simple d'utilisation avec des connexions aux bases de données simple et visuelle avec doctrine api
                                    </p>
                                </div>
                                <div className='hardskills'>
                                    <img src='' />
                                    <h2>MySQL</h2>
                                    <p>
                                        La Base de donnée avec les requête les plus simples
                                    </p>
                                </div>
                                <div className='hardskills'>
                                    <img src='' />
                                    <h2>MongoDB</h2>
                                    <p>
                                        Base de donnée libre de structure avec un système d'indexation infini avec
                                        des possibilités infinis
                                    </p>
                                </div>
                                <div className='hardskills'>
                                    <img src='' />
                                    <h2>Jenkins</h2>
                                    <p>
                                        Déploiement avec tests automatisés
                                    </p>
                                </div>
                                <div className='hardskills'>
                                    <img src='' />
                                    <h2>Docker</h2>
                                    <p>
                                        Virtualisation des Déploiement en préproduction et production
                                    </p>
                                </div>
                                <div className='hardskills'>
                                    <img src='' />
                                    <h2>Jest</h2>
                                    <p>
                                        Solution de Test Unitaire, d'implémentation et d'intégration 
                                        pour React
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
