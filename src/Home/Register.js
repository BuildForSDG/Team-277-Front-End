import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "./css/register.css";

export default class Register extends Component{

    render(){
        return(
            <div className="row">
                <div className="col-md-6 reg-form-1">
                    <h3>BUY FRESH PRODUCE FROM LOCAL FARMERS</h3>
                    <h3>SELL FRESH PRODUCE AS A FARMER</h3>
                    <br/><br/>
                    <h2>FRESH <span>X</span></h2>
                </div>
                <div className="col-md-6 reg-form-2">
                    <h3>Sign Up</h3>
                    <form>
                    <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter firstname" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter surname" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter contact number"/>
                        </div>
                        <div className="form-group">
                        <label>Gender:</label><br/>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"/>
                        <label className="form-check-label" >Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"/>
                        <label className="form-check-label">Female</label>
                        </div>
                        </div>
                        <div className="form-group">
                        <select className="form-control">
                         <option>Select role</option>
                         <option>Farmer</option>
                         <option>Customer</option>
                        </select>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Confirm password"/>
                        </div>
                        <div className="row">
                        <div className="col text-left">
                            <input type="submit" className="btn btn-reg btn-block" style={{backgroundColor:'#000',color:'#fff'}} value="Sign Up" />
                        </div>                        
                        <div className="col text-right">
                        <Link className="btn btn-reg btn-block"  to={`/login`} >Login</Link>
                       </div>
                       </div>
                    </form>
                    
                </div>
            </div>
        )
    }
}