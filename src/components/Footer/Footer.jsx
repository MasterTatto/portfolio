import React from 'react';
import s from './Footer.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
const style = {
    height:'40px',
    width:'40px'
}
const Footer = () => {
    return (
        <div className={s.footer}>

            <div className={s.left}>
                <span><GitHubIcon style={style} className={s.hover}/></span>
                <span><FacebookIcon style={style}/></span>
                <span><TwitterIcon style={style}/></span>
            </div>
            <div>
               <span>Lorem ipsum dolor sit.</span>
            </div>
        </div>

    );
};

export default Footer;
