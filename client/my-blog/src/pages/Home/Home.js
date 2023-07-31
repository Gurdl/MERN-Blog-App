import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../../Components/HeaderComp/Header'
import SideBar from '../../Components/SideBarComp/SideBar'
import Posts from '../../Components/PostsComp/Posts'
import axios from "axios"
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
export default function Home() {
  const {search}=useLocation();
  
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    const fetchPosts=async()=>{
      //Fetch all the posts from backend : and show it on the home page 
      //If there is a userQuery then fetch that by user as search , if there is a category then fetch that by category
     const res= await  axios.get("/posts"+search)
     setPosts(res.data)
    }
    fetchPosts();
  },[search])
  return (
    <>
      <Header></Header>
      <div className='home'>
        <Posts posts={posts}></Posts>
        <SideBar></SideBar>

      </div>
    </>

  )
}
