import React, { useContext, useEffect, useState } from 'react'
import pic from '../../pictures/post1.jpg'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './SinglePost.css'
import axios from 'axios';
import { Context } from '../../Context/Context';
const PF = "http://localhost:5000/images/"
export default function SinglePost() {
    const { user, dispatch } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false)
    //Get Post By id 
    const [post, setPost] = useState([])
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    useEffect(() => {
        // Get the  post data from backend by this id:
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)  //Here path would be an id like : 64c15f27ad784035157e4f50
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };

        getPost();
    }, [])
    const createdAtDate = new Date(post.createdAt);
    const handleDelete = async (e) => {
        e.preventDefault();
        try {

            const postId = post.id;
            const res = await axios.delete("/posts/" + post._id, {
                data: {
                    username: user.userName
                }
            })
            window.location.replace("/");

        } catch (error) {
            console.log(error)
        }

    }
    const handleUpdate=async()=>{
        try {

            const postId = post.id;
            const res = await axios.put("/posts/" + post._id, {
                    username: user.userName,
                    title:title,
                    desc:desc
            })
            window.location.reload();
            setUpdateMode(false);

        } catch (error) {
            console.log(error)
        }

    }
    // Format the date to a readable string
    const formattedDate = createdAtDate.toLocaleString("en-US", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    });
    return (
        <div className='SinglePost'>
            <div className="SinglePostWrapper">
                {post.photo &&
                    <img className="SinglePostImg"
                        src={PF + post.photo} alt=""></img>
                }

                {updateMode ? <input type='text' value={title} className='SinglePostTitleInput' onChange={(e)=>(setTitle(e.target.value))}></input> :
                    <h1 className='SinglePostTitle'>
                        {title}
                        {post.username === user?.userName && (<div className="singlePostEditContainer">
                            <i className="SinglePostIcon fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                            <i className="SinglePostIcon fa-regular fa-solid fa-trash " onClick={handleDelete}></i>
                        </div>)}

                    </h1>}
                <div className="singlePostInfo">
                    <Link to={`/?user=${post.username}`} className="link">
                        <span className="singlePostAuthor">
                            Author:<b>{post.username} </b>
                        </span>
                    </Link>
                    <span>
                        {formattedDate}
                    </span>
                </div>
                {updateMode ? 
                <div className='UpdateDesc'>
                    <textarea className="singlePostDiscInput" value={desc} onChange={(e)=>(setDesc(e.target.value))}></textarea>
                    <button className="SinglePostUpdate" onClick={handleUpdate}>Update</button>
                </div>
                    
                :
                    <div className="singlePostDisc">
                        <p>{desc}</p>
                    </div>
                }

            </div>
        </div>
    )

}
