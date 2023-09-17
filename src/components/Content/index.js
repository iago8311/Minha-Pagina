import React from "react";
import styled from "styled-components";


const MeusDados = styled.div`

  display: flex;
  flex-direction: column;  
  justify-content: center;  
  align-items: center;  
  margin-top: 150px;  
  color: white;

`
export default function Content(){
    return(
        <MeusDados>
          <h2>Iago Rafael </h2>
          <p>Desenvolvedor Web e Mobile</p>
        </MeusDados>
    )
}