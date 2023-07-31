import React, { useContext, useState } from 'react'
import axios from 'axios'
import WriteImg from '../../pictures/post1.jpg'
import './WritePost.css'
import { Context } from '../../Context/Context';
export default function WritePost() {
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const formSubmit = async (e) => {
        console.log("user");
        console.log(user);
        e.preventDefault();
        const newPost = {
            username: user.userName,
            title: title,
            desc: desc
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file);
            newPost.photo = filename
            try {
                // const URL="http://localhost:5000/api/upload"
            
                await axios.post('/upload', data);

            } catch (err) {
                console.log("Cannot upload this file"+err);
                alert("Cannot upload this file, use another")
            }
        }
        try{
            // const URL="http://localhost:5000/api/posts/"
            
           const res= await axios.post("/posts/", newPost);
           console.log("res.data should have id :");
           console.dir(res.data);
           window.location.replace("/post/"+res.data._id)

        }
        catch(error){
            console.log("There is an error while sending the data "+error);
            console.log(newPost)
        }

    }

    return (
        
        <div className='Write'>
            {file && 
             <img src={URL.createObjectURL(file)} className="WriteImage" alt=""></img>
            }
            <form className="WriteForm" onSubmit={formSubmit}>   
                <div className="WriteFormGroup">
                    <label htmlFor='fileInput'>
                        <i className="WriteIcon fa-solid fa-plus fa-lg" ></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: 'none' }} onChange={(e)=>{setFile(e.target.files[0])}}></input>
                    <input type="text" placeholder='Title' className='WriteInput' autoFocus={true} onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div  className="WriteFormGroup">
                    <textarea placeholder='Tell Your story ...' type="text" className='WriteInput WriteText' onChange={(e)=>{setDesc(e.target.value)}}></textarea>
                </div>
                <button type="submit" className='WriteSubmit'>Publish</button>
            </form>

        </div>
    )
}
