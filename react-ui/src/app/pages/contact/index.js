import React, { Component } from 'react';
import MainLayout from '../../layouts/default';

import './index.css';

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainLayout>
                <div id='contact'>
                    <div className='content'>
                        <img className='logo' alt='Jen Digital Vision & Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo-black-and-white.png' />
                    
                        <h2>Vous cherchez à me joindre? </h2>

                        <div id='contact_form'>
                            <h3>
                                Remplissez ce formulaire svp
                            </h3>
                            <div className='details'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </ MainLayout>
        )
    }
}
