import {createContext, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {usrState} from "react";
axios.defaults.baseURL = "http://127.0.0.1:8000/api";
export const briefContext = createContext();
export const briefProvider = ({children}) => {
    const [briefs,setBriefs] = useState([])

    const getAllBriefs = async(){
        const result = await axios.get('/brief')
        setBriefs(result.data)
    }

    const [Brief,setBrief] useState({
        nameBrief:"";
    })





}

