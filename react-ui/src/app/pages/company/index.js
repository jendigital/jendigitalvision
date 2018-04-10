import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '../../layouts/default';

import './index.css';

export default class Company extends Component {
    render() {
        return (
            <MainLayout>
                <div id='company'>
                    <div className='content'>
                        <Link to='/'>
                            <img className='back' alt='back' src='https://storage.googleapis.com/jendigitalvision/commun/back.png' />
                            <img className='logo' alt='Jen Digital Vision &#38; Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo-black-and-white.png' />
                        </Link>
                        <img className='logo' alt='Digital Vision &#38; Co' src='https://storage.googleapis.com/jendigitalvision/commun/DigitalVisionAndCo.png' />
                    
                        <h3> Quel est la relation entre Jen Digital Vision et Digital Vision &#38; Co ?</h3>

                        <div id='company_presentation'>
                            <h3>
                                Une histoire qui a commencé...
                            </h3>
                            <div className='details'>
                                <p>
                                    Par l'ambition de rentrer chez Google. Le saint-graal des entreprises digitales. Une Startup devenue un géant
                                    incontournable. Mais la vérité c'est que par jour des millions de candidats n'y arrivent pas,
                                    du coup j'ai commencé par vouloir créer ma propre Startup pour pouvoir travailler sur des problématiques
                                    très variés.
                                </p>
                                <p>
                                    Puis force est de constaté, que je n'avais pas envie de passer tout mon temps à faire de l'administratifs ou de
                                    gérer des montagnes d'employés, du coup, j'ai préféré devenir indépendant en portage salariale tout en jouissant du
                                    statut d'auto-entrepreneur avec une réelle volonté de fédérer à travers une communauté que j'ai nommé Digital Vision &#38; Co.
                                </p>
                                <p>
                                    Mon objectif est d'aider les personnes à réussir à l'ère du numérique. Mon association permet d'accéder aux métiers de l'IT tel 
                                    que les programmeurs, designers, chef de projets... Grâce à mon réseaux, j'aimerais aider les gens à trouvé du travail et
                                    à atteindre leurs objectifs ainsi qu'à accéder à des conférences et formations.
                                </p>

                                <p>
                                    Etant dans un monde encore très masculin, j'aide les femmes qui veulent se lancer et qui ont parfois peur et 
                                    qui malheureusement ont des préjugés sur les métiers de la tech. Ayant particulièrement bien réussie à mon goût,
                                    j'aimerais formé des jeunes filles et des femmes aux métiers porteurs que j'ai c'est à dire programmeuse avec
                                    une maitrise en design et gestion de projet.
                                </p>

                                <a rel="noopener noreferrer" target='_blank' href='https://www.meetup.com/fr-FR/meetup-group-rtNFtyYH'>
                                    <button>Participer à l'aventure</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </ MainLayout>
        )
    }
}
