import React, {Component} from 'react'
import MenuIcon from './menu.jpg'
import { Navbar, Container } from 'react-bootstrap'
export default class Header extends Component {
    render() {
        return (
            
                <div className="header">
                    <h1 className="Title-text">PlaceHolder-Posts</h1>
                    <button className="button">< img src={MenuIcon}  alt="Кнопка «button»"></img></button>
                </div>
            
        )
    }
}