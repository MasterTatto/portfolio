import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Fade, IconButton, Modal} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';



const Header = () => {


    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.nav}>
                    <NavLink  to={'/main'} className={s.a} activeClassName={s.active}> Главная</NavLink>
                    <NavLink to={'/skills'} className={s.a} activeClassName={s.active}> Скиллы</NavLink>
                    <NavLink to={'/projects'} className={s.a} activeClassName={s.active}> Проекты</NavLink>
                    <NavLink to={'/contact'} className={s.a} activeClassName={s.active}> Контакты</NavLink>
                </div>
            </div>

        </div>
    );
};

export default Header;
