import React, {Component,useEffect, useState} from 'react'
import MenuIcon from './menu.svg'
import './Modal.css';
import Modal from './Modal.js';
import { Navbar, Container } from 'react-bootstrap'

function Header(props) {
    const [modal, setModal] = useState({modal1:false})
        return (
            
                <div className="header">
                    <h1 className="Title-text" >{props.title}</h1>
                    <button className="button" id='menuButton' >< img src={MenuIcon}  alt="Кнопка «button»" onClick={()=>setModal({
                        ...Modal, modal1:true
                    })}></img></button>
                    <Modal title1='Posts' title2='Users' isOpened={modal.modal1}
                    onModalClose={()=>setModal({...modal,modal1:false})}></Modal>
                </div>
        )
    
}


export default Header