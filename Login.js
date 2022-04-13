import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    return ( <
        div >
        <
        form action = " "
        method = "post" >
        <
        div className = "Logo" >
        <
        center >
        <
        h3 > LOGIN < /h3>  <
        img src = "https://www.freeiconspng.com/thumbs/login-icon/login-icon-17.jpg"
        alt = "ikonlogin"
        className = "ikon"
        height = "100"
        width = "300" / >
        <
        /center>

        <
        div className = "container" >
        <
        div className = "row justify-content-center" >
        <
        div className = "md-col-6" >
        <
        div className = "card p-4" >
        <
        div className = "card-body" >
        <
        div className = "form-group" >

        <
        label > Username < /label> <
        input type = "text"
        placeholder = "Masukkan Username"
        className = "form-control"
        value = { username }
        onChange = { onChangeUsername }
        />

        <
        label > Password < /label> <
        input type = "password"
        placeholder = "Masukkan Password"
        className = "form-control"
        value = { password }
        onChange = { onChangePassword }
        />

        <
        button className = "btn-smt" > < Link to = '/Navbar/Navbar' > Login < /Link></button >
        <
        /div>

        <
        span className = "bdaf" > Jika belum punya akun ? < Link to = '/Daftar' > Daftar < /Link>disini</span >

        <
        p >
        <
        span className = "frgt-psw" > Lupa < a href = "lupsan.js" > Sandi ? < /a></span >
        <
        /p>  <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>  <
        /div>  <
        /form>  <
        /div>
    )
}

export default Login