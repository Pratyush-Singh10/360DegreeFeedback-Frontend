import React, { useEffect, useState } from "react";
import StarRating from "./starRating";
import axios from "axios";
const FeedbackPage = () => {
const[data,setData]=useState([]);
        useEffect(() => {
            axios.get("http://localhost:4545/api/v1/questions/valid")
          .then((response) => setData(response.data));
          console.log(data)
          }, []);
   
    return (  
        <div>

            {data.map((blog)=>(
            <div key={blog.quesId}>
            <h2>{blog.questions}</h2>
            <StarRating/>
            <label>Comment</label><br></br>
            <textarea type="text" placeholder="Enter your comment"></textarea>
</div>
         ))}
        </div>
    );
}
 
export default FeedbackPage;