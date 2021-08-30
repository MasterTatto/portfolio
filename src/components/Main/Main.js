import React from 'react';
import s from './Main.module.css'
import video from '../../access/bg-video.mp4'
import {Avatar, Button} from "@material-ui/core";
import Typist from "react-text-typist";
import img from '../../access/me.jpg'
import Progress from "../atom/Progress/Progress";
import UpBlockText from "../atom/upBlockText/upBlock";



const Main = () => {
    return (
        <div className={s.main}>
            <UpBlockText title={'About me'}/>

            <div className={s.wrapper}>
                <div className={s.hover_img}>
                    <div className={s.box_img}
                         style={{backgroundImage: 'url(https://sun9-62.userapi.com/impf/c857632/v857632602/d8d59/BHEgRDFSWvU.jpg?size=1280x960&quality=96&sign=21ab6c0481e10c3e79c6cd2e46ef6abe&type=album'}}/>
                </div>

                <div className={s.box_text}>

                    <Typist className={s.h1} sentences={["Alex Hramyka"]} loop={false}> </Typist>
                    <ul className={s.ul}>
                        <li><h3 className={s.myInfo}>AGE:</h3> <span>23</span></li>
                        <li><h3 className={s.myInfo}>PHONE:</h3> <span>+375 25 926 42 49</span></li>
                        <li><h3 className={s.myInfo}>EMAIL:</h3> <span>gromvolk97@gmail.com</span></li>
                        <li><h3 className={s.myInfo}>FREE NOW:</h3> <span>yes</span></li>

                    </ul>
                    <div>
                        <Button variant="contained" color="secondary" size="large"
                                style={{width: '130px'}}>GitHub</Button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Main;
