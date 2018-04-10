import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '../../../layouts/default';

import './index.css';

export default class Ambitions extends Component {
    render() {
        return (
            <MainLayout>
                <div id='ambitions'>
                    <div className='content'>
                        <Link to='/'>
                            <img className='back' alt='back' src='https://storage.googleapis.com/jendigitalvision/commun/back.png' />
                            <img className='logo' alt='Jen Digital Vision &#38; Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo-black-and-white.png' />
                        </Link>
                        <h5>Quelles sont mes ambitions en tant que développeuse? </h5>

                        <h3> "Continuer à être <span> passionnée </span> par mon métier" </h3>
                        <div id='way'>
                            <h1>
                                Comment j'y arrive?
                            </h1>
                            <div className='details'>
                                <div className='how'>
                                    <h3>Veille Technologique</h3>
                                    <p>
                                        Conférences, formation ou de simple recherche,
                                        pour rester à la page. On ne s'ennuit pas, on a toujours
                                        à faire.
                                    </p>
                                </div>
                                <div className='how'>
                                    <h3>Nouveaux domaines</h3>
                                    <p> 
                                        Les applications touchent tous les domaines. 
                                        J'ai eu la chance de travailler dans l'auto, l'immobilier, le luxe, les jeux videos,
                                        l'IA, la VR, les drones...
                                    </p>
                                </div>
                                <div className='how'>
                                    <h3>Nouveaux Challenges &#38; Transmettre</h3>
                                    <p>
                                        Se lancer des défis pour rester au top et motivé!
                                        Enseigner, transmettre les infos et compétences clefs de la réussite du métiers.
                                    </p>
                                </div>
                                <div className='how'>
                                    <h3>Approfondir</h3>
                                    <p>
                                        Etre plus motivée par le caractère intéressant des problématiques que par l'argent,
                                        s'approprier le projet comme si on l'avait conçu de toute pièce, se mettre à la place
                                        d'un utilisateur et anticiper.
                                    </p>
                                </div>
                                <div className='how'>
                                    <h3>Remise en Question</h3>
                                    <p>
                                        Rester humble est le maître mot d'un bon développeur, car on peut toujours trouver
                                        meilleur que soi et apprendre de tout le monde.
                                    </p>
                                </div>
                                <div className='how'>
                                    <h3>Demander Conseil &#38; Avis</h3>
                                    <p>
                                        Prendre du recul est comme dans tous les métiers, une bonne façon de rester dans le coup.
                                        Les tendances vont et viennes et changent tous les jours.
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
