import React from 'react';
import s from './Progress.module.css';

const Progress = (props) => {
    const style = {
        width:props.width
    }
    return (
        <div>
            <div className={s.progress}>
                <span className={s.span} style={style}></span>
            </div>
        </div>
    );
};

export default Progress;
