import React, {Component,useEffect, useState} from 'react'
import MenuIcon from './menu.jpg'
import './Modal.css';
import Modal from './Modal.js';
import { Navbar, Container } from 'react-bootstrap'

function Header(props) {
    const [Modal, setModal] = useState({modal1:false})
        return (
            
                <div className="header">
                    <h1 className="Title-text">PlaceHolder-Posts</h1>
                    <button className="button" id='menuButton' >< img src={MenuIcon}  alt="Кнопка «button»" onClick={()=>setModal({
                        ...Modal, modal1:true
                    })}>
                    </img></button>
                </div>
        )
    
}


export default Header