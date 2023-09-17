import React from "react"
import Logo from "../../assets/devMaster.svg"
import './style.css'
const textoOpcoes = ['ABOUT','FAVORITOS','PROJECTS']
export default function header() {
    return (
        <header className="App-header">
            <img src={Logo} alt='imagem do logo' className="imagemLogo" />
            <p className="textoImagem"><strong>Dev Master</strong></p>
            <nav>
                <ul className="opcoes">
                {textoOpcoes.map((texo)=>(
                    <li className="opcao"><p>{texo}</p></li>
                ))}                
                </ul>
            </nav>
        </header>
    )
}

