import logo from "./logo.svg";
import "./App.css";
import "./Components/Modal.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import Posts from "./Pages/Posts";
import Post from "./Pages/Post";
import Users from "./Pages/Users";
import "./Components/PostCard.css";
import { useState } from "react";
import LoadPosts from "./Components/LoadPosts";
import { Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/posts" component={Posts}></Route>
        <Route path="/users" component={Users}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
