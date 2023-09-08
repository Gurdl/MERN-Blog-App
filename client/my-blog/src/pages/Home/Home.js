import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../../Components/HeaderComp/Header'
import SideBar from '../../Components/SideBarComp/SideBar'
import Posts from '../../Components/PostsComp/Posts'
import axios from "axios"
import Loader from '../../Components/Loader/Loader'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
export default function Home() {
  const { search } = useLocation();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Show the loading spinner immediately
        setLoading(true);
        const res = await axios.get("https://blog-mern-app-run4.onrender.com/api/posts" + search);
        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      {loading ? <Loader></Loader> :
        <>
          <Header></Header>
          <div className='home'>
            <Posts posts={posts}></Posts>
            <SideBar></SideBar>

          </div>
        </>}

    </>

  )
}
