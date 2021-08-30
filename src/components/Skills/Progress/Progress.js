import React from 'react';
import s from './Progress.module.css'
import {Avatar, Box, LinearProgress, Paper, Typography} from "@material-ui/core";
import Progress from "../../atom/Progress/Progress";


const ProgressSkill = (props) => {
    return (
        <div className={s.wrapper}>
            <Box display="flex" alignItems="center">
                <span style={{marginRight:'20px'}}>{props.name}</span>
                <Box width="100%" mr={1}>
                    <Progress width={props.value + '%'}/>
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

export default ProgressSkill;
