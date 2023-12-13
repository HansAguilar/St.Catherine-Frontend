import React from 'react'
import "../css/dashboard.scss";

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Settings = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Header/>
                Settings container
            </div>
        </div>

       
    )
}

export default Settings