import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
const textoOpcoes = ['ABOUT','SKILLS','PROJECTS']

const ListaTexto = styled.li`
    margin-right: 10px;
    color: aliceblue;
    text-decoration: none;

    &:hover {
        opacity: .4;
        transform: scale(0.9);
       }
`

const linkStyle = {
    textDecoration: 'none', 
    color: 'blue', 
  };
  
export default function Navegacao(){
    return(
        <nav>
        <ul>
        {textoOpcoes.map((texo)=>(
            <Link to={`/${texo.toLowerCase()}`} style={linkStyle}><ListaTexto><p>{texo}</p></ListaTexto></Link>
        ))}                
        </ul>
    </nav>
    )
}