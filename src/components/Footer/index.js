import React from "react";
import styled from "styled-components";

import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const links = [
    {
        title: 'Instagram',
        url: 'https://www.instagram.com/devmaaster/',
        icon: <FiInstagram />
    },
    {
        title: 'linkedin',
        url: 'https://www.linkedin.com/in/iago-rafael-b93ab9244/',
        icon: <FiLinkedin />
    },
    {
        title: 'Github',
        url: 'https://github.com/iago8311',
        icon: <FiGithub />
    }
];

const Rodape = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #f0f0f0;
    text-align: center;
    padding: 10px;
`
const Ancoras = styled.a`

    margin: 0 10px;
    text-decoration: none;
    color: #000; /* cor do texto dos links */
  
  &:hover {
    color: #00f; /* cor do texto dos links ao passar o mouse */
  }
  
`
export default function Footer() {
    return (
        <Rodape>
            {links.map((link, index) => (
                <Ancoras href={link.url} target="_blank" key={index} rel="noreferrer" className="links">
                    <span>{link.title}</span>
                    {link.icon}
                </Ancoras>
            ))}
        </Rodape>
    )
}