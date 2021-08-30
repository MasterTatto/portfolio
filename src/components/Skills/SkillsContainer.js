import React from 'react';
import {connect} from "react-redux";
import Skills from "./Skills";

let mapStateToProps = (state) => {
    return {
        progressPage: state.progressPage
    }
}
const SkillsContainer = connect(mapStateToProps)(Skills)

export default SkillsContainer;
