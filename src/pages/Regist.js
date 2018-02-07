import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch,Redirect,NavLink} from 'react-router-dom';
import axios from 'axios';
class Regist extends Component{
	constructor(){
		super();
		this.state={
			userId :"",
			pwd : "",
			yzm : ""
		}
		this.register = this.register.bind(this);
	}
	render(){

		return (
            <div className = "login_container">
            	<div className = "title"><p>注册拉勾</p><Link to = "/login" >登录</Link></div>
            	<div className = "con">
            		<span>0086</span>
            		<input placeholder = "请输入常用手机号" value = {this.state.userId} onChange={(e)=>{this.handleUserId(e)}}></input>
            	</div>
            	<input placeholder = "请证明你不是机器人" value = {this.state.yzm} onChange={(e)=>{this.handleYzm(e)}}></input>
            	<input placeholder="请输入收到的验证码" value = {this.state.pwd} onChange={(e)=>{this.handlePsw(e)}}></input>
            	<button className="btn" onClick = {this.register}>注册</button>
            	<p>注册拉勾代表你已同意<span>《拉勾用户协议》</span></p>
            </div>
			)
	}
	handleUserId(e){
		this.setState({
			userId:e.target.value
		})
	}
	handleYzm(e){
		this.setState({
			yzm:e.target.value
		})
	}
	handlePsw(e){
		this.setState({
			pwd:e.target.value
		})
	}
	register(e){
		if(this.state.userId ==""||this.state.yzm ==""||this.state.pwd ==""){
			alert("请输入全部的信息，谢谢");
			return;
		}
		var params = {};
		params.userId = this.state.userId;
		params.pwd = this.state.pwd;
		axios.post('/api/regist',params).then((res)=>{
				 if(!res.code){
					alert("注册成功");
					window.location = "/login"
		     	}
		});
		// axios.post('/api/regist',params,function(data){
		// 	console.log(data);
		// }).then((res)=> {
		//      if(!res.code){
		// 		console.log(res);
		//      }
		//   });
	}
}


export default Regist