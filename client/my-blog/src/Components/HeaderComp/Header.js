import React from 'react'
import OurImg from '../../pictures/headerImage.jpg' 
import "./Header.css"
export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitlesSm'>React & node </span>
        <span className='headerTitlesLg'>Blog </span>
      </div>
      <img className="BlogPic"src={OurImg} alt=" "></img>
    </div>
  )
}
