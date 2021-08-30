import React from 'react';
import s from './upBlockText.module.css'

const UpBlockText = (props) => {
    return (
        <div className={s.text}>
            <h1>{props.title}</h1>
            <span>{props.title}</span>
        </div>
    );
};

export default UpBlockText;
