import logo from './logo.svg';
import './App.css';
import './Components/Modal.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Modal from './Components/Modal';
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState({modal1:false})

  return (
    <div>
      <Header></Header>
      <Modal title1='Posts' title2='Users' isOpened={modal.modal1}>

      </Modal>
    </div>
  );
}

export default App;
