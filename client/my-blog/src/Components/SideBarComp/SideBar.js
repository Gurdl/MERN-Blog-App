import React, { useEffect,useContext } from 'react'
import { useState } from 'react';
import axios from "axios"
import OurPic from '../../pictures/pic.jpg'
import { Context } from '../../Context/Context';
import { v4 as uuidv4 } from 'uuid';
import './SideBar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default function SideBar() {
  const PF="https://blog-mern-app-run4.onrender.com/api/images/"
  const { user, dispatch } = useContext(Context);
  const[cat,setCat]=useState([]);
  useEffect(()=>{
   const getCats=async()=>{
        const res = await axios.get("/categories")  //Here path would be an id like : 64c15f27ad784035157e4f50
         setCat(res.data);
    };
    getCats();

  },[])
  return (
    <div className='SideBar'>
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span><br></br>

        <img src={ user ? PF+user.profilePic : "https://www.glideit.org/images/starting_a_blog.png"} className="sideBarImage" alt=''></img>
        <p className='BioInfo'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          vitae consequuntur. Cumque esse neque eaque, aspernatur animi dolorem,
          doloribus accusantium voluptas porro ipsa repellendus ullam quasi aut ab vel molestias.
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          {cat.map((c)=>(
            <Link to={`/?cat=${c.name}`} key={c._id}className="link">
             <li className="sideBarListItem">{c.name}</li>
            </Link>
            
          ))}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">Follow us </span>
        <div className="sideBarsocial">
          <i className="fa-brands fa-square-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-pinterest"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  )
}
