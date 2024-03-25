import React from "react";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const { user_name, date, description, company_name, title} = post;

  return (
    <div className="white-bg flex column gap center card">
        {user_name != null ? <p>{user_name}</p> : <p>{company_name}</p> }
        <p>{date}</p>
        <div className="post-content">
            {description}
        </div>
    </div>
  );
};

export default PostCard;

