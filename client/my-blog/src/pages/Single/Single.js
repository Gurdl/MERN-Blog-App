import React from 'react'
import './Single.css'
import SideBar from '../../Components/SideBarComp/SideBar'
import SinglePost from '../../Components/SinglePost/SinglePost'
export default function Single() {
  return (
    <div className='single'>
      <SinglePost></SinglePost>
      <SideBar></SideBar>
    </div>
  )
}
