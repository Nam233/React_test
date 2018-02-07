import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch,Redirect,NavLink} from 'react-router-dom';
import axios from 'axios';
class Login extends Component{
	constructor(){
		super();
		this.state = {
			userId : "",
			psw : ""
		}
	}
	render(){

		return (
            <div className = "login_container">
            	<div className = "title"><p>登录拉勾</p><Link to = "/regist">注册</Link></div>
            	<input placeholder = "请输入已验证的手机号或邮箱" value = {this.state.userId} onChange={(e)=>{this.handleUserId(e)}}></input>
            	<input placeholder="请输入密码" type="password" value = {this.state.psw} onChange={(e)=>{this.handlePsw(e)}}></input>
            	<button className="btn" onClick = {(e)=>{this.login(e)}} >登录</button>
            	<Link to = "#">手机号登录</Link>
            </div>
			)
 
	}
	handleUserId(e){
		this.setState({
			userId:e.target.value
		})
	}
	handlePsw(e){
		this.setState({
			psw:e.target.value
		})
	}
	login(e){
		if(this.state.psw == ""||this.state.userId == ""){
			alert("请输入全部的信息，谢谢");
			return;
		}
		var userId = this.state.userId;
		var psw = this.state.psw;
		//异步请求了 axios
        axios.post('/api/login', {
		    userId,
		    psw
		  }).then( (res)=> {
		     if(!res.code){
                 //页面跳转，路由的切换 user
                window.location = "/mine";
                document.cookie = "user="+res.data.list.userId;
		     }
		  })
	}
}	

export default Login