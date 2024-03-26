import "./style.css";
import JobCard from "./components/job-card";
import axios from "axios";
import {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import { useNavigate } from "react-router-dom";

const Jobs = () =>{
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([])
    const loadJobs = async () => {
    const response = await axios.get(`http://localhost/linkedin/Backend/get_jobs.php`);
    
    setJobs(response.data.jobs);
    localStorage.setItem("jobs", JSON.stringify(response.data));
    };

    useEffect(() => {
    loadJobs();
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
                        Home
                    </span> 

                    <span onClick={ () =>{
                        navigate("/Jobs")
                    }}><u>Jobs</u>
                    </span>

                    <span onClick={ () => {
                        navigate("/Profile")
                    }}>Profile
                    </span>

                </nav>
            </header>

            <section className="flex column gap center">

                <div>
                    {jobs.map((job) => {
                    return <JobCard job={job} key={job.id} />;
                    })}
                </div>


            </section>
        </div>
    )
}

export default Jobs;