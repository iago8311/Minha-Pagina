import React from "react"
import Logo from "../../assets/devMaster.svg"
import Brasil from "../../assets/brazil-flag_3909370.png"
import EUA from "../../assets/united-states_197484.png"
import './style.css'

const textoOpcoes = ['ABOUT','SKILLS','PROJECTS']
const icones = [Brasil,EUA]

export default function header() {
    return (
        <header className="App-header">
            <div className="div-logo">
            <img src={Logo} alt='imagem do logo' className="imagemLogo" />
            <p className="textoImagem"><strong>Dev Master</strong></p>
            </div>            
            <nav>
                <ul>
                {textoOpcoes.map((texo)=>(
                    <li className="listaTexto"><p>{texo}</p></li>
                ))}                
                </ul>
            </nav>
            <div className="header-rodape">
                <ul >
                {icones.map((icone)=>(
                    <li><img src={icone} alt="imagens Idiomas" className="imageIdioma"/></li>
                ))}
                </ul>
            </div>
        </header>
    )
}



