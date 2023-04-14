import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import UpdateUser from "./updateUser";
const AdminPage = () => {
    const[details,setDetails]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4545/api/getDetails")
        .then((res)=>{
            setDetails(res.data);
        },[])
    })
 
    return ( 
        <div>
            <h2>Admin page</h2>
            <table className="table">
            <thead className="thead">
               <tr className="tr">
                <th className="th">Employee Name</th>
                <th className="th">Employee Mail</th>
                <th className="th">Employee Role</th>
               </tr> 
            </thead>
            <tbody>
                {details.map((v)=>{
                    return(
                        <tr>
                            <td className="td">{v.name}</td>
                            <td className="td">{v.emailId}</td>
                            <td  className="td">{v.role}</td>
                            <NavLink to={`update/${v.id}`}>Update</NavLink>
                        </tr>
                    )
                })}
                
            </tbody>
            </table>

        </div>

     );
}
 
export default AdminPage;