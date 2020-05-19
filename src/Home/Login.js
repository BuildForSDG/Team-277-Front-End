import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import cookies from 'js-cookie';
import "./css/login.css";

export default class Login extends Component{

    constructor(props){
        super(props);

        this.state = {email:'', password:'', errors:''};
    }

    handleForm = (e) => {
        e.preventDefault();
        const data = {email:this.state.email, password:this.state.password}

        axios.post("http://localhost:8000/api/auth/login", data)
        .then(res => {
            cookies.set("token",res.data.access_token);
            cookies.set("token",res.data.user);
            this.props.history.push('/profile');
        })
        .catch(e => this.setState({ errors: e.response.data.errors }));

        //this.props.history.push('/profile');
    }

    handleInput = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        const name = e.target.name;
        const value = e.target.value;
        this.setState = ({[name]:value});
    }

  render() {

    const error = this.state.errors

    return(
      <div className="container login-container">
      <div className="row">
          <div className="col-md-6 login-form-1">
              <h3>BUY FRESH PRODUCE FROM LOCAL FARMERS</h3>
              <h3>SELL FRESH PRODUCE AS A FARMER</h3>
              <br/><br/>
              <h2>FRESH <span>X</span></h2>
          </div>
          <div className="col-md-6 login-form-2">
              <h3>Login</h3>
              <form onSubmit={this.handleForm}>
                  {error? <div className="alert alert-danger"> {error} </div> :''}
                  <div className="form-group">
                      <input type="email" className="form-control" name="email" placeholder="Your Email" onChange={e =>this.setState({email: e.target.value})}/>
                  </div>
                  <div className="form-group">
                      <input type="password" className="form-control" name="password" placeholder="Your Password" onChange={e =>this.setState({password: e.target.value})} />
                  </div>
                  <div className="form-group">
                      <input type="submit" className="btnSubmit" style={{backgroundColor:'#000',color:'#fff'}} value="Login" />
                  </div>
                  <div className="row">
                  
                  <div className="col text-left">
                      <a href="#" className="ForgetPwd" value="Login">Forget Password?</a>
                  </div>
                  </div>
                  <br/>
                  <div className="form-group">
                  <Link className="btn btn-reg btn-block" to={`/register`} >Register</Link>
                 </div>
              </form>                   
          </div>
      </div>
  </div>
    );
  }
}