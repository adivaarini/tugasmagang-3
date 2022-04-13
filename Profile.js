import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
    return ( <
        div className = "Welcome section" >
        MY PROFILE <
        h9 className = "welcome-intro" >
        <
        br / >
        Halo teman - teman, Namaku adalah Adiva Arini Puteri. <
        br / >
        <
        p / >
        Saat ini aku masih menjadi seorang Mahasiswa Teknik Informatika di Universitas ARS Bandung <
        p / >
        <
        /h9>

        <
        button > < Link to = '/Navbar' > Home < /Link></button >
        <
        /div>
    )
}

export default Profile;