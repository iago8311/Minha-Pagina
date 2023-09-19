import React from "react";
import styled from "styled-components";
import Footer from '../components/Footer';
import Sobre from "../components/Sobre";

const AppContainer = styled.div`
width: 100vw;
height: 100vh;
background-image: linear-gradient(90deg,#002F52 35%,#326589);
`
export default function About(){
    return (
        <AppContainer>
        <Sobre/>
        <Footer/>
        </AppContainer>
      );
}