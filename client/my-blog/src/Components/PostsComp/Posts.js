import React from 'react'
import './Posts.css'
import Post from '../Post/Post'
export default function Posts(props) {
  return (
    <div className='Posts'>
      {props.posts.map((p) => {
        //Map over all the post and get all posts:
        return <Post key={p._id} post={p} />
      })}

    </div>
  )
}
