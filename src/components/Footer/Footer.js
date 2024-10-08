import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';
const Footer = () => {
    return (
        <Fragment>
            <div className={classes.footer}>
                <li>
                    <Link className={classes.link} to='https://www.linkedin.com/in/alamure-niranjan-017b05244/' target='blank'><FontAwesomeIcon icon={faLinkedin} /> </Link>
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
                <p>@ 2023, ANK -  A Niranjan Kumar</p>
            </div>
        </Fragment>
    )
}

export default Footer;
