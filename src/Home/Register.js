import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import cookies from 'js-cookie';
import "./css/register.css";

export default class Register extends Component{
    constructor(props){
        super(props);

        this.state = {name:'', surname:'', email:'', phone_number:'', gender:'',
                      role_id:'', password:'', pass_confirm:'', errors:{}};      
    }

    handleSubmit = (e) => {

        e.preventDefault();

        const data = {name:this.state.name, surname:this.state.surname, email:this.state.email, phone_number:this.state.phone_number, 
                      gender:this.state.gender, role_id:this.state.role_id, password:this.state.password, pass_confirm: this.state.pass_confirm };
               
        axios.post("http://127.0.0.1:8000/api/auth/register", data)
              .then(res => {
                  cookies.set("token",res.data.access_token);
                  cookies.set("token",res.data.user);
                  this.props.history.push('/login');
              })
              .catch(e => this.setState({ errors: e.response.data.errors }));                                    
    }

    handleInputChange = (e) => {
        const i = e.target.name;
        const value = e.target.value;
        this.setState = ({[i]: value});
        console.log(this.state);
    }

    render(){

        const error = this.state.errors

        return(
            <div className="row">
                <div className="col-md-6 reg-form-1">
                    <h3>BUY FRESH PRODUCE FROM LOCAL FARMERS</h3>
                    <h3>SELL FRESH PRODUCE AS A FARMER</h3>
                    <br/><br/>
                <h2>FRESH <span>X {this.state.name}</span></h2>
                </div>
                <div className="col-md-6 reg-form-2">
                    <h3>Sign Up</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Your firstname" onChange={e =>this.setState({name: e.target.value})} />
                            {error.name? <small className="text-danger">{error.name}</small>:''}
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="surname" placeholder="Your surname" onChange={e =>this.setState({surname: e.target.value})}/>
                            {error.surname? <small className="text-danger">{error.surname}</small>:''}
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="email" placeholder="Your email" onChange={e =>this.setState({email: e.target.value})}/>
                            {error.email? <small className="text-danger">{error.email}</small>:''}
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="phone_number" placeholder="Your contact number" onChange={e =>this.setState({phone_number: e.target.value})}/>
                            {error.phone_number? <small className="text-danger">{error.phone_number}</small>:''}
                        </div>
                        <div className="form-group">
                        <label>Gender:</label><br/>        
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" value="Male" onChange={e =>this.setState({gender: e.target.value})}/>
                        <label className="form-check-label" >Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" value="Female" onChange={e =>this.setState({gender: e.target.value})}/>
                        <label className="form-check-label">Female</label>
                        </div>
                        {error.gender? <div><small className="text-danger">{error.gender}</small></div>:''}
                        </div>
                        <div className="form-group">                      
                        <select className="form-control" name="role_id" onChange={e =>this.setState({role_id: e.target.value})}>
                         <option>Select role</option>
                         <option value="1">Farmer</option>
                         <option value="2">Customer</option>
                        </select>
                        {error.role_id? <small className="text-danger">{error.role_id}</small>:''}
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Password" onChange={e =>this.setState({password: e.target.value})}/>
                            {error.password? <small className="text-danger">{error.password}</small>:''}
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="pass_confirm" placeholder="Confirm password" onChange={e =>this.setState({pass_confirm: e.target.value})}/>
                            {error.pass_confirm? <small className="text-danger">Password Confirmation is required.</small>:''}
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