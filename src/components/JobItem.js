
import React, { Component } from 'react';

class JobItem extends Component{
	constructor(){
		super();

		this.turn_to = this.turn_to.bind(this);
	}
	render(){
		let {item} = this.props;
		return (
            <li className="activeable list-item" onClick = {this.turn_to} data-positionid="{item.positionId}" data-companyid="{item.companyId}">
	            <img src={'https://static.lagou.com/'+item.companyLogo} className="item-logo" />
	            <div className="item-desc">
	                <p className="item-title">{item.companyName}</p>
	                <p className="item-info">
	                    <span className="item-pos">
	                        {item.positionName}
	                    </span>
	                    <span className="item-salary">{item.salary}</span>
	                </p>
	                <p className="item-time">{item.createTime}</p>
	            </div>
	        </li>
			)
 
	}
	turn_to(){
		var _id = this.props.item.positionId;
		 window.location = "/detail?"+_id;
	}
}

export default JobItem