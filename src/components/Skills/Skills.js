import React from 'react';
import s from './Skills.module.css'
import Skill from "./Skill/Skill";
import ts from '../../access/typescript.png'
import js from '../../access/javascript.png'
import react from '../../access/react.png'
import ProgressSkill from "./Progress/Progress";

const Skills = () => {

    return (
        <div className={s.skill}>
            <div className={s.text}><h1>Мои навыки</h1></div>
            <div className={s.wrapper}>
                <Skill img={ts} name={'TypeScript'} value={90}/>
                <Skill img={js} name={'JavaScript'} value={90}/>
                <Skill img={react} name={'React'} value={80}/>
            </div>
            <div className={s.box_progress}>
                <ProgressSkill value={100} name={'HTML'}/>
                <ProgressSkill value={90} name={'CSS'}/>
                <ProgressSkill value={90} name={'JAVASCRIPT'}/>
                <ProgressSkill value={70} name={'REDUX'}/>
                <ProgressSkill value={70} name={'REDUX'}/>
                <ProgressSkill value={70} name={'REDUX'}/>
            </div>
        </div>
    );
};

export default Skills;
