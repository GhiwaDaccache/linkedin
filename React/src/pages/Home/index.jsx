import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; 

const Home = () =>{
    return (
        <div className="flex column page">
            <header className="white-bg f-width flex align-center gap">
                <FontAwesomeIcon icon={faLinkedin} />
                <div className="search flex">
                    <input type="text" placeholder="Search" />
                    <div></div>
                </div>
                <nav>
                    <a href="#" ><u>Home</u></a>
                    <a href="#" className="text-white">Jobs</a>
                    <a href="#" className="text-white">Profile</a>
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

                <div className="add-post h-width white-bg flex column gap center">
                    <p>Hanady Daccache</p> 
                    <p>Position</p>
                    <div className="post-content">
                        Lorem ipsum
                    </div>
                </div>

                
            </section>
        </div>
    )
}

export default Home;