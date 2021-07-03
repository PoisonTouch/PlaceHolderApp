import logo from './logo.svg';
import './App.css';
import './Components/Modal.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Modal from './Components/Modal';
import Posts from './Pages/Posts';
import Post from './Pages/Post';
import Users from './Pages/Users';
import { useState } from 'react';

function App() {
  
  return (
    <div>
      <Users></Users>
    </div>
  );
}

export default App;
