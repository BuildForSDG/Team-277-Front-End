import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "./Login.css";

export default class Login extends Component{

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
                    <h3>Login</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Login" />
                        </div>
                        <div class="row">
                        
                        <div class="col text-left">
                            <a href="#" class="ForgetPwd" value="Login">Forget Password?</a>
                        </div>
                        </div>
                        <br/>
                        <div class="form-group">
                        <Link className="btn btn-reg btn-block" to={`/register`} >Register</Link>
                       </div>
                    </form>                   
                </div>
            </div>
        </div>
        )
    }
}