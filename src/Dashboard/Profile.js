import React, {Component} from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Profile extends Component{

    handleForm = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <div className="">
               <h1 className="">Profile</h1>
            </div>
        )
    }
}