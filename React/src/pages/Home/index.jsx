import "./style.css";
import PostCard from "./components/post-card";
import axios from "axios";
import {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

        const loadPosts = async () => {
        const response = await axios.get("http://localhost/linkedin/Backend/get_posts.php?user_id=3");

        setPosts(response.data.posts);
        console.log(response.data.posts)

        localStorage.setItem("posts", JSON.stringify(response.data));
        };

        useEffect(() => {
        loadPosts();
        }, []);

    return (
        <div className="flex column page">
            <header className="white-bg f-width flex align-center gap">
                <FontAwesomeIcon icon={faLinkedin} />
                <div className="search flex">
                    <input type="text" placeholder="Search" />
                    <div></div>
                </div>
                <nav className="gap">
                    <span onClick={ () => {
                        navigate("/home")
                    }}>
                        <u>Home</u>
                    </span> 

                    <span onClick={ () =>{
                        navigate("/Jobs")
                    }}>Jobs
                    </span>

                    <span onClick={ () => {
                        navigate("/Profile")
                    }}>Profile
                    </span>

                </nav>
            </header>

            <section className="flex column gap center">
                <div className="add-post h-width white-bg flex column center gap">
                    <input type="text" placeholder="Write something..." />
                    <div className="gap flex align-center">
                        <button className="btn-style">Discard</button>
                        <button className="btn-fill-style">Post</button>
                    </div>
                </div>

                <div>
                    {posts.map((post) => {
                    return <PostCard post={post} key={post.id} />;
                    })}
                </div>


            </section>
        </div>
    )
}

export default Home;