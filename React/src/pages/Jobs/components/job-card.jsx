import React from "react";
import axios from "axios";


const JobCard = ({ job }) => {
  const {description, name, date, id} = job;

  return (
    <div className="flex column gap center">
      <div className="white-bg flex column gap center card">
          <p>{name}</p>
          <p>{date}</p>
          <div className="post-content">
              {description}
          </div>
      <div>
        <button className="btn-fill-style" onClick={async () => {                 
          try {
              const formData = new FormData();
              formData.append('user_id', JSON.parse(localStorage.getItem("user_id")));  
              formData.append('job_id', id);  
              formData.append('date', new Date());



              const response = await axios.post(
                  "http://localhost/linkedin/Backend/apply_jobs.php",
                  formData
              );
                      if (response.data.status === "success") {
                          alert("Application sent");
                      }
                      } catch (error) {
                      console.error(error);
                      }
                      }}
                      >Apply
          </button>
        </div>
          
      </div>
    </div>
            );
          };

export default JobCard;

