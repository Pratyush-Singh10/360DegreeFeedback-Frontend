import { useEffect, useState } from "react";
import axios from "axios";
const UpdateUser = () => {
    const x=window.location.pathname;
    const arr = x.split('/');
    const id = arr[arr.length-1];
    const[name,setName]=useState('');
    const[email,setEmail]=useState('')
    const[role,setRole]=useState('')

    useEffect(()=>{
        axios.get("http://localhost:4545/api/getDetails/user/"+id)
        .then((res)=>{
            console.log(res.data)
            setName(res.data.name)
            setEmail(res.data.emailId)
        },[])
    })
    const handleChanges=(event)=>{
        event.preventDefault();
        const user={
            name:name,
            email:email,
            role:role
        }
        console.log(user);
         axios.put('http://localhost:4545/api/update/'+id,user)
         window.location.pathname='/';
    }
    return (  
        <div>
            <div>Name: {name}</div>
                <div>EmailId: {email}</div>
                <label>Role</label>
                {/* <input value={role} onChange={(e)=>setRole(e.target.value)}></input> */}
                <select value={role} onChange={(e)=>setRole(e.target.value)}>
                <option value="" select hidden>Select</option>
                <option value={"Admin"} >Admin</option>
                <option value={"User"}>User</option>
                {console.log(role)}
                </select>
                <button onClick={handleChanges}>Submit</button>
        </div>
    );
}
 
export default UpdateUser;