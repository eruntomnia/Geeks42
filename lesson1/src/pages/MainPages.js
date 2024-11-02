import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Title from "../components/Title";
import Button from "../components/Button";
import Mycomponent from "../components/Mycomponent";

const MainPages = () => {
    return (
        <div>
            <Mycomponent homework={`Homework`}/>
            <Header/>
            <div className="btn">MainPage</div>
            <Button name={'open'} color={'primary'}/>
            <Button name={'close'} color={'error'}/>
            <Button name={'save'} color={'secondary'}/>
            <Footer/>
        </div>
    );
};

export default MainPages;