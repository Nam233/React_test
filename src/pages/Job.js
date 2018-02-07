import React, { Component } from 'react';
import axios from 'axios';
import JobList from '../components/JobList';

class Job extends Component{

	constructor(){
		super();
		this.state={
			list:[]
		};
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
				<JobList list = {this.state.list}/>
			</div>
			)
        
	}	  
}
export default Job