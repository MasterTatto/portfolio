import React from 'react';
import s from './Project.module.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import UpBlockText from '../atom/upBlockText/upBlock'
import Project from "./project/Project";
import {useSelector} from "react-redux";

const Projects = () => {
    const select = useSelector((state) => state.projectReducer)
    console.log(select)
    //
    const projectItem = select.map((s) => {
        return <Project title={s.title} discrip={s.description} key={s.id}/>

    })

    //
    return (
        <div className={s.project}>

            <UpBlockText title={'my project'}/>

            <div className={s.wrapper}>
                {projectItem}
            </div>

        </div>
    );
};

export default Projects;
