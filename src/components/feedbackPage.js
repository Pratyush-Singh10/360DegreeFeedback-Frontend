import React, { useEffect, useState } from "react";
import StarRating from "./starRating";
import axios from "axios";
import './feedbackPage.css';

const FeedbackPage = () => {
    const[quesIdArray,setquesIdArray]=useState([])
    const[ratingArray,setRatingArray]=useState([])
    const[rating,setRating]=useState(0)
    const [isOpenCon, setIsOpenCon] = useState(false);
    const [data, setData] = useState([]);
    const [comment,setComment] = useState("");
    useEffect(() => {
        axios.get("http://localhost:4545/api/questions/checkValid")
            .then((response) => setData(response.data));
        console.log(data)
    }, []);
    const handleFeedBack = () => {
        setIsOpenCon(true)
    }

    const update=(value,id1)=>{
            quesIdArray.push(id1);
            ratingArray.push(value);
    }
    const func=()=>{
        var map=new Map();
        for(var i=0;i<quesIdArray.length;i++){
            map.set(quesIdArray[i], ratingArray[i]);
        }
        console.log((map));
        
        const obj = {
            comment:comment,
        }
        quesIdArray.map((v,i)=>{
            obj[`${v}`]=ratingArray[i];
        })
        console.log(obj);
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
                            <select onChange={(e)=>update(e.target.value,blog.quesId)}>
                            <option value="" select hidden>Rating</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            </select>
                        </div>)
                    }
                </div>
                <div className="cmntBox">
                    <label>Comment</label>
                    <textarea placeholder="Provide the Feedback" id="text" onChange={(e)=>setComment(e.target.value)}></textarea>
                    <button onClick={(e)=>func()}>Submit Feedback</button>
                </div>

            </div>
            </div>
        }





        </>
    );
}

        export default FeedbackPage;