import React, { Component } from 'react';
import headerPhoto from '../../img/logo.jpg';
import styles from './Header.module.css';

export default class Header extends Component { 

render() {
    const header = <header className={styles.header}>
            <img
                src={headerPhoto}
                alt=""
                className={styles.headerPhoto}         
                >            
            </img>

        </header>

    return (
        <>
        {header}
        </>
    );
}

}