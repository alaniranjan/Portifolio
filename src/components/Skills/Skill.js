import React, { Fragment } from 'react'
import Header from '../Header/Header';

import classes from './Skill.module.css'
import Footer from '../Footer/Footer';
const Skill = () => {
    return (
        <Fragment className={classes.contanier}>
            <Header/>
            <div className={classes.header}>Skills</div>
            <div className={classes.main}>
                <div className={classes.content}>
                    <h1>UI Designer:-</h1>
                    <p>Figma, Adola</p>
                </div>
                <div className={classes.content}>
                    <h1>Front-End:-</h1>
                    <p>HTML, CSS, Bootsrap, Javascript, ReactJS</p>
                </div>
                <div className={classes.content}>
                    <h1>Back-End:-</h1>
                    <p>NodeJS,MongoDB</p>
                </div>
                <div className={classes.content}>
                    <h1>Languages:-</h1>
                    <p>Java Oop
python
DBMS - Sql
Html ,Php
R-Language
C -Language
MS-Office</p>

                </div>
                <div className={classes.end}>-----*-----</div>
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Skill;
