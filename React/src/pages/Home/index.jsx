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
    const [postDetails, setPostDetails] = useState({description: "", title: ""});


        const loadPosts = async () => {
        let user_id = JSON.parse(localStorage.getItem("user_id"));
        const response = await axios.get(`http://localhost/linkedin/Backend/get_posts.php?user_id=${user_id}`);

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
                    <input type="text" placeholder="Write something..." 
                        onChange={(e) => {
                            setPostDetails({
                              ...postDetails,
                              description: e.target.value,
                              title: "post"
                            });
                          }}
                    />
                    <div className="gap flex align-center">
                        <button className="btn-style">Discard</button>
                        
                        <button className="btn-fill-style" onClick={async () => {

                            
                            try {
                            
                            const formData = new FormData();
                            formData.append('description', postDetails.description);
                            formData.append('title', postDetails.title);
                            formData.append('date', new Date());
                            formData.append('user_id', JSON.parse(localStorage.getItem("user_id"))); 
                            // formData.append('company_id', JSON.parse(localStorage.getItem("company_id"))); 
                            

                            const response = await axios.post(
                                "http://localhost/linkedin/Backend/add_post.php",
                                formData
                            );

                            console.log(response.data);

                            if (response.data.status === "success") {
                                alert("Post succesfully added");
                            }
                            } catch (error) {
                            console.error(error);
                            }
                        }}
                    >Post</button>
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