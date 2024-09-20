import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdUpload } from "react-icons/md";
import '../assets/style/TopNav.css'
import logo from '../assets/media/f-logo.png'

function TopNav({ toggleModal }) {

    return (
        <>
            <nav>
                <div className="topnav-left">
                    <img src={logo} alt="" />
                    <h2>ANU</h2>
                </div>
                <form className="topnav-search">
                    <input type="text" placeholder='Search' />
                    <button type='submit'><CiSearch size={21} /></button>
                </form>
                <div className="topnav-right">
                    <button onClick={toggleModal}>Upload <MdUpload size={17} /></button>
                </div>
            </nav>
        </>
    )
}

export default TopNav
