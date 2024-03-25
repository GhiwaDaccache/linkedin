import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import { useNavigate } from "react-router-dom";


const Profile = () =>{
    const navigate = useNavigate();
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
                        Home
                    </span> 

                    <span onClick={ () =>{
                        navigate("/Jobs")
                    }}>Jobs
                    </span>

                    <span onClick={ () => {
                        navigate("/Profile")
                    }}><u>Profile</u>
                    </span>

                </nav>


            </header>

            <section className="flex column gap center">
                <div className="profile h-width white-bg flex column center gap">
                    <div className="f-width h-height">
                        <img src="../../styles/assets/image-1.jpg" />
                    </div>
                    <div className="f-width h-height flex column">
                        <p>First Name</p>
                    </div>
                </div>

                <div className="add-post h-width white-bg flex column gap center">
                    <p>Biography</p> 
                    <div className="post-content">
                        Lorem ipsum
                    </div>
                    <button className="btn-style">edit</button>
                </div>

                <div className="add-post h-width white-bg flex column gap center">
                    <p>Skills</p> 
                    <div className="post-content">
                        Lorem ipsum
                    </div>
                    <button className="btn-style">edit</button>
                </div>

                <div className="add-post h-width white-bg flex column gap center">
                    <p>Experience</p> 
                    <div className="post-content">
                        Lorem ipsum
                    </div>
                    <button className="btn-style">edit</button>
                </div>

                
            </section>
        </div>
    )
}

export default Profile;