import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import { Context } from '../../Context/Context'
import myImage from '../../pictures/pic.jpg'
import './TopBar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function TopBar() {
    const [isCenterMobileView, setIsCenterMobileView] = useState(false);
    const PF = "https://blog-mern-app-run4.onrender.com/api/images/"
    const { user, dispatch } = useContext(Context);
    function handleLogout(){
        dispatch({ type: 'LOGOUT' });
    };
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    function showNabBar() {
        setIsCenterMobileView(prevState => !prevState);
    }

    return (
        <div className="top">
            <div className="topLeft">
                <i className="fa-brands fa-square-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div className={`Center ${isCenterMobileView ? 'CenterMobileView' : ''}`}>
                <ul className='topList allLinks'>
                    <li className='topListItem linksItems'>
                        <Link to='/' className="link" onClick={()=>{setIsCenterMobileView(false)}}>HOME</Link>
                    </li>
                    <li className='topListItem linksItems'>
                        <Link to='/About' className="link" onClick={()=>{setIsCenterMobileView(false)}}>ABOUT</Link>
                    </li>
                    <li className='topListItem linksItems' onClick={()=>{setIsCenterMobileView(false)}}>CONTACT</li>
                    <li className='topListItem linksItems'>
                        <Link to='/Write' className="link" onClick={()=>{setIsCenterMobileView(false)}}>WRITE</Link>
                    </li>
                    {/* <li className='topListItem linksItems'>
                        <Link to='/Documentation' className="link" onClick={()=>{setIsCenterMobileView(false)}}>DOCUMENTATION</Link>
                    </li> */}
                    <li className='topListItem linksItems' onClick={()=>{handleLogout();setIsCenterMobileView(false)}}>
                        {user ? 'LOGOUT' : ''}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ?
                    <Link to="/Settings"><img className="ProfilePic" src={PF + user.profilePic} alt="" />
                    </Link> :
                    (
                        <>
                            <ul className='topList'>
                                <li className='topListItem'>
                                    <Link to='/Login' className="link" onClick={()=>{setIsCenterMobileView(false)}}>LOGIN</Link>
                                </li>
                                <li className='topListItem'>
                                    <Link to='/Register' className="link" onClick={()=>{setIsCenterMobileView(false)}}>REGISTER</Link>
                                </li>

                            </ul>
                        </>
                    )}
                <i className="fa-solid fa-magnifying-glass"></i>
                {windowWidth < 900 ? <i className="fa-solid fa-grip-lines dottedBtn" onClick={showNabBar}></i> : ""}

            </div>

        </div>
    )
}
