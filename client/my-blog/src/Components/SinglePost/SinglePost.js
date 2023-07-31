import React, { useContext, useEffect, useState } from 'react'
import pic from '../../pictures/post1.jpg'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './SinglePost.css'
import axios from 'axios';

import { Context } from '../../Context/Context';
export default function SinglePost() {
    const [imageDataFetched, setImageDataFetched] = useState(false);
    const { user, dispatch } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false)
    const [imageData, setImageData] = useState(null); // State to store image data
    //Get Post By id 
    const [post, setPost] = useState([])
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await axios.get("/posts/" + path);
                setPost(res.data);
                setTitle(res.data.title);
                setDesc(res.data.desc);
            } catch (error) {
                console.log("Error fetching post:", error);
            }
        };
        getPost();
    }, [path]);
    useEffect(() => {
        if (post.photo && !imageDataFetched) {
          getImage(); // Fetch the image data only when it's not fetched already and photo is available
          setImageDataFetched(true); // Mark imageDataFetched as true after fetching the image data
        }
      }, [post, imageDataFetched]);
    const getImage = async () => {
        try {
            console.log(post.photo);
            const res = await axios.get("/images/" + post.photo, {
                responseType: 'arraybuffer', // Set the response type to 'arraybuffer'
            });
            const base64Data = btoa(
                new Uint8Array(res.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ''
                )
            );
            setImageData("data:image/jpeg;base64," + base64Data);
            console.log("Hello world");
        } catch (error) {
            console.log("Error fetching image:", error);
        }
    }




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
    const handleUpdate = async () => {
        try {

            const postId = post.id;
            const res = await axios.put("/posts/" + post._id, {
                username: user.userName,
                title: title,
                desc: desc
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
                {imageData && <img className="SinglePostImg" src={imageData} alt=""></img>}


                {updateMode ? <input type='text' value={title} className='SinglePostTitleInput' onChange={(e) => (setTitle(e.target.value))}></input> :
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
                        <textarea className="singlePostDiscInput" value={desc} onChange={(e) => (setDesc(e.target.value))}></textarea>
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
