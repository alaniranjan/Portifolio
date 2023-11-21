import React, { Fragment } from 'react'
import Header from '../Header/Header';
import classes from './Pro.module.css'
import  ProjectList from '../assets/empty.png';
import Footer from '../Footer/Footer';
const Project = () => {
    return (
        <Fragment>
            <Header />
            <h1 className={classes.title}>Projects</h1>
            <div className={classes["project-list"]}>
                <div className={classes.project}>
                    <img src={ProjectList} alt="projects" />
                    <h1><a href="projects" target='blank'>{ProjectList[1].name}</a>Empty</h1>
                </div>
                <div className={classes.project}>
                    <img src={ProjectList} alt="projects" />
                    <h1><a href="projects" target='blank'>{ProjectList[2].name}</a>Empty</h1>
                </div>
                <div className={classes.project}>
                    <img src={ProjectList} alt="projects" />
                    <h1><a href="projects"  target='blank'>{ProjectList[3].name}</a>Empty</h1>
                </div>
                <div className={classes.project}>
                    <img src={ProjectList} alt="projects" />
                    <h1><a href="projects" target='blank'>{ProjectList[4].name}</a>Empty</h1>
                </div>
                <div className={classes.project}>
                    <img src={ProjectList} alt="projects" />
                    <h1><a href="projects" target='blank'>{ProjectList[4].name}</a>Empty</h1>
                </div>
                <div className={classes.project}>
                    <img src={ProjectList} alt="projects" />
                    <h1><a href="projects" target='blank'>{ProjectList[4].name}</a>Empty</h1>
                </div>
                <div className={classes.project}>
                    <img src={ProjectList} alt="projects" />
                    <h1><a href="projects" target='blank'>{ProjectList[4].name}</a>Empty</h1>
                </div>
                
            </div>
            <div className={classes.btn}>
                <button>more</button>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Project;
