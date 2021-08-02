import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (

        <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.nav}>
                    <NavLink to={'/main'} className={s.a}> Главная</NavLink>
                    <NavLink to={'/skills'} className={s.a}> Скиллы</NavLink>
                    <NavLink to={'/projects'} className={s.a}> Проекты</NavLink>
                    <NavLink to={'/contact'} className={s.a}> Контакты</NavLink>
                </div>
            </div>

        </div>
    );
};

export default Header;
