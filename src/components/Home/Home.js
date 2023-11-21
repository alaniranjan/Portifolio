import React, { Fragment } from 'react';
import classes from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
// import Skill from '../Skills/Skill';
import Header from '../Header/Header';
const Home = () => {
    return (
        <Fragment>
            <Header />
            <div className={classes.container}>
                <div className={classes.main}>
                    <p className={classes.para}>Hello, I am </p>
                    <h1 className={classes.name}>Niranjan Kumar . A</h1>
                    <p className={classes.para}><span> Front-End Developer , UI Designer </span> with a passion for learning and creating.</p>
                    <div>
                        <p className={classes.social}>
                            <li >
                                <Link className={classes.link} to='https://www.linkedin.com/in/alamure-niranjan-017b05244/'><FontAwesomeIcon icon={faLinkedin}  className='linkedin'/> </Link>
                            </li>
                            <li >
                                <Link className={classes.link} to='https://github.com/alaniranjan?tab=projects' target='blank'><FontAwesomeIcon icon={faGithub} /></Link>
                            </li>
                            <li >
                                <Link className={classes.link} to='https://www.instagram.com/alamureniranjan/' target='blank'><FontAwesomeIcon icon={faInstagram} /></Link>
                            </li>
                            <li >
                                <Link className={classes.link} to='https://twitter.com/AlamureNiranjan' target='blank'><FontAwesomeIcon icon={faTwitter} /></Link>
                            </li>
                        </p>
                        <a className={classes.button} href="https://drive.google.com/file/d/1hHOdIvj7VRHmClfQQbgTR9fHWZtTQXNG/view?usp=sharing" target='blank'>Download CV</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;
