import React from 'react';
import s from './Footer.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const style = {
    height: '40px',
    width: '40px'
}
const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.wrapper}>
                <div className={s.left}>
                    <a href={'https://github.com/MasterTatto'} target={'_blank'}><GitHubIcon style={style}
                                                                                             className={s.hover}/></a>
                    <a href={'https://www.facebook.com/alexander.gromyko.7/'} target={'_blank'}><FacebookIcon
                        style={style}/></a>
                    <a href={'https://vk.com/id137574953'} target={'_blank'}><TwitterIcon style={style}/></a>
                </div>
                <div>
                    <span>Lorem ipsum dolor sit.</span>
                </div>
            </div>

        </div>

    );
};

export default Footer;
