import React, { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../Context/Context'
import myImage from '../../pictures/pic.jpg'
import './TopBar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function TopBar() {
    const PF="http://localhost:5000/images/"
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT'});
    };

    return (
        <div className="top">
            <div className="topLeft">
                <i className="fa-brands fa-square-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="Center">
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link to='/' className="link">HOME</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/About' className="link">ABOUT</Link>
                    </li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>
                        <Link to='/Write' className="link">WRITE</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/Documentation' className="link">DOCUMENTATION</Link>
                    </li>
                    <li className='topListItem' onClick={handleLogout}>
                        {user ? 'LOGOUT' : ''}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ?
                    <Link to="/Settings"><img className="ProfilePic" src={PF+user.profilePic} alt="" />
                    </Link> :
                    (
                        <>
                            <ul className='topList'>
                                <li className='topListItem'>
                                    <Link to='/Login' className="link">LOGIN</Link>
                                </li>
                                <li className='topListItem'>
                                    <Link to='/Register' className="link">REGISTER</Link>
                                </li>

                            </ul>
                        </>
                    )}
                <i className="fa-solid fa-magnifying-glass"></i>

            </div>

        </div>
    )
}
