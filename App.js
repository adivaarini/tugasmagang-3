import React from 'react';
import './App.css';
import './Navbar/Navbar.css';
import Navbar from './Navbar/Navbar';
import Login from './components/Login';
import Profile from './components/Profile';
import TodoList from './components/TodoList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return ( <
        div className = 'todo-app' >
        <
        BrowserRouter >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Login }
        /> <
        Route path = "/Navbar"
        component = { Navbar }
        /> <
        Route path = "/Profile"
        component = { Profile }
        /> <
        Route path = "/TodoList"
        component = { TodoList }
        /> <
        /Switch> <
        /BrowserRouter> <
        /div>
    );
}

export default App;