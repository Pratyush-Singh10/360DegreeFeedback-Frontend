import React, { useEffect, useState } from "react";
import StarRating from "./starRating";
import axios from "axios";
import './feedbackPage.css';

const FeedbackPage = () => {
    const [isOpenCon, setIsOpenCon] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4545/api/questions/checkValid")
            .then((response) => setData(response.data));
        console.log(data)
    }, []);
    const handleFeedBack = () => {
        setIsOpenCon(true)
    }
    return (<>

        <div>
            <button onClick={handleFeedBack}>Give FeedBack</button>

        </div>
        {isOpenCon && <div className='popupContainer' onClick={()=>setIsOpenCon(false)}>
            <div className='popup-boxd'onClick={(e) => {e.stopPropagation()}}>
                <div className="ques">
                    {data.map((blog) =>
                        <div key={blog.quesId}>
                            <p>{blog.questions}</p>
                            <StarRating></StarRating>
                        </div>)
                    }
                </div>
                <div className="cmntBox">
                    <label>Comment</label>
                    <textarea placeholder="Provide the Feedback"></textarea>
                    <button>Submit Feedback</button>
                </div>

            </div>
            </div>
        }





        </>
    );
}

        export default FeedbackPage;