import React from "react";
import styled from "styled-components";
import Brasil from "../../assets/brazil-flag_3909370.png";
import EUA from "../../assets/united-states_197484.png";

import LogoImagem from "../Logo";
import Navegacao from "../Nav";
import { Link } from "react-router-dom";

const Cabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const HeaderRodape = styled.div`

    display: flex;
    
.header-rodape p {
    margin-right: 10px;

}
`

const Lista = styled.ul`

.ul{display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    justify-content: center;
    flex-grow:1;
}
`
const ImageIdioma = styled.img`
  height: 2rem;
  width: auto;
  margin: 5px;
  cursor: pointer;
`;
const icones = [Brasil, EUA];

export default function header() {
    return (
        <Cabecalho>
            <Link to="/">
                <LogoImagem />
            </Link>
            <Navegacao />
            <HeaderRodape>
                <Lista>
                    {icones.map((icone) => (
                        <li>
                            <ImageIdioma
                                src={icone}
                                alt="imagens Idiomas"
                            />
                        </li>
                    ))}
                </Lista>
            </HeaderRodape>
        </Cabecalho>
    );
}
