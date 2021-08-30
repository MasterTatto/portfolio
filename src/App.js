import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import {Route} from "react-router-dom";
import video from "./access/bg-video.mp4";
import React from "react";
import Footer from "./components/Footer/Footer";
import SkillsContainer from "./components/Skills/SkillsContainer";
import Projects from "./components/myProject/Projects";


function App() {

    return (
        <div className="App">
            <video autoPlay muted loop className={'videos'}>
                <source src={video} type="video/mp4"/>
            </video>

            {/*<div className={'main_wrapper'}>*/}
                <Header/>
                <Main/>
                <SkillsContainer/>
                {/*<Route render={() => <Main/>} path={'/main'}/>*/}
                {/*<Route render={() => <SkillsContainer/>} path={'/skills'}/>*/}
            <Projects />
                <Footer/>
            {/*</div>*/}

        </div>
    );
}

export default App;
