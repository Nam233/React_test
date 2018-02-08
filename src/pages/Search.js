import React, { Component } from 'react';
import JobList from '../components/JobList';
import axios from 'axios';

class Search extends Component{
	constructor(){
		super();
		this.state= {
			list:[{"cityList":["北京","上海","广州","深圳","成都","杭州"],"name":"热门城市","nameStr":"热门城市"},{"cityList":["保定","北海","北京","包头","长春","成都","常德","承德","重庆","长沙","常州","沧州","滁州","郴州","东莞","大连","东营","德阳","德州","达州","佛山","阜阳","福州"],"name":"","nameStr":"ABCDEF"},{"cityList":["桂林","贵阳","广州","赣州","淮安","邯郸","哈尔滨","合肥","黄冈","呼和浩特","海口","衡阳","河源","杭州","惠州","湖州","菏泽","金华","江门","荆门","济南","济宁","嘉兴","荆州"],"name":"","nameStr":"GHIJ"},{"cityList":["昆明","廊坊","丽水","洛阳","临沂","连云港","兰州","柳州","泸州","马鞍山","绵阳","梅州","宁波","南昌","南充","南京","南宁","南通","南阳"],"name":"","nameStr":"KLMN"},{"cityList":["莆田","青岛","黔东南","秦皇岛","清远","泉州","日照"],"name":"","nameStr":"OPQR"},{"cityList":["韶关","上海","石家庄","遂宁","汕头","绍兴","沈阳","三亚","深圳","苏州","泰安","天津","唐山","太原","台州","泰州"],"name":"","nameStr":"STUV"},{"cityList":["潍坊","武汉","芜湖","威海","乌鲁木齐","无锡","温州","西安","香港","厦门","西宁","邢台","新乡","信阳","襄阳","咸阳","徐州","银川","盐城","宜昌","营口","烟台","岳阳","扬州","淄博","珠海","镇江","湛江","肇庆","中山","遵义","郑州","漳州","株洲"],"name":"","nameStr":"WXYZ"}]
			,show:false	,
			city:"全国"	,
			info:"",
			job_list:[],
			list_show:[],
			history:localStorage.search?JSON.parse(localStorage.search):[]
		}
		axios.post('/api/listLoad', {l:"你好"})
		  .then((res)=> {
		     if(!res.code){
				  	this.setState({
			   	  job_list:res.data.list
			   })
		     }
		  });
		this.change_city = this.change_city.bind(this);
		this.handleInfo = this.handleInfo.bind(this);
		this.search = this.search.bind(this);
		this.search_click = this.search_click.bind(this);
		this.click_history = this.click_history.bind(this);
		this.del_history = this.del_history.bind(this);
	}
	render(){
		var uls = this.state.list.map((elem, index)=> {
			return <Ul item={elem} key = {index} change = {this.change_city}/>
		})
		var his = this.state.history.map((elem, index)=> {
			return <p onClick={this.click_history} className ="search_history" key={index}>{elem}<span onClick={this.del_history} data-id={elem}>X</span></p>
		})
		return (
			 <div>
                <div className = "search_title">
                	<div className = "search_city" onClick = {(e)=>this.handleShow(e)}>{this.state.city}</div>
                	<input className="search_input form-control" value={this.state.info} onChange={this.handleInfo} type = "text" placeholder = "搜索职位或公司"></input>
                	<button className = "search_btn " onClick = {this.search_click}></button>
                </div>
                {this.state.show?uls:""}
                {this.state.list_show.length == 0?his:""}
                {this.state.list_show?<div><JobList list = {this.state.list_show}/></div>:""}
             </div>
			)   
	}/*删除历史记录*/
	del_history(e){
		var storage=window.localStorage;
		var history = storage.search?JSON.parse(storage.search):[];
		history.forEach((elem,index)=>{
			if(elem == e.target.getAttribute("data-id")){
				history.splice(index,1);
			}
		});
		storage.search = JSON.stringify(history);
		this.setState({
			history:JSON.parse(storage.search)
		});
	}
	/*点击历史记录查询*/
	click_history(e){
		/*截取有效搜索内容*/
		this.setState({
			info:e.target.innerText.slice(0,-1)
		},()=>{
			this.search_click();
		});
	}
	/*历史记录缓存*/
	search_click(){
		this.search();
		var storage=window.localStorage;
		var history = storage.search?JSON.parse(storage.search):[];
		history.forEach((elem,index)=>{
			if(elem == this.state.info.trim()){
				history.splice(index,1);
			}
		})
		if(this.state.info!=""){
			history.unshift(this.state.info.trim());
		}
		storage.search = JSON.stringify(history) ;
		this.setState({
			history:JSON.parse(storage.search)
		});
		
	}
	/*模糊查找 历史记录保存*/
	search(){
		this.setState({
			show:false
		})
		var listByCity = []//匹配城市
		this.state.job_list.map((elem, index)=>{
			if(elem.city == this.state.city||this.state.city == "全国"){
				listByCity.push(elem) ;
			}	
		})
		if(this.state.info ==""){
			this.setState({
		    	list_show:[]
		    })
		    return
		}
		var arr = [];
    	var patt = new RegExp(this.state.info);//模糊查询实现
    	for(var i = 0; i < listByCity.length; i++){
	        if(patt.test(listByCity[i].companyName) || patt.test(listByCity[i].positionName)){
	            arr.push(listByCity[i]);
	        }
	    }//调用jobList模块
	    this.setState({
	    	list_show:arr
	    })

	}
	handleInfo(e){

		this.setState({
			info:e.target.value
		},() => {
 		this.search();
		});
		

	}
	change_city(str){
		this.setState({
			city:str,
			show:!this.state.show
		})
	}
	handleShow(e){
		this.setState({
			show:!this.state.show
		})
	}
};

class Ul extends Component{
	constructor(){
		super();
	}
	render(){
		var lis = this.props.item.cityList.map((elem, index)=> {
			return <Li item = {elem} key = {index} change = {this.props.change}/>;
		})
		return(
				<ul className="search_ul">
					<p>{this.props.item.nameStr}</p>
					{lis}
				</ul>
			)

	}
}
class Li extends Component{
	constructor(){
		super();
		this.state={
			city:""
		}
		this.handleli = this.handleli.bind(this);
	}
	render(){

		return(
				<li onClick={(e)=>this.handleli(e)}>{this.props.item}</li>
			)

	}
	handleli(e){
		this.props.change(e.target.innerText);
	}
}

export default Search;