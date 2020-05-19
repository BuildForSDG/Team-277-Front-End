import React, {Component} from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Profile extends Component{

    handleForm = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <div className="col text-center">
               <h3 className="">Profile</h3>
            </div>
        )
    }
}