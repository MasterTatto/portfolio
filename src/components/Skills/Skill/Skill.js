import React from 'react';
import s from './Skill.module.css'
import {Avatar, Box, LinearProgress, Paper, Typography} from "@material-ui/core";
import Progress from "../../atom/Progress/Progress";

const style = {
    // backgroundColor: 'rgba(3,3,3,3)',
    background: "rgb(47,47,47)",
    background: "linear-gradient(0deg, rgba(47,47,47,0.6194852941176471) 100%, rgba(0,0,0,0.773546918767507) 100%)",
    borderRadius:'30px',
    padding:'20px'
    // boxShadow:'14px 10px rgba(255,255,255,.5)'

}

const Skill = (props) => {
    console.log(props)
    return (

        <div  className={s.skill} style={style}>

            <div className={s.avatar}>
                <Avatar alt={'log'} src={props.img} className={s.avatarI}
                        style={{height: '100px', width: '100px', borderRadius: '0px'}}/>
            </div>
            <div className={s.name}>{props.name}</div>
            <div className={s.text}>Lorem ipsum dolor sit amet.</div>

            <Box width={'80%'} display={'flex'} paddingBottom={'35px'}>
                <Box width="100%" mr={1}>
                    <Progress width={props.value + "%"}/>
                    {/*<LinearProgress variant="determinate" {...props} style={{height: '20px'}}/>*/}
                </Box>
                <Box minWidth={35}>
                    <Typography variant="body2" color="green">{`${Math.round(
                        props.value,
                    )}%`}</Typography>
                </Box>
            </Box>
        </div>


    );
};

export default Skill;
