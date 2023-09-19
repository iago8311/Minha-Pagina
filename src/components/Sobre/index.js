import React from "react";
import Me from "../../assets/eu.jpg"
import styled from "styled-components";


const DivGeral = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 50px;

`
const DivImagem = styled.div`
    padding: 18px 15px 0 0;
    
`
const Imagem = styled.img`
    width: 180px;
    height: 200px;
    border-radius: 5%;
`
const TextoSobre = styled.div`
color: aliceblue;
font-family: sans-serif;
height: 100px;
width: 300px;

`
export default function Sobre() {
    return (
        <DivGeral>
            <DivImagem>
            <Imagem alt="Iago Rafael" src={Me} />
            </DivImagem>
            <TextoSobre>
            <p >Olá 👋, eu sou o Iago Rafael.
                Sou Formado no curso de Analise e Desenvolvimento de Sistemas pela Faculdade Anhanguera.
                <p>Sou uma pessoa muito esforçada e de fácil adaptação.
                Trabalho com Desenvolvimento Web e Mobile utilizando Ferramentas mais Atuais do Mercado como o React e React Native para Desenvolvimento Mobile.</p>
                
            </p>
            </TextoSobre>

        </DivGeral>
    )
}
