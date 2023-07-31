import React, { useContext, useState } from 'react'
import profilePic from '../../pictures/pic.jpg'
import './Setting.css'
import SideBar from '../../Components/SideBarComp/SideBar'
import axios from 'axios'
import { Context } from '../../Context/Context';
export default function Setting() {
    const { user, dispatch } = useContext(Context);
    const PF="http://localhost:5000/images/"
    const [file, setFile] = useState(null);
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [success,setSuccess]=useState(false);

    const formSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updatedUser = {
            userId:user._id,
            userName:userName,
            password:password,
            email:email,
            profilePic:file
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file);
            updatedUser.profilePic = filename
            try {
                const URL = "http://localhost:5000/api/upload"

                await axios.post(URL, data);
            } catch (err) {
                console.log("Cannot upload this file" + err);
                alert("Cannot upload this file, use another")
            }
        }
        try {
            const res = await axios.put('/users/'+user._id, updatedUser);
            setSuccess(true);
            dispatch({type:"UPDATE_SUCCESS",payload:res.data})
        }
        catch (error) {
            console.log("There is an error while sending the data " + error);
            dispatch({type:"UPDATE_FAILURE"})
        }

    }
    return (
        <div className='Settings'>
            <div className="SettingsWrapper">
                <div className="SettingsTitle">
                    <div className="settingUpdateTitle">
                        Update Account
                    </div>
                    <div className="settingDeleteTitle">
                        Delete Account
                    </div>
                </div>
                <form className="SettingsForm" onSubmit={formSubmit}>
                    <label className='ProfileHeader'>Profile Picture</label>
                    <div className="SettingProfilePic">
                        <img src={file ? URL.createObjectURL(file) : PF+user.profilePic ? PF+user.profilePic:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile-logo&psig=AOvVaw3ifb3d9By_FOVhs7rp00N3&ust=1690665230296000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCbl_eosoADFQAAAAAdAAAAABAJ" } alt="" />
                        <label htmlFor='fileInput'>
                            <i className=" settingsProfileIcon fa-solid fa-circle-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: 'none' }} onChange={(e)=>(setFile(e.target.files[0]))}></input>
                        <div className="details">
                            <label>User Name</label>
                            <input type="text" placeholder={user.username} onChange={(e)=>setuserName(e.target.value)}/>
                            <label>Email</label>
                            <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}/>
                            <label>Password</label>
                            <input type="password" placeholder="......" onChange={(e)=>setPassword(e.target.value)}/>
                            <button className='SettingsBtnSubmit' type="submit">Update</button>
                            {success && <div className='SuccesMsg'>Account is Updated succefully </div>}
                        </div>
                    </div>
                </form>
            </div>
            <SideBar></SideBar>
        </div>
    )
}
