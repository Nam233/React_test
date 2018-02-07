import React, { Component } from 'react';


class Mine extends Component{
	constructor(){
		super();
		this.state={
			name:"null"
		}
		
	}
	render(){
		//console.log(this.props.match.);
		// let {match} = this.props;
		
		return (
			 <div className = "mine_wrap">
              	<div className = "mine_login">
              		<button >{this.state.name == null||this.state.name=="null"?<span onClick={this.login} >登录/注册</span>:<span onClick = {this.logout}>{this.state.name} (注销)</span>}</button>
              	</div>
              	<div className = "mine_other">
              		<button>投递</button>
              		<button>面试</button>
              		<button>邀约</button>
              		<button>收藏</button>
              	</div>
             </div>
			)
        
	}
	componentWillMount(){
		var name,arr,reg=new RegExp("(^| )user=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg)){
			 name =  unescape(arr[2]);
			}
		this.setState({
			name
		})
	}
	login(){
		window.location = '/login'
	}
	logout(){
		document.cookie = "user=null";
		window.location.reload();
	}
}


export default Mine