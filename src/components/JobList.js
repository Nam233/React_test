import React, { Component } from 'react';

import JobItem from './JobItem';

class Joblist extends Component{
	constructor(){
		super();
		this.state = {
			list:7
		}
		this.addList = this.addList.bind(this);
	}
	render(){
		var items = this.props.list.map(function(elem,index) {
			return <JobItem item={elem} key={index} />
		})
		var items_real = [];
		for(let i = 0;i<this.state.list;i++){
			items_real.push(items[i]);
		}
		return (

            <ul className="list">
               {
               	items_real.length?items_real:`
			   	  正在加载中。。。
			   `
			   }
			   {items_real.length<items.length?<div className="addmore" onClick ={this.addList}>加载更多</div>:""}
			   
			</ul>

			)
 
	}
	addList(){
		this.setState({
			list : this.state.list+7
		})
	}
}


export default Joblist