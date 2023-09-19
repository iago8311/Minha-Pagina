import React from "react";
import styled from "styled-components";
import LogoDev from "../../assets/devMaster.svg"
const Logo = styled.div`
    display: flex;
    
`
const ImagemLogo = styled.img`
    height: 4rem;    
`
const TextoImagem = styled.p`

    margin-top: 30px;
    font-size: 15px;
    color: aliceblue;

`
export default function LogoImagem(){
    return(
        <Logo>
        <ImagemLogo src={LogoDev} alt='imagem do logo'/>
        <TextoImagem className="textoImagem"><strong>Dev Master</strong></TextoImagem>
        </Logo> 
    )
}