import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '../../../layouts/default';

import './index.css';

export default class Missions extends Component {
    render() {
        return (
            <MainLayout>
                <div id='missions'>
                    <div className='content'>
                        <Link to='/'>
                            <img className='back' alt='back' src='https://storage.googleapis.com/jendigitalvision/commun/back.png' />
                            <img className='logo' alt='Jen Digital Vision &#38; Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo-black-and-white.png' />
                        </Link>
                        <h2 id='title' >J'ai développé les applications de quelles sociétés? </h2>

                        <h3 id='subtitle' > "Les services numériques touchent <span> tous les domaines</span>." </h3>
                        <div id='projects'>
                            <h1>
                                Projets par listes de domaines
                            </h1>
                            <div className='details'>
                                <h2>L'embarqué, l'intelligence artificielle et la domotique</h2>
                                <div className='theme'>                                  
                                    <div className='project'>
                                        <img alt='Parrot' src='https://storage.googleapis.com/jendigitalvision/portfolio/ParrotBebop.png' />
                                        <h3>Parrot</h3>
                                        <h4>Lead Developer</h4>
                                        <h4>d'une équipe de 3 développeurs</h4>
                                        <h4 className='date'>2015-2016 via ESN Axileo</h4>
                                        <p className='stack'>Angular JS, Sass, Css, HTML</p>
                                        <p>
                                            Serveur web embarqué sur les drones permettant le contrôle de la caméra pour capturer les champs d'agricultures en 3D
                                            et pouvoir photographier ou filmer avec des option RGB. Ceci permet d'éviter la perte d'engrais, car les
                                            images aident à savoir ou diffuser.
                                        </p>
                                    </div>
                                    <div className='project'>
                                        <img  alt='Promotelec' src='https://storage.googleapis.com/jendigitalvision/portfolio/Domotique.jpg' />
                                        <h3>Promotelec</h3>
                                        <h4>Junior Developer</h4>
                                        <h4 className='date'>2013 Via Brocelia</h4>
                                        <p className='stack'>Joomla, PHP, JS, Sass, Css, HTML</p>
                                        <p> 
                                            Application JS natif responsive de controle remote de la maison depuis la tablette,
                                            Fonctionnalité pour éteindre les lumières, les stores, l'alarme, appeler la police
                                            en cas de cambriolage ou d'incendie, gestion des langues
                                        </p>
                                    </div>
                                    <div className='project'>
                                        <img alt='Backelite' src='https://storage.googleapis.com/jendigitalvision/portfolio/BackeliteBlog.png' />
                                        <h3>Backelite On Boarding</h3>
                                        <h4>Lead Developer</h4>
                                        <h4>d'une équipe de 4 développeurs</h4>
                                        <h4 className='date'>2016-2017</h4>
                                        <p className='stack'>TensorFlow, React JS, Sass, Css, HTML</p>
                                        <p>
                                            Travailler sur une application mobile de reconnaissance faciale, combinaison des essais du machine lerning pytorch by facebook,
                                            et du machine learning tensorflow by google. Commencer par l'étude des animaux puis des visages, puis des postures humaines, et
                                            au final leur identité.
                                        </p>
                                    </div>
                                </div>
                                <h2>Le luxe, fashion, cosmetics</h2>
                                <div className='theme'>   
                                    <div className='project'>
                                        <img alt='Dior' src='https://storage.googleapis.com/jendigitalvision/portfolio/Dior.jpg' />
                                        <h3>Dior</h3>
                                        <h4>Lead Developer</h4>
                                        <h4>d'une équipe de 4 développeur</h4>
                                        <h4 className='date'>2016-2017 Via Backelite/Digital &#38; You Agency</h4>
                                        <p className='stack'>React JS, Sass, Css, HTML</p>
                                        <p> 
                                            Application React JS de présentation des produits et des défilés Fashion Week 
                                            ainsi qu'un accès privilèges à certains journalistes, bloggeurs de la base du client
                                            avec un système Webpack de lancement de la stack et une livraison moderne avec
                                            une solution virtual server avec Docker.
                                        </p>
                                    </div>                           
                                    <div className='project'>
                                        <img alt='Chanel' src='https://storage.googleapis.com/jendigitalvision/portfolio/Chanel.png' />
                                        <h3>Chanel</h3>
                                        <h4>Architecte suppléante et développeuse</h4>
                                        <h4>d'une équipe de 10 développeurs</h4>
                                        <h4 className='date'>2017-2018 Client Direct</h4>
                                        <p className='stack'>Hybris JSP(Java Server Page), React JS, Sass, Css, HTML</p>
                                        <p>
                                            Application e-commerce Hybris avec une solution d'annalyse de donnée client Fredhopper
                                            avec pour stack du Java Server Page avec du JS, Sass/CSS. Une solution sûre avec un cms 
                                            honéreux mais qui a fait ces preuves par sa complétude.
                                        </p>
                                    </div>
                                    <div className='project'>
                                        <img alt='BioCoiff' src='https://storage.googleapis.com/jendigitalvision/portfolio/Biocoiff.png' />
                                        <h3>BioCoiff</h3>
                                        <h4>Lead Developer &#38; Designer</h4>
                                        <h4 className='date'>2017-2018 Via Malt Hopwork</h4>
                                        <a rel="noopener noreferrer" target='_blank' href='https://github.com/jendigital/biocoiffapp'>
                                            <img alt='github' className='github' src='https://storage.googleapis.com/jendigitalvision/portfolio/Github.png' />
                                        </a>
                                        <p className='stack'>React Native, Sass, JS, Wordpress</p>
                                        <p>
                                            Application e-commerce React Native pour l'achat de produits cosmetiques et capilaires.
                                            L'enjeu était de faire un design épuré tout en donnant toutes les informations clés aux
                                            clients pour être aussi satisfait que quand il est conseiller par un coiffeur ou 
                                            autres spécialistes des cheveux.
                                        </p>
                                    </div>
                                </div>
                                <h2>L'automobile, l'immobilier</h2>
                                <div className='theme'>   
                                    <div className='project'>
                                        <img alt='A Vendre A Louer' src='https://storage.googleapis.com/jendigitalvision/portfolio/AVendreALouer.jpg' />
                                        <h3>A vendre A Louer</h3>
                                        <h4>Lead Developer &#38; Designer</h4>
                                        <h4>d'une équipe de 3 personnes</h4>
                                        <h4 className='date'>2013 Via ESN Fhm Solutions</h4>
                                        <p className='stack'>PHP Natif, JS Natif, Sass, Css, HTML</p>
                                        <p> 
                                            Maintenance et évolution d'une applications js et php natif avec tracking de click et de pages
                                            d'annonces immobilieres. Mettre en place des tests ABTasty pour vérifier que la meilleure
                                            expérience utilisateure est mis en place.
                                        </p>
                                    </div>                           
                                    <div className='project'>
                                        <img alt='Renault' src='https://storage.googleapis.com/jendigitalvision/portfolio/Renault.png' />
                                        <h3>Renault</h3>
                                        <h4>Developeur Front-End Confirmé</h4>
                                        <h4>d'une équipe de 4</h4>
                                        <h4 className='date'>2014 Via Ekino Agency</h4>
                                        <p className='stack'>Angular JS, Sass, Css, HTML</p>
                                        <p>
                                            Application e-commerce Angular JS pour vendre la gamme professionnel pour les chauffeurs
                                            et les livreurs. Mise en place d'effet luxe en Sass/CSS.
                                        </p>
                                    </div>
                                    <div className='project'>
                                        <img alt='Aramis Auto' src='https://storage.googleapis.com/jendigitalvision/portfolio/AramisCRUD.png' />
                                        <h3>Aramis Auto</h3>
                                        <h4>Developeur Fullstack</h4>
                                        <h4>d'une équipe de 4</h4>
                                        <h4 className='date'>2013 Via ESN Fhm Solutions</h4>
                                        <p className='stack'>PHP Symfony 1 et 2, React JS, Sass, Css, HTML</p>
                                        <p>
                                            Application e-commerce Angular JS / Symfony PHP, refonte total du site vers les nouvelles
                                            versions d'angular et symfony de la totalité du site en commençant par l'espace client puis
                                            le tunnel de réservation.
                                        </p>
                                    </div>
                                </div>
                                <h2>Les télécoms, les transports</h2>
                                <div className='theme'>                     
                                    <div className='project'>
                                        <img alt='SFR Cloud Numergy' src='https://storage.googleapis.com/jendigitalvision/portfolio/Numergy.png' />
                                        <h3>SFR Cloud Numergy</h3>
                                        <h4>Developeur Confirmé</h4>
                                        <h4>d'une équipe de 8</h4>
                                        <h4 className='date'>2015 Via Synchrone Technologies</h4>
                                        <p className='stack'>React JS, Sass, Css, HTML</p>
                                        <p>
                                            Travail sur une solution de cloud ultraproteger. La problématique est qu'aujourd'hui l'état 
                                            a le droit de se saisir de n'importe quel donnée dans un cloud tel que google drive, icloud alors
                                            numergy a voulu contourner le système pour protéger les entreprises avec un système d'encryptage
                                            particulier et d'autres choses que je ne peux divulguer.
                                        </p>
                                    </div>
                                    <div className='project'>
                                        <img alt='Orange Labs' src='https://storage.googleapis.com/jendigitalvision/portfolio/OrangeApp.png' />
                                        <h3>Orange Labs</h3>
                                        <h4>Lead Developeur Junior</h4>
                                        <h4>d'une équipe de 6</h4>
                                        <h4 className='date'>2009-2013 Apprentissage</h4>
                                        <p className='stack'>PHP, JS, Sass, Css, HTML</p>
                                        <p> 
                                            Travail dans le département de l'innovation sur des solutions de communication de demain
                                            tel que les hologrammes rediffusés grâce à la récupération de l'image kinect ainsi que la
                                            minification de la solution dans une montre. Travail sur un projet de répondeur video avec
                                            commande vocale.
                                        </p>
                                    </div>    
                                    <div className='project'>
                                        <img alt='Wecab' src='https://storage.googleapis.com/jendigitalvision/portfolio/wecab.png' />
                                        <h3>Wecab</h3>
                                        <h4>Developeur Front-End Confirmé</h4>
                                        <h4>d'une équipe de 4</h4>
                                        <p className='stack'>Angular JS, Sass, Css, HTML</p>
                                        <h4 className='date'>2014 Via Ekino Agency</h4>
                                        <p>
                                            Application e-commerce Angular JS / Symfony PHP développé from scratch de réservation de
                                            taxi. Travail sur le design et l'expérience utilisateur.
                                        </p>
                                    </div>
                                </div>
                                <h2>Les assurances, les jeux videos, les courses</h2>
                                <div className='theme'>                     
                                    <div className='project'>
                                        <img alt='AXA' src='https://storage.googleapis.com/jendigitalvision/portfolio/AXA.png' />
                                        <h3>AXA</h3>
                                        <h4> Lead Developer JS </h4>
                                        <h4 className='date'>2018 Via Exteam</h4>
                                        <p className='stack'>React JS, Sass, Css, HTML</p>
                                        <p>
                                            Travail sur une solution d'analyse de risque grâce à des calculs matriciels, pour évaluer à 
                                            combien doit s'élever le prix de l'assurance pour pouvoir rembourser tout le monde
                                            en cas de catastrophe naturelle ou d'effet de chaine en raison de maladie, crack boursier...
                                        </p>
                                    </div>
                                    <div className='project'>
                                        <img alt='Battle Clic' src='https://storage.googleapis.com/jendigitalvision/portfolio/BattleClicGame.png' />
                                        <h3>Battle Clic</h3>
                                        <h4> Developer Confirmé Fullstack JS </h4>
                                        <h4 className='date'>2014 Via Fhm Solutions</h4>
                                        <p className='stack'>React JS, Node JS, Sass, Css, HTML</p>
                                        <p> 
                                            Développement d'un jeu video de bataille de clic pour gagner des lots intéressants comme
                                            des jeux videos, place de concert...
                                        </p>
                                    </div>    
                                    <div className='project'>
                                        <img alt='RunForYou' src='https://storage.googleapis.com/jendigitalvision/portfolio/RunForYOu.png' />
                                        <h3>RunForYou</h3>
                                        <h4> Developer Confirmé Fullstack JS/PHP </h4>
                                        <h4 className='date'>2014 Via Fhm Solutions</h4>
                                        <h4> Angular JS, Symfony 2 PHP, JS, HTML, Sass, CSS </h4>
                                        <p>
                                            Application de Gestion de Courses pour leur organisations, les inscriptions 
                                            et les récupération de brassard.
                                        </p>
                                    </div>
                                </div>
                                <h2>Reseaux Sociales, App de Rencontre, Trouver le job de ses rêves</h2>
                                <div className='theme'>                     
                                    <div className='project'>
                                        <img id='lpn' alt='Life Personal Network' src='https://storage.googleapis.com/jendigitalvision/portfolio/myFriendsMobile.png' /> 
                                        <img alt='Life Personal Network' src='https://storage.googleapis.com/jendigitalvision/portfolio/myFriendsLaptop.png' />
                                        <h3>Life Personal Network</h3>
                                        <h4>Lead Developer Fullstack</h4>
                                        <h4 className='date'>2016-2017 Via Codeur.com</h4>
                                        <p className='stack'>React JS, React Native, Sass, Css, HTML</p>
                                        <a rel="noopener noreferrer" target='_blank' href='https://github.com/jendigital/lpn-front'>
                                            <img alt='github' className='github' src='https://storage.googleapis.com/jendigitalvision/portfolio/Github.png' />
                                        </a>
                                        <p>
                                            Réseaux Sociales avec une experience utilisateurs améliorées,
                                            avec des paramètres de confidentialités plus poussés.
                                        </p>
                                    </div>
                                    <div className='project'>
                                        <img alt='Hayati' src='https://storage.googleapis.com/jendigitalvision/portfolio/HayatiProfile.png' />
                                        <h3>Hayati</h3>
                                        <h4>Lead Developer Fullstack</h4>
                                        <h4 className='date'>2017-2018 Via Codeur.com</h4>
                                        <a rel="noopener noreferrer" target='_blank' href='https://github.com/jendigital/hayati'>
                                            <img alt='github' className='github' src='https://storage.googleapis.com/jendigitalvision/portfolio/Github.png' />
                                        </a>
                                        <p className='stack'>React Native, Sass, Css</p>
                                        <p> 
                                            Développement d'une application de rencontre pour la communauté magrébine,
                                            Inspiré de Tinder, Happn &#38; Once
                                        </p>
                                    </div>    
                                    <div className='project'>
                                        <img alt='Impala' src='https://storage.googleapis.com/jendigitalvision/portfolio/Impala.png' />
                                        <h3>Impala</h3>
                                        <h4>Lead Developer Front-End</h4>
                                        <h4 className='date'>2017 Via Talent.io</h4>
                                        <a rel="noopener noreferrer" target='_blank' href='https://github.com/jendigital/impala'>
                                            <img alt='github' className='github' src='https://storage.googleapis.com/jendigitalvision/portfolio/Github.png' />
                                        </a>
                                        <p className='stack'>React JS, Sass, Css, HTML</p>
                                        <p>
                                            Application pour trouver le job de ses rêves, parcours scolaires, professionnels,
                                            listing des métiers.
                                        </p>
                                    </div>
                                </div>
                                <h2>Banques</h2>
                                <div className='theme'>                     
                                    <div className='project'>
                                        <img alt='LCL' src='https://storage.googleapis.com/jendigitalvision/portfolio/LCL.png' />
                                        <h3>LCL</h3>
                                        <h4>Lead Developer Front-End</h4>
                                        <h4 className='date'>2017 Via Backelite</h4>
                                        <p className='stack'>React Native, Sass, Css</p>
                                        <p>
                                            Application de gestion de compte bancaires avec une expérience utilisateurs améliorées.
                                        </p>
                                    </div>
                                    <div className='project'>
                                        <img alt='Lyxor' src='https://storage.googleapis.com/jendigitalvision/portfolio/Lyxor.png' />
                                        <h3>Lyxor - Societe Generale</h3>
                                        <h4>Lead Developer Front-End</h4>
                                        <h4 className='date'>2016 Via Axileo</h4>
                                        <p className='stack'>React JS, Sass, Css, HTML</p>
                                        <p> 
                                            Développement d'une application de représentation graphique des actions ETF (actions qui se
                                            calquent à des devises ou indices boursiers comme le CAC 40)
                                        </p>
                                    </div>    
                                    <div className='project'>
                                        <img alt='Clicom' src='https://storage.googleapis.com/jendigitalvision/portfolio/ClicomSoge.png' />
                                        <h3>Clicom - Societe Generale</h3>
                                        <h4>Lead Developer Front-End</h4>
                                        <h4 className='date'>2017 Via Backelite</h4>
                                        <p className='stack'>Angular JS, Sass, Css, HTML</p>
                                        <p>
                                            Application pour les conseillers bancaires afin de leur permettre de faire des présentations
                                            en ligne à partager ou utiliser lors de speechs.
                                        </p>
                                    </div>
                                </div>
                                <h2>Produits Personnalisés, Courses de Chevaux &#38; A pied</h2>
                                <div className='theme'>                     
                                    <div className='project'>
                                        <img alt='Photobox' src='https://storage.googleapis.com/jendigitalvision/portfolio/Photobox.png' />
                                        <h3>Photobox</h3>
                                        <h4>Dévelopeur Front-End</h4>
                                        <h4>d'une équipe de 8</h4>
                                        <h4 className='date'>2016</h4>
                                        <p className='stack'>Backbone JS, React JS, Sass, Css, HTML</p>
                                        <p>
                                            Application de personnalisation de produits type livre photo, coque avec photo, coussin avec photo,
                                            toile avec photo...
                                        </p>
                                    </div>
                                    <div className='project'>
                                        <img alt='Equidia' src='https://storage.googleapis.com/jendigitalvision/portfolio/EquidiaLive.png' />
                                        <h3>Equidia</h3>
                                        <h4>Dévelopeur Fullstack</h4>
                                        <h4>d'une équipe de 4</h4>
                                        <h4 className='date'>2014 Via Fhm Solutions</h4>
                                        <p className='stack'>Angular JS, Cake PHP, Sass, Css, HTML</p>
                                        <p> 
                                            Développement d'une application de visionnage d'abonnement vidéo de courses de chevaux ou
                                            de la vie des chevaux.
                                        </p>
                                    </div>    
                                    <div className='project'>
                                        <img alt='FFSE' src='https://storage.googleapis.com/jendigitalvision/portfolio/FFSE.png' />
                                        <h3>FFSE</h3>
                                        <h4>Dévelopeur Fullstack</h4>
                                        <h4>d'une équipe de 4</h4>
                                        <h4 className='date'>2014 Via Fhm Solutions</h4>
                                        <p className='stack'>JS, Sass, Css, HTML</p>
                                        <p>
                                            Application pour la gestion et les informations de courses organisés par une association 
                                            appelée "Fédération française du Sport d'Entreprises".
                                        </p>
                                    </div>
                                </div>
                                <h2>Agence</h2>
                                <div className='theme'>                     
                                    <div className='project'>
                                        <img alt='Axileo' src='https://storage.googleapis.com/jendigitalvision/portfolio/Axileo.png' />
                                        <h3>Axileo</h3>
                                        <h4>Dévelopeur Front-End</h4>
                                        <h4>d'une équipe de 4</h4>
                                        <h4 className='date'>2015</h4>
                                        <p className='stack'>React JS, Sass, Css, HTML</p>
                                        <p>
                                            Application de présentation de l'ESN.
                                        </p>
                                    </div>
                                    <div className='project'>
                                        <img alt='Fhm Solutions' src='https://storage.googleapis.com/jendigitalvision/portfolio/FhmSolution1.png' />
                                        <h3>Fhm Solutions</h3>
                                        <h4>Dévelopeur Front-End</h4>
                                        <h4>d'une équipe de 4</h4>
                                        <h4 className='date'>2014</h4>
                                        <p className='stack'>React JS, Sass, Css, HTML</p>
                                        <p> 
                                            Application de présentation de l'ESN.
                                        </p>
                                    </div>    
                                    <div className='project'>
                                        <img alt='Digital &#38; You' src='https://storage.googleapis.com/jendigitalvision/portfolio/DigitalAndYou.png' />
                                        <h3>Digital &#38; You</h3>
                                        <h4>Dévelopeur Front-End</h4>
                                        <h4>d'une équipe de 4</h4>
                                        <h4 className='date'>2017</h4>
                                        <p className='stack'>React JS, Sass, Css, HTML</p>
                                        <p>
                                            Application de présentation de l'ESN.
                                        </p>
                                    </div>
                                </div>
                                <h2>Santé, Recyclage, Store</h2>
                                <div className='theme'>                     
                                    <div className='project'>
                                        <img alt='1001 Pharmacies' src='https://storage.googleapis.com/jendigitalvision/portfolio/1001PharmaciesEte.png' />
                                        <h3>1001 Pharmacies</h3>
                                        <h4>Dévelopeur Front-End</h4>
                                        <h4>d'une équipe de 4</h4>
                                        <h4 className='date'>2013</h4>
                                        <p className='stack'>Joomla PHP, Node JS, JS, Sass, Css, HTML</p>
                                        <p>
                                            Application de vente de médicaments et de produits pharmaceutiques et mini chat en real time
                                        </p>
                                    </div>
                                    <div className='project'>
                                        <img alt='Veolia Propreté' src='https://storage.googleapis.com/jendigitalvision/portfolio/Veolia-Proprete.png' />
                                        <img alt='Sarp Assainissement' src='https://storage.googleapis.com/jendigitalvision/portfolio/Sarp-Assainissement.png' />
                                        <h3>Veolia Propreté &#38; Sarp Assainissement</h3>
                                        <h4>Dévelopeur Fullstack</h4>
                                        <h4>d'une équipe de 4</h4>
                                        <h4 className='date'>2014</h4>
                                        <p className='stack'>Joomla PHP, JS, Sass, Css, HTML</p>
                                        <p> 
                                            Application permettant de contacter les sociétés de recyclage pour demander un passage
                                            à domicile ou dans l'entreprise.
                                        </p>
                                    </div>    
                                    <div className='project'>
                                        <img alt='Vista Design' src='https://storage.googleapis.com/jendigitalvision/portfolio/VistaDesign.png' />
                                        <h3>Vista Design</h3>
                                        <h4>Dévelopeur Front-End</h4>
                                        <h4>d'une équipe de 2</h4>
                                        <h4 className='date'>2017</h4>
                                        <p className='stack'>React JS, Sass, Css, HTML</p>
                                        <p>
                                            Application de présentation des gammes de store proposées.
                                        </p>
                                    </div>
                                </div>
                                <h2>Intelligence Artificielle, Advertising(Pub en ligne), Bibliothèque</h2>
                                <div className='theme'>                     
                                    <div className='project'>
                                        <img alt='IAnnalytics Onboarding' src='https://storage.googleapis.com/jendigitalvision/portfolio/IA.jpg' />
                                        <h3>IAnnalytics Onboarding</h3>
                                        <h4>Dévelopeur Fullstack</h4>
                                        <h4>d'une équipe de 2</h4>
                                        <h4 className='date'>2017 Via Backelite</h4>
                                        <p className='stack'>TensorFlow, Pytorch, React JS, Sass, Css, HTML</p>
                                        <p>
                                            Application de reconnaissance faciale pour l'on boarding de la société
                                            afin de reconnaitre la personne en la prenant en photo ou video et
                                            connaître les informations publiques sur la personne.
                                        </p>
                                    </div>
                                    <div className='project'>
                                        <img alt='Adyoulike' src='https://storage.googleapis.com/jendigitalvision/portfolio/AdyoulikeAdvertising.png' />
                                        <h3>Adyoulike</h3>
                                        <h4>Dévelopeur Front-End</h4>
                                        <h4>d'une équipe de 3</h4>
                                        <h4 className='date'>2016</h4>
                                        <p className='stack'>React JS, Sass, Css, HTML</p>
                                        <p>
                                            Application permettant aux entreprises de publier ou de proposer des emplacements de publicités.
                                        </p>
                                    </div>
                                    <div className='project'>
                                        <img alt='Inria' src='https://storage.googleapis.com/jendigitalvision/portfolio/InriaRobot.png' />
                                        <h3>Inria</h3>
                                        <h4>Dévelopeur Fullstack</h4>
                                        <h4>d'une équipe de 4</h4>
                                        <h4 className='date'>2015</h4>
                                        <p className='stack'>React JS, Sass, Css, HTML</p>
                                        <p>
                                            Application pour lister les livres de la blibliothèque nationale.
                                        </p>
                                    </div>
                                </div>
                                <h2>Parking, Assurance, Fibre</h2>
                                <div className='theme'>                     
                                    <div className='project'>
                                        <img alt='Indigo' src='https://storage.googleapis.com/jendigitalvision/portfolio/IndigoCouple.png' />
                                        <h3>Indigo</h3>
                                        <h4>Dévelopeur Front-End</h4>
                                        <h4>d'une équipe de 8</h4>
                                        <h4 className='date'>2017 Via Backelite</h4>
                                        <p className='stack'>Angular JS, Sass, Css, HTML</p>
                                        <p>
                                            Application pour trouver un parking indigo avec système de geolocalisation et
                                            d'abonnement.
                                        </p>
                                    </div>
                                    <div className='project'>
                                        <img alt='CNP Assurances' src='https://storage.googleapis.com/jendigitalvision/portfolio/CNPAssuranceFolderAccess.png' />
                                        <h3>CNP Assurances</h3>
                                        <h4>Lead Dévelopeur Front-End</h4>
                                        <h4 className='date'>2017 Via Backelite</h4>
                                        <p className='stack'>React JS, Sass, Css, HTML</p>
                                        <p> 
                                            Application permettant aux assureurs de gérer les dossiers clients.
                                        </p>
                                    </div>    
                                    <div className='project'>
                                        <img alt='Covage' src='https://storage.googleapis.com/jendigitalvision/portfolio/CovageHome.png' />
                                        <h3>Covage</h3>
                                        <h4>Lead Dévelopeur Front-End</h4>
                                        <h4>d'une équipe de 3</h4>
                                        <h4 className='date'>2017 Via Backelite</h4>
                                        <p className='stack'>Woordpress, JS, Sass, Css, HTML</p>
                                        <p>
                                            Application permettant aux sociétés louant de la fibre de contacter le bon service de Covage.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ MainLayout>
        )
    }
}
