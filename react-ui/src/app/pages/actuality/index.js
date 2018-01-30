import React, { Component } from 'react';
import MainLayout from '../../layouts/default';

import './index.css';

export default class Actuality extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainLayout>
                <div id="actuality">
                    <div className="content">
                        <img className='logo' alt='Jen Digital Vision & Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo-black-and-white.png' />
                    
                        <div className='news'>
                            <span>Article 27/01/2018</span>

                            <h2>Vous avez besoin d'une développeuse? </h2>

                            <h3>Mon nom dans le monde du code est <span>Jen Digital</span> </h3>
                            <h3>
                                et j'ai <span>11 ans</span> d'expériences <span>pro</span> et <span>17 ans</span> à titre <span>personnelle</span> 
                            </h3>

                            <div className='details'>
                                <p>
                                    Dans un monde de plus en plus virtuel, étant codeuse (synonyme de développeuse), donc capable de réaliser les <span>sites internets et applications</span> que
                                    tout le monde a dans son téléphone, sa tablette ou encore son ordinateur, ma volonté est de vous montrer mes réalisations à travers mon portfolio
                                    ainsi que j'utilise les bonnes méthodes, que j'ai fais des choix technologiques réfléchis et surtout je ne reste jamais sur mes acquis en me réinventant tous les jours
                                    tout en conservant les bonnes pratiques.
                                </p>

                                <p>
                                    J'ai <span>commencé la programmation par passion à l'âge de 9 ans</span>. Donc j'ai pu suivre l'avancée des technologies en tout genre. Alors aujourd'hui, 
                                    l'objectif est de <span>rester au top et de continuer de s'améliorer</span>. Mon ambition, que je détaillerais dans la page suivante, est de <span>contribuer à 
                                    la digitalisation des services tout en conservant un caractère humain</span>.
                                </p>

                                <p>
                                    J'entends déjà les sceptiques dires que ce n'est pas possible et qu'à force de tout rendre numérique, l'humain n'a plus sa place. Mais au contraire,
                                    <span> ces applications, robots, services numériques sont faits par des humains et doivent rester controler par des humains</span> sinon le monde deviendrait un projet genesis
                                    et ce serait un projet autodestructeur. Et aucun humain, malgré ses défaults divers et variés, ne contredira le fait, que <span>bien des choses
                                    pratiques son nées de cette digitalisation</span>. En revanche, comme en tout temps et en toute chose, l'excès est à prévenir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ MainLayout>
        )
    }
}