import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "./Register.css";

export default class Register extends Component{

    render(){
        return(
            <div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <h3>BUY FRESH PRODUCE FROM LOCAL FARMERS</h3>
                    <h3>SELL FRESH PRODUCE AS A FARMER</h3>
                    <br/><br/>
                    <h2>FRESH <span>X</span></h2>
                </div>
                <div class="col-md-6 login-form-2">
                    <h3>Register</h3>
                    <form>
                    <div class="form-group">
                            <input type="text" class="form-control" placeholder="Enter firstname" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Enter surname" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Enter email" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Enter contact number" value="" />
                        </div>
                        <div class="form-group">
                        <label>Gender:</label><br/>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label class="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                        </div>
                        <div class="form-group">
                        <select class="form-control">
                         <option>Select role</option>
                         <option>Farmer</option>
                         <option>Customer</option>
                        </select>
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Sign Up" />
                        </div>
                        
                        <br/>
                        <div class="form-group">
                        <Link className="btn btn-reg btn-block" to={`/login`} >Login</Link>
                       </div>
                    </form>
                    
                </div>
            </div>
        </div>
        )
    }
}