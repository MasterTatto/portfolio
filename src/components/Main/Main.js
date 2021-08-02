import React from 'react';
import s from './Main.module.css'
import video from '../../access/bg-video.mp4'
import {Button} from "@material-ui/core";
import Typist from "react-text-typist";


const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.text}><h1>Обо мне</h1></div>
            <div className={s.wrapper}>

                <div className={s.box_text}>

                    <Typist className={s.h1} sentences={['Привет , я Алекс!']} loop={false}> </Typist>
                    <p>Я занимаюсь разработкой приложений на React более одного года и это мое портфолио, надеюсь оно
                        тебе понравится ;)
                    </p>
                    <div>
                        <Button variant="contained" color="secondary" size="large"
                                style={{width: '130px'}}>GitHub</Button>
                    </div>
                </div>
                <div className={s.hover_img}>
                    <div className={s.box_img}></div>
                </div>

            </div>
        </div>
    );
}

export default Main;
