import React from 'react';
import s from './Skills.module.css';
import Skill from './Skill/Skill';
import ts from '../../access/typescript.png';
import js from '../../access/javascript.png';
import react from '../../access/react.png';
import ProgressSkill from './Progress/Progress';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import UpBlockText from '../atom/upBlockText/upBlock'
const Skills = (props) => {
	//
	const progressItem = props.progressPage.progressSkill.map((p) => {
		return <ProgressSkill value={p.value} name={p.name} />;
	});
	//
	const skillItem = props.progressPage.skill.map((p) => {
		return <Skill img={p.img} name={p.name} value={p.value} />;
	});

	//
	return (
		<div className={s.skill}>

			<UpBlockText title={'my skill'}/>

			<div className={s.wrapper}>
                {/*<Carousel emulateTouch={true} className={s.cour}>*/}
                    {skillItem}
                {/*</Carousel>*/}

				
			</div>
			<div className={s.box_progress}>{progressItem}</div>
		</div>
	);
};

export default Skills;
