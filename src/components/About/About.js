import React, { Fragment } from 'react'
import Header from '../Header/Header';
import classes from './About.module.css'
import profile from '../assets/Ank.jpeg'
import Footer from '../Footer/Footer';
const About = () => {
    return (
        <Fragment>
            <Header />
            <h1 className={classes.heading}>About me</h1>
            <div className={classes.container}>
                <div className={classes["left-content"]}>
                    <img src={profile} alt="" />
                </div>
                <div className={classes["right-content"]}>
                    <h1 className={classes.tilte}>
                        I'm Alamure Niranjan Kumar and I am a <span> front-end Developer & UI Designer</span>
                    </h1>
                    <p className={classes.about}>
                        As I mentioned above that I am a front-end Developer & UI Designer. I have learnt web Technologies like Forntend ,Backend and Database. Apart from thses technologies I have good knowledge of Data Structures and Algorithms. I have completed my B.Sc Computer Applications in 2023 from Loyola Degree College Pilivendula , YVU University Kadapa, Andhra Pradesh. Also I have done Bipc in 2020 from Government Junior College Talupula, Andhra Pradesh.
                    </p>
                    <a className={classes.button} href="https://drive.google.com/file/d/1hHOdIvj7VRHmClfQQbgTR9fHWZtTQXNG/view?usp=sharing" target='blank'>Download CV</a>
                </div>
            </div>
            <div className={classes.end}>----*----</div>
            <Footer />
        </Fragment>
    )
}

export default About;
