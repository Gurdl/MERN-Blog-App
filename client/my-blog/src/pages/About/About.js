import React from 'react'
import "./About.css";
import homeImg from "../../pictures/headerImage.jpg"
export default function About() {
return (
<div className='about'>
    <div className='HomeImage'>
        <img className="about_topImage" src={homeImg}></img>
    </div>
    <div className='about_heading'>My-Blogs</div>
    <div className='About_description'>
        <h1> Why We need blogs and how these are useful?</h1>
        <p>Blog websites serve various purposes and offer a range of benefits for individuals and organizations. Here
            are some reasons why we need blog websites and how they can be useful:</p>
        <ul className="unordered lists">
            <li><b>Information Sharing:</b> Blogs are an excellent platform for sharing information, knowledge, and
                expertise on a particular subject. They allow individuals to communicate their thoughts, experiences,
                and insights with a global audience. This can be helpful for personal expression or for disseminating
                valuable information to others.</li>
            <li><b>Content Marketing: </b> Blogging is a crucial component of content marketing strategies for
                businesses. By consistently publishing high-quality, relevant content, companies can attract and engage
                their target audience. Blogs can help establish a company as an authority in its industry, build trust
                with customers, and ultimately drive sales.</li>
            <li><b> SEO Benefits:</b> Search engines love fresh, relevant content, and blogs provide an opportunity to
                regularly update your website with new material. This can improve your website's search engine ranking
                and increase its visibility, making it easier for people to find your content.</li>
            <li><b>Engagement and Community Building:</b>Blogs often include comment sections where readers can engage
                with the content and each other. This fosters a sense of community and allows for valuable discussions
                and feedback. Building a community around your blog can strengthen your online presence and brand.</li>
            <li><b>Personal Branding:</b>For individuals, especially those in creative or professional fields, a blog
                can serve as a platform to build a personal brand. It allows you to showcase your skills, expertise, and
                unique perspective, which can lead to career opportunities, networking, and recognition in your field.
            </li>
        </ul>
        <h1> How to use My-Blog platform</h1>
        <ol>
            <li><b>For reading Only:</b>There are different types of blogs on the home page , To read and view you do
                not need to login or
                register , you can simply click on the heading and can read the blogs</li>
            <li><b>For writing:</b>To write you must have an account, so resgister with your email and password and then
                you can go the write page
                and can write blogs as you want </li>
            <li><b>Features:</b>
                <ul>
                    <li>You can <b>Edit,Delete and add </b> blogs which only belongs to you.You can not edit or delete others blog posts</li>
                    <li>You can filter the posts by <b>categories and by Auther names</b> by clicking on categories on right side or just clicking the name of authors</li>
                </ul>
            </li>
        </ol>

    </div>

</div>
)
}