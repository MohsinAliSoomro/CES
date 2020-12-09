import React from 'react'
import {RiDashboard3Line} from 'react-icons/ri'
import {FiFileText} from 'react-icons/fi'
import {HiOutlineAnnotation} from 'react-icons/hi'
import {AiOutlineLogout} from 'react-icons/ai' 
function index() {
    return (
        <div className="sidebar-nav">
            <div><RiDashboard3Line size={30} /><span style={{marginLeft:'10px'}}>Dashboard</span></div>
            <div><HiOutlineAnnotation size={30} /><span style={{marginLeft:'10px'}}>Results</span> </div>
            <div><FiFileText size={30} /><span style={{marginLeft:'10px'}}>Application</span></div>
            <div><AiOutlineLogout size={30} /><span style={{marginLeft:'10px'}}>Logout</span></div>
        </div>
    )
}

export default index
