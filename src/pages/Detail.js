
import React, { Component } from 'react';
import axios from 'axios';

class Detail extends Component{
	constructor(){
		super();
          this.state={
               list:[],
               item:{}
          };
          
          //异步请求 axios
          axios.post('/api/listLoad')
          .then((res)=>{
               if(!res.code){
                    this.setState ({
                         list:res.data.list
                    }) 
                    var detail = this.state.list.map((elem,index)=> {
                         var url = window.location.search.slice(1);
                         if(elem.positionId == url ){
                              this.setState({
                                   item:this.state.list[index]
                              })
                         }
                    })
               }

          })
	}
	render(){                
		return (
               <div>
                    <header id="header">职位详情
                         <div className="left" onClick={(e)=>{this.handleBack(e)}}>
                              <span className="corner"></span>
                         </div>
                         <div className="right" onClick={(e)=>{this.handleBack(e)}}> 
                              <span className="corner"></span>
                         </div>
                    </header>
                    <div id="content">
                         <div className="postitle">
                           <p className="title">{this.state.item.positionName}</p>
                           <div className="collicon activeable">
                               <span className="icon notcoll"></span>
                               <span className="text">未收藏</span>
                           </div>
                       </div>

                       <div className="detail">
                         <div className="items">
                              <span className="item salary">
                                   <em className="icon"></em>
                                   <span className="text">{this.state.item.salary}</span>
                              </span>
                              <span className="item workaddress">
                                   <em className="icon"></em>
                                   <span className="text">{this.state.item.city}</span>
                              </span>
                              <span className="item jobnature">
                                   <em className="icon"></em>
                                   <span className="text">全职</span>
                              </span>
                              <span className="item workyear">
                                   <em className="icon"></em>
                                   <span className="text">不限</span>
                              </span>
                              <span className="item education">
                                   <em className="icon"></em>
                                   <span className="text">不限</span>
                              </span>   
                         </div>
                         <div className="temptation">职位诱惑：行业龙头,扁平化,行业前景好,期权</div>
                       </div>
                       
                       <div className="company activeable">
                           <img src={'//static.lagou.com/' + this.state.item.companyLogo} alt="" className="logo"/>
                           <div className="desc">
                               <div className="dleft">
                                   <h2 className="title">{this.state.item.companyName}</h2>
                                   <p className="info">{this.state.item.companyFullName}</p>
                               </div>
                              <span className="dright"></span>
                           </div>
                       </div>

                       <div className="positiondesc">
                           <header className="header">
                               职位描述
                           </header>
                           <div className="content">
                               此处写描述
                               岗位职责：

1、 负责B2B自有平台话费、流量充值虚拟产品日常运营维护，主要包括产品订单异常处理等产品种类和价格调整，随时关注平台运行情况，保障业务系统正常运行，

2、 负责对接供应商，监控产品质量，实时收集和分析分析业务及行业数据，对供应产品进行数据分析，实时调整产品运营策略工作，调整和优化产品信息，达到提升销量及利润；

3、 负责与销售渠道平台（天猫、腾讯）等沟通和关系维护；负责与外部上下游重点合作商家进行活动的业务沟通、产品调整与实施保障；

4、 好内部技术研发人员、售后服务人员的沟通协调，协助持续优化平台业务支撑功能，负责新增优化功能的需求分析、测试、上线等各个环节；

任职要求：

1、 大学本科及以上学历，二年以上产品运营及数据分析等相关经验；

2、工作细致、细心，具有良好的沟通协调、数据分析和逻辑思维能力；

3、具有强烈的责任心、敬业精神和团队合作精神，有虚拟产品运营工作经验，或京东、天猫平台同类产品运营经验者优先；

4、由于产品运营时效性要求高，需运营人员密切关注运营情况，即使非工作时间紧急问题需及时发现与处理。不接受者慎投；

5、工作地点在天府新区兴隆湖科学城，明年开通地铁一号线延伸段。
                           </div>
                       </div>

                       <div className="positioneval">
                           <div className="eval-title">
                               面试评价
                              <span id="total">(<span>0</span>)</span>
                           </div>
                           <ul className="list"><li className="list-item-empty list-item">暂无面试评价</li></ul>
                           <a className="eval-all" href="/user/expsList_3874479.html"></a>   
                       </div>

                       <div className="fix_btn_group">
                          <div className="deliver deliver_resume rows_bar">投递简历</div>
                       </div>

                    </div>
                    
               </div>
		)
        
	}
     handleBack(e){
          window.location="/job";
     }
}


export default Detail