import React from 'react'
import pic from '../../pictures/post1.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './Post.css'
export default function Post({ post }) {
    const PF = "https://blog-mern-app-run4.onrender.com/api/images/"
    const createdAtDate = new Date(post.createdAt);
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
        <div className='post'>
            <div className='Photo'>
            {post.photo &&
                (
                    <img className="postPic" src={PF + post.photo ? PF + post.photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzKdpSJyngovASqcV29FekpMklEb0Tw_yKZdR608j_IbMGSYsSDkhZp3QseYNcqaNd6g&usqp=CAU"} alt=""></img>
                )}
            </div>
            <div className="desc">
                <div className="postInfo">
                    {post.categories.map((c) => {
                        return <span className="postCategory" key={c}>{c}</span>
                    })}
                </div>
                <Link to={`post/${post._id}`} className="link">
                    <div className="postTitle">{post.title} </div>
                </Link>
                <div className="postDate">{formattedDate}</div>
                <Link to={`/?user=${post.username}`} className="link">
                    <span className="singlePostAuthor">
                        Author :&nbsp;<b>{post.username} </b>
                    </span>
                </Link>
                <p className="postDisc">{post.desc}
                </p>
                <hr />

            </div>
        </div>
    )
}
