import React, { Component } from 'react';
import MainLayout from '../../layouts/default';

import './index.css';

export default class Company extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainLayout>
                <div id='company'>
                    <div className='content'>
                        <img className='logo' alt='Jen Digital Vision & Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo-black-and-white.png' />
                        <img className='logo' alt='Jen Digital Vision & Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo-black-and-white.png' />
                    
                        <h2> Quel est la relation entre Jen Digital Vision et Digital Vision & Co ?</h2>

                        <div id='company_presentation'>
                            <h3>
                                Une histoire qui a commencé 
                            </h3>
                            <div className='details'>
                                Par l'ambition de rentrer chez Google...
                                Le saint-graal des entreprises digitales. Une Startup devenue un monstre
                                incontournable.
                            </div>
                        </div>
                    </div>
                </div>
            </ MainLayout>
        )
    }
}
