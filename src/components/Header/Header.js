import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (

        <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.nav}>
                    <a href="#" className={s.a}> Главная</a>
                    <a href="#" className={s.a}> Скиллы</a>
                    <a href="#" className={s.a}> Проекты</a>
                    <a href="#" className={s.a}> Контакты</a>
                </div>
            </div>

        </div>
    );
};

export default Header;
