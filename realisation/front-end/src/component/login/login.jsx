import React, { useEffect, useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
function Login (){

 const navigate= useNavigate()
 const cookies = new Cookies()

    const[Data, setData] = useState([])
    const[Name, setName] = useState([])
    const[Email, setEmail] = useState([])
    useEffect(()=>{
        
           axios.get("http://127.0.0.1:8000/api/formateur")
           .then(response=>{
            
            setData(response.data)
            console.log(response.data)

           })
    },[])
    const handleChangeName=(e)=>{
        e.preventDefault()
       
        setName(e.target.value)
      
    }
    const  handleChangeEmail=(e)=>{
            setEmail(e.target.value)
        
    }
     const  handleClick=(e)=>{
        e.preventDefault()
           let data = Data
           let name = Name
           let email = Email

           data.map((value)=>{

             if (name == value.tutor_name && email==value.tutor_email) {
                cookies.set('idTutor',value.id)
                return navigate("/Dashbord")

              }
      
       
    })
       
    }
   
    return(
        <div>
            <form action="">
                <input type="text" onChange={handleChangeName} placeholder="Name" /><br/>
                <input type="text" onChange={handleChangeEmail}  placeholder="Email" /><br />
                <button onClick={handleClick}>Login</button>
                
            </form>
        </div>
    )
   
}
export default Login;