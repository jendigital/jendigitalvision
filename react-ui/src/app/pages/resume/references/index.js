import React, { Component } from 'react';
import MainLayout from '../../../layouts/default';

import './index.css';

export default class References extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainLayout>
                <div id='references'>
                    <div className='content'>
                        <img className='logo' alt='Jen Digital Vision & Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo-black-and-white.png' />
                    
                        <h2>Quelles sont mes ambitions en tant que développeuse? </h2>

                        <h3> "Continuer à être <span> passionnée </span> par mon métier" </h3>
                        <div id='ref_description'>
                            <h1>
                                Comment j'y arrive?
                            </h1>
                            <div className='details'>
                                <div className='ref'>
                                    <img src='' />
                                    <h2>Veille Technologique</h2>
                                    <p>
                                        Conférences, formation ou de simple recherche,
                                        pour rester à la page. On ne s'ennuit pas, on a toujours
                                        à faire.
                                    </p>
                                </div>
                                <div className='ref'>
                                    <img src='' />
                                    <h2>Nouveaux domaines</h2>
                                    <p> 
                                        Les applications touchent tous les domaines. 
                                        J'ai eu la chance de travailler dans l'auto, l'immobilier, le luxe, les jeux videos,
                                        l'IA, la VR, les drones...
                                    </p>
                                </div>
                                <div className='ref'>
                                    <img src='' />
                                    <h2>Nouveaux Challenges</h2>
                                    <p>
                                        Se lancer des défis pour rester motiver et avoir une ligne de conduite constante.
                                    </p>
                                </div>
                                <div className='ref'>
                                    <img src='' />
                                    <h2>Approfondir</h2>
                                    <p>
                                        Etre plus motivée par le caractère intéressant des problématiques que par l'argent,
                                        s'approprier le projet comme si on l'avait conçu de toute pièce, se mettre à la place
                                        d'un utilisateur et anticiper.
                                    </p>
                                </div>
                                <div className='ref'>
                                    <img src='' />
                                    <h2>Remise en Question</h2>
                                    <p>
                                        Rester humble est le maître mot d'un bon développeur, car on peut toujours trouver
                                        meilleur que soi et apprendre de tout le monde.
                                    </p>
                                </div>
                                <div className='ref'>
                                    <img src='' />
                                    <h2>Demander Conseil &#38; Avis</h2>
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
