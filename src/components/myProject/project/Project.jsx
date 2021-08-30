import React, {useEffect, useState} from 'react';
import s from './Project.module.css'
import {Button} from "@material-ui/core";

const Project = (props) => {
    const [toggle, setToggle] = useState(false)


    return (
        <div className={s.box} onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)'}}>
            <div className={`${s.infoBox} ${toggle ? s.active : ''}`} id='box'>
                <h1>{props.title}</h1>
                <h3 className={s.h3}>{props.discrip}</h3>
                <Button variant="contained" color="primary">GitHub</Button>
            </div>

        </div>
    );
};

export default Project;
