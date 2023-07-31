import React from 'react'
import './Documents.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
export default function Documents() {
    return (
        <div className='Docs'>
            <h1 className='Heading'>Documentation</h1>
            <Swiper
                cssMode={true}
                loop={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='Uses '>
                        <div className='UsesHeading'>How to use:</div>
                        <div className='wrapperContent'>

                            <ol >
                                <span>Follow these steps :</span>
                                <li>To view and read all blogs please visit to a home page  &nbsp;
                                    <Link to="/" className='link links2'>Home</Link>, You do not need login and Register.
                                </li>
                                <li>To see the Whole post Just click on the Title , It will open with new page</li>
                                <li>If You have Account:
                                    <ul>
                                        <li>Go To the <Link to="/Write" className='link links2'>Write</Link> and add an image ,Title and desc and the hit Publish, It will create a post by your name and current time</li>
                                        <li>This post will be visible to the <Link to='/' className='link links2'>Home</Link></li>
                                        <li>You can click on the title of a Post, it will open that in new Page
                                            <ul> <span className='inlineHeading'>Additional Functionality: Edit and Delete Post</span>
                                                <li type='desc'>If You are the <b>Author</b> of the Post , You can <b>edit </b>,<b>delete</b>  the post By clicking the two icons on right side</li>
                                                <li type='desc'>But If you are not the Author You can not see that icons </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>Otherwise Make an account:
                                    <ul>
                                        <li>To write a post , Please <Link to="/Register" className='link links2'>Register</Link>,Try To use easy UserName and email and password</li>
                                        <li>After that You will see the <Link to="/Login" className='link links2'>Login</Link> page , Just Login with proper credetenials and Now You can write any post As you want</li>
                                    </ul>
                                </li>
                                <li>Filtering The post</li>
                                <ul>
                                    <li>You can Filter The post By <Link to="/About" className='link links2'>Categories</Link>, If Post of that Category exist You will see that</li>
                                    <li>You can also click on the User Name , And can get filter Posts By that User  Name as well</li>
                                </ul>
                                <li>Update User Account</li>
                                <ul>
                                    <li>You can add new Profile Picture , And can update your UserName and password. Please Do no leave the update columns empty</li>
                                </ul>
                            </ol>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="checklist">
                    <h2 className='ChecklistHeading'>CheckList</h2>
                    <span className="wrapperContent">
                        <ul>
                            <li type="square"> <span className='ComponentsFeatures'>Number Of components:7,</span> These are : TopBar, SideBar,Header,Post,Posts,Single,Documentations.All components Use state and props
                            </li>
                            <li type="square"><span className='ComponentsFeatures'> Filtering </span>
                                <ol>
                                    <li>Filter Post by userName</li>
                                    <li>Filter Post by category</li>
                                    <li>Edit the Post If you are the user of the Post</li>
                                    <li>Delete the Post If you are the user of the Post</li>
                                    <li>Update user Credentials</li>
                                </ol>
                            </li>
                            <li type="square"><span className='ComponentsFeatures'>Routing and Pages:</span>
                                <ol className='link2'>
                                    <li ><Link to='/' className='link links2'>Home</Link></li>
                                    <li><Link to='/About' className='link links2'>About</Link></li>
                                    <li><Link to='/Documentation' className='link links2'>Documentation</Link></li>
                                </ol>
                            </li>
                            <li type="square"><span className='ComponentsFeatures'>Conditional Routing and Rendering</span>
                                For Some pages There is Conditional Routing is also used
                                <ul> <span className='featureSpan2'> If User Is Login </span>
                                    <li type='circles'> Then There will be a <Link to='/Logout' className='link links2'>Logout</Link> Page visible</li>
                                    <li type='circles'> Then On top right side there will be a profile pic and   <Link to='/Settings' className='link links2'>Settings</Link> page to Update the Account</li>
                                </ul>
                                <ul> <span className='featureSpan2'> If User Is Not Login/Registe </span>
                                    <li type='circles'> Then There will be a No <Link to='/Logout' className='link links2'>Logout</Link> Page visible</li>
                                    <li type='circles'> Then On top right side there will be a
                                        <Link to='/Login' className='link links2'> Login</Link> and
                                        <Link to='/Register' className='link links2'> Register </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </span>
                    <div className='restApi wrapperContent'>
                        <span>
                            <ul>
                                <li type="square"><span className='ComponentsFeatures'>REST API </span></li>
                                I have used main 3 models User,Category and posts:
                                <ul>
                                    <li className='featureSpan2'><b>USER</b></li>
                                    <ol>
                                        <li><b>Get()</b> to get the user details by its id </li>
                                        <li><b>Post ()</b> Method to register by user credentials </li>
                                        <li> <b>Post()</b> to check login</li>
                                        <li> <b>Put()</b> to upadate the user details</li>
                                        <li> <b>Delete()</b> to Delete user account</li>

                                    </ol>
                                    <li className='featureSpan2'> <b>Posts</b></li>
                                    <ol>
                                        <li><b>Get()</b> to get the posts by its id </li>
                                        <li><b>Get ()</b> to get all posts or by category or by userName </li>
                                        <li> <b>Post()</b> to create a new post</li>
                                        <li> <b>Put()</b> to upadate the posts only if username matches </li>
                                        <li> <b>Delete()</b> to Delete posts by id</li>

                                    </ol>
                                    <li className='featureSpan2'><b>CATEGORY</b></li>
                                    <ol>
                                        <li><b>Get()</b> to get the categories </li>
                                    </ol>
                                </ul>
                                <li type="square"><span className='ComponentsFeatures'>Mongo Db </span></li>
                                I have used MongoDb to store the data. There are mainly three models I have used for this project name users,category and posts

                            </ul>

                        </span>

                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide><div>
                    <h2 className='ChecklistHeading'>Extra Bonus</h2>
                    <ul>
                        <li type="square"><span className='ComponentsFeatures'>Context API </span></li>
                        <span>I have used some extra Api including Context Api for user only. This is because A user was required in every component so instead of doing
                            pop drilling I just passed that as context Api so that it can be used easily.
                        </span>
                        <li type="square"><span className='ComponentsFeatures'>Swiper Js </span></li>
                        <span>I have used Used swiper Js for this documentation .Because I want to make this documentation as good as possible 
                        </span>
                        <li type="square"><span className='ComponentsFeatures'>bcrypt </span></li>
                        <span>I have use bcrypt because I want to save the password in mogogo Db in hash form. So that no body can read that password directly from database
                        </span>
                    </ul>

                </div></SwiperSlide>
            </Swiper>

        </div >

    )
}
