import React, { Component } from 'react';
import axios from 'axios';
import JobList from '../components/JobList';

class Job extends Component{

	constructor(){
		super();
		this.state={
			list:[],
			show_edit:false
		};
		this.turn_to = this.turn_to.bind(this);
		axios.post('/api/listLoad', {l:"你好"})
		  .then((res)=> {
		     if(!res.code){
				  	this.setState({
			   	  list:res.data.list
			   })
		     }
		  });
	}
	render(){
		return (
			 <div>
			 	{this.state.show_edit?<div className="job_edit"><span>编辑</span></div>:<div className="job_edit"><span onClick ={this.turn_to}>去登陆</span></div>}
				<JobList list = {this.state.list}/>
			</div>
			)
        
	}	
	componentWillMount(){
		var name,arr,reg=new RegExp("(^| )user=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg)){
			 name =  unescape(arr[2]);
			}
			if(name != null && name != "null"){
				this.setState({
					show_edit:true
				})
			}
		
	}  
	turn_to(){
		window.location = '/login';
	}
}
export default Job