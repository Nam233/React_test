var express = require('express');
var app  = express();
var bodyParser = require('body-parser');
//使用插件
app.use(bodyParser.json())//处理post请求的参数为json格式
app.use(bodyParser.urlencoded({ //处理post请求为form表单格式
   extended: true
}));

app.post('/api/login',function(req,res){
	let userId = req.body;
	res.json({
		code:0,
		list:userId
	})
});
app.post('/api/regist',function(req,res){
	let userId = req.body;
	res.json({
		code:0,
		list:userId
	})
});
//职位详情假数据
app.post('/api/listLoad',function(req,res){
	res.json({
		code:0,
		list:[
					{
						"logger":{
							"traceCapable":true,
							"name":"com.lagou.entity.mobile.MobilePosition"
						},
						"positionId":3879687,
						"positionName":"天猫店长",
						"city":"北京",
						"createTime":"今天 09:17",
						"salary":"10k-20k",
						"companyId":130264,
						"companyLogo":"i/image2/M00/06/8F/CgotOVnKGwCAXe2BAAA0Riy2ksc489.png",
						"companyName":"352空气净化器",
						"companyFullName":"北京三五二环保科技有限公司"
					},
					{
						"logger":{
							"traceCapable":true,
							"name":"com.lagou.entity.mobile.MobilePosition"
						},
						"positionId":3871150,
						"positionName":"ios开发",
						"city":"淮安",
						"createTime":"今天 09:16",
						"salary":"6k-10k",
						"companyId":292400,
						"companyLogo":"i/image2/M00/24/92/CgoB5lobdhiAVO1CAABv1qyddRo933.jpg",
						"companyName":"同城享购",
						"companyFullName":"江苏思跑特网络科技有限公司"
					},
					{
						"logger":{
							"traceCapable":true,
							"name":"com.lagou.entity.mobile.MobilePosition"
						},
						"positionId":3871176,
						"positionName":"java开发",
						"city":"淮安",
						"createTime":"今天 09:16",
						"salary":"6k-8k",
						"companyId":292400,
						"companyLogo":"i/image2/M00/24/92/CgoB5lobdhiAVO1CAABv1qyddRo933.jpg",
						"companyName":"同城享购",
						"companyFullName":"江苏思跑特网络科技有限公司"
					},
					{
						"logger":{
							"traceCapable":true,
							"name":"com.lagou.entity.mobile.MobilePosition"
						},
						"positionId":3872822,
						"positionName":"服装批版师",
						"city":"深圳",
						"createTime":"今天 09:16",
						"salary":"6k-12k",
						"companyId":83442,
						"companyLogo":"image1/M00/39/46/Cgo8PFWoh2iAGKIRAABFPNzWG-E518.PNG?cc=0.7104756835712367",
						"companyName":"TOUCH",
						"companyFullName":"如斯（深圳）服饰有限公司"
					},
					{
						"logger":{
							"traceCapable":true,
							"name":"com.lagou.entity.mobile.MobilePosition"
						},
						"positionId":3879218,
						"positionName":"硬件工程师",
						"city":"上海",
						"createTime":"今天 09:16",
						"salary":"15k-20k",
						"companyId":246971,
						"companyLogo":"i/image/M00/5D/F9/CgpFT1mTsSSAZhQzAABYVY9PuMc449.png",
						"companyName":"Vechain",
						"companyFullName":"上海唯链信息科技有限公司"
					},
					{
						"logger":{
							"traceCapable":true,
							"name":"com.lagou.entity.mobile.MobilePosition"
						},
						"positionId":3879114,
						"positionName":"旅游顾问",
						"city":"郑州",
						"createTime":"今天 09:15",
						"salary":"3K-6K",
						"companyId":293338,
						"companyLogo":"i/image2/M00/25/92/CgotOVodGLeAX_gbAABYLYS90ww988.jpg",
						"companyName":"诚友假期",
						"companyFullName":"平遥诚友旅行社有限公司郑州分公司"
					},
					{
						"logger":{
							"traceCapable":true,
							"name":"com.lagou.entity.mobile.MobilePosition"
						},
						"positionId":3879452,
						"positionName":"旅游计调",
						"city":"郑州",
						"createTime":"今天 09:15",
						"salary":"3k-5k",
						"companyId":293338,
						"companyLogo":"i/image2/M00/25/92/CgotOVodGLeAX_gbAABYLYS90ww988.jpg",
						"companyName":"诚友假期",
						"companyFullName":"平遥诚友旅行社有限公司郑州分公司"
					},
					{
						"logger":{
							"traceCapable":true,
							"name":"com.lagou.entity.mobile.MobilePosition"
						},
						"positionId":3873292,
						"positionName":"外套设计师",
						"city":"广州",
						"createTime":"今天 09:14",
						"salary":"6k-8k",
						"companyId":22069,
						"companyLogo":"image1/M00/00/29/Cgo8PFTUXGqAfJXHAADP2fEqLS0921.jpg",
						"companyName":"骆驼服饰",
						"companyFullName":"广东骆驼服饰有限公司"
					},
					{
						"logger":{
							"traceCapable":true,
							"name":"com.lagou.entity.mobile.MobilePosition"
						},"positionId":3871074,"positionName":"产品助理","city":"深圳","createTime":"今天 09:14","salary":"10k-15k","companyId":129639,"companyLogo":"i/image/M00/2C/41/Cgp3O1c5JN6AMvq0AAALBMOmNzw622.jpg","companyName":"优加互联","companyFullName":"深圳市优加互联科技有限公司"},
					{
						"logger":{
							"traceCapable":true,
							"name":"com.lagou.entity.mobile.MobilePosition"
						},
						"positionId":3876183,
						"positionName":"商务BD经理",
						"city":"广州",
						"createTime":"今天 09:14",
						"salary":"6k-12k",
						"companyId":51472,
						"companyLogo":"i/image/M00/8D/63/Cgp3O1iG0JiAIdntAAAtivqUeaA44.jpeg",
						"companyName":"车主无忧",
						"companyFullName":"广州小迈网络科技有限公司"
					},
					{
						"logger":{
							"traceCapable":true,
							"name":"com.lagou.entity.mobile.MobilePosition"
						},
						"positionId":3874356,
						"positionName":"UI-UE设计师",
						"city":"北京",
						"createTime":"今天 09:13",
						"salary":"8k-15k",
						"companyId":57353,
						"companyLogo":"i/image/M00/02/D4/CgqKkVad8jiAIDHrAAGK0MmIVNs370.jpg",
						"companyName":"中移在线服务有限公司",
					"companyFullName":"中移在线服务有限公司"
					},
					{
						"logger":{
							"traceCapable":true,
							"name":"com.lagou.entity.mobile.MobilePosition"
						},
						"positionId":3874386,
						"positionName":"UI-UE设计师",
						"city":"郑州",
						"createTime":"今天 09:13",
						"salary":"7k-14k",
						"companyId":57353,
						"companyLogo":"i/image/M00/02/D4/CgqKkVad8jiAIDHrAAGK0MmIVNs370.jpg",
						"companyName":"中移在线服务有限公司",
						"companyFullName":"中移在线服务有限公司"},
					{
						"logger":{
							"traceCapable":true,
							"name":"com.lagou.entity.mobile.MobilePosition"
						},
						"positionId":3880677,
						"positionName":"Python数据专家",
						"city":"广州",
						"createTime":"今天 09:13",
						"salary":"15k-25k",
						"companyId":16831,
						"companyLogo":"i/image/M00/02/AB/CgqKkVaXX_6AaLKaAAAX52Kvjjg750.jpg",
						"companyName":"武汉佰钧成技术有限公司",
					"companyFullName":"武汉佰钧成技术有限责任公司"
					},
					{
						"logger":{
							"traceCapable":true,
							"name":"com.lagou.entity.mobile.MobilePosition"
						},
						"positionId":3875982,
						"positionName":"高级运维工程师",
						"city":"北京",
						"createTime":"今天 09:12",
						"salary":"10k-15k",
						"companyId":3546,
						"companyLogo":"image1/M00/00/09/Cgo8PFTUWBKACRFoAACK5d6otd4230.jpg",
						"companyName":"光宇游戏",
						"companyFullName":"北京光宇在线科技有限责任公司"
					},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3913185,"positionName":"深度学习研发工程师","city":"上海","createTime":"今天 20:12","salary":"20k-30k","companyId":189579,"companyLogo":"i/image/M00/08/8D/CgpFT1jkV-OAGkMMAAAK3SyeDoU982.jpg","companyName":"Versa","companyFullName":"上海懿天网络科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3913213,"positionName":"新媒体运营","city":"上海","createTime":"今天 20:12","salary":"15k-20k","companyId":189579,"companyLogo":"i/image/M00/08/8D/CgpFT1jkV-OAGkMMAAAK3SyeDoU982.jpg","companyName":"Versa","companyFullName":"上海懿天网络科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3882446,"positionName":"资深前端开发工程师","city":"上海","createTime":"今天 20:01","salary":"15k-30k","companyId":1403,"companyLogo":"i/image/M00/00/F2/Cgp3O1ZcCReAA5uDAAAJbV2Q6qA261.jpg","companyName":"爱回收","companyFullName":"上海悦易网络信息技术有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3884064,"positionName":"技术专家/高级技术专家","city":"杭州","createTime":"今天 19:42","salary":"20k-40k","companyId":79829,"companyLogo":"i/image/M00/19/01/CgpEMlj52yyAQT3MAABysfHnJwY977.png","companyName":"飞猪","companyFullName":"浙江去啊网络技术有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3914416,"positionName":"售前技术支持工程师","city":"深圳","createTime":"今天 19:40","salary":"15k-25k","companyId":160669,"companyLogo":"i/image/M00/B3/F9/CgqKkVi9DLmAIgVwAABCWhxluHM876.jpg","companyName":"SpeakIn","companyFullName":"深圳势必可赢科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3914443,"positionName":"解决方案工程师","city":"深圳","createTime":"今天 19:40","salary":"15k-25k","companyId":160669,"companyLogo":"i/image/M00/B3/F9/CgqKkVi9DLmAIgVwAABCWhxluHM876.jpg","companyName":"SpeakIn","companyFullName":"深圳势必可赢科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3874410,"positionName":"产品实施工程师（针对2018届毕业生）","city":"北京","createTime":"今天 19:08","salary":"5k-8k","companyId":149332,"companyLogo":"i/image/M00/5C/A8/Cgp3O1fklquATzfZAAAZGUmnhFM787.png","companyName":"中青博联","companyFullName":"中青博联整合营销顾问股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3874388,"positionName":"产品售前工程师（针对2018届毕业生）","city":"北京","createTime":"今天 19:08","salary":"5k-8k","companyId":149332,"companyLogo":"i/image/M00/5C/A8/Cgp3O1fklquATzfZAAAZGUmnhFM787.png","companyName":"中青博联","companyFullName":"中青博联整合营销顾问股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3875354,"positionName":"客户经理/BD","city":"上海","createTime":"今天 19:08","salary":"8k-15k","companyId":82300,"companyLogo":"i/image/M00/57/03/CgpFT1mHXqGAAJ_XAAAeWoM2Rjg933.png","companyName":"寓小二","companyFullName":"上海和住信息科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3913714,"positionName":"课程顾问 Come on","city":"北京","createTime":"今天 19:04","salary":"10k-20k","companyId":102212,"companyLogo":"i/image/M00/4C/31/Cgp3O1ehsCqAZtIMAABN_hi-Wcw263.jpg","companyName":"达内集团","companyFullName":"达内时代科技集团有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3913725,"positionName":"电话专员/电话邀约 Come on","city":"北京","createTime":"今天 19:04","salary":"6k-8k","companyId":102212,"companyLogo":"i/image/M00/4C/31/Cgp3O1ehsCqAZtIMAABN_hi-Wcw263.jpg","companyName":"达内集团","companyFullName":"达内时代科技集团有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3881299,"positionName":"商务运营主管","city":"上海","createTime":"今天 19:01","salary":"7k-12k","companyId":6636,"companyLogo":"image1/M00/00/0E/Cgo8PFTUWCWAOQHbAABtwKGNZK8276.png","companyName":"携程","companyFullName":"携程计算机技术（上海）有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3881301,"positionName":"日语商拓专员","city":"上海","createTime":"今天 19:01","salary":"6k-10k","companyId":6636,"companyLogo":"image1/M00/00/0E/Cgo8PFTUWCWAOQHbAABtwKGNZK8276.png","companyName":"携程","companyFullName":"携程计算机技术（上海）有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3879031,"positionName":"高级java工程师","city":"北京","createTime":"今天 18:56","salary":"25k-45k","companyId":39934,"companyLogo":"image1/M00/33/F0/CgYXBlWVHo2AJ2kfAADcOU-43sg621.jpg","companyName":"每日优鲜","companyFullName":"北京每日优鲜电子商务有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3914343,"positionName":"市场/商务拓展实习生","city":"上海","createTime":"今天 18:55","salary":"2k-3k","companyId":18643,"companyLogo":"i/image/M00/56/00/CgqKkVfJN62Abp6YAACITarCMOk756.jpg","companyName":"YHOUSE","companyFullName":"上海悦会信息科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3913185,"positionName":"深度学习研发工程师","city":"上海","createTime":"今天 20:12","salary":"20k-30k","companyId":189579,"companyLogo":"i/image/M00/08/8D/CgpFT1jkV-OAGkMMAAAK3SyeDoU982.jpg","companyName":"Versa","companyFullName":"上海懿天网络科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3913213,"positionName":"新媒体运营","city":"上海","createTime":"今天 20:12","salary":"15k-20k","companyId":189579,"companyLogo":"i/image/M00/08/8D/CgpFT1jkV-OAGkMMAAAK3SyeDoU982.jpg","companyName":"Versa","companyFullName":"上海懿天网络科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3882446,"positionName":"资深前端开发工程师","city":"上海","createTime":"今天 20:01","salary":"15k-30k","companyId":1403,"companyLogo":"i/image/M00/00/F2/Cgp3O1ZcCReAA5uDAAAJbV2Q6qA261.jpg","companyName":"爱回收","companyFullName":"上海悦易网络信息技术有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3884064,"positionName":"技术专家/高级技术专家","city":"杭州","createTime":"今天 19:42","salary":"20k-40k","companyId":79829,"companyLogo":"i/image/M00/19/01/CgpEMlj52yyAQT3MAABysfHnJwY977.png","companyName":"飞猪","companyFullName":"浙江去啊网络技术有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3914416,"positionName":"售前技术支持工程师","city":"深圳","createTime":"今天 19:40","salary":"15k-25k","companyId":160669,"companyLogo":"i/image/M00/B3/F9/CgqKkVi9DLmAIgVwAABCWhxluHM876.jpg","companyName":"SpeakIn","companyFullName":"深圳势必可赢科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3914443,"positionName":"解决方案工程师","city":"深圳","createTime":"今天 19:40","salary":"15k-25k","companyId":160669,"companyLogo":"i/image/M00/B3/F9/CgqKkVi9DLmAIgVwAABCWhxluHM876.jpg","companyName":"SpeakIn","companyFullName":"深圳势必可赢科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3874410,"positionName":"产品实施工程师（针对2018届毕业生）","city":"北京","createTime":"今天 19:08","salary":"5k-8k","companyId":149332,"companyLogo":"i/image/M00/5C/A8/Cgp3O1fklquATzfZAAAZGUmnhFM787.png","companyName":"中青博联","companyFullName":"中青博联整合营销顾问股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3874388,"positionName":"产品售前工程师（针对2018届毕业生）","city":"北京","createTime":"今天 19:08","salary":"5k-8k","companyId":149332,"companyLogo":"i/image/M00/5C/A8/Cgp3O1fklquATzfZAAAZGUmnhFM787.png","companyName":"中青博联","companyFullName":"中青博联整合营销顾问股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3875354,"positionName":"客户经理/BD","city":"上海","createTime":"今天 19:08","salary":"8k-15k","companyId":82300,"companyLogo":"i/image/M00/57/03/CgpFT1mHXqGAAJ_XAAAeWoM2Rjg933.png","companyName":"寓小二","companyFullName":"上海和住信息科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3913714,"positionName":"课程顾问 Come on","city":"北京","createTime":"今天 19:04","salary":"10k-20k","companyId":102212,"companyLogo":"i/image/M00/4C/31/Cgp3O1ehsCqAZtIMAABN_hi-Wcw263.jpg","companyName":"达内集团","companyFullName":"达内时代科技集团有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3913725,"positionName":"电话专员/电话邀约 Come on","city":"北京","createTime":"今天 19:04","salary":"6k-8k","companyId":102212,"companyLogo":"i/image/M00/4C/31/Cgp3O1ehsCqAZtIMAABN_hi-Wcw263.jpg","companyName":"达内集团","companyFullName":"达内时代科技集团有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3881299,"positionName":"商务运营主管","city":"上海","createTime":"今天 19:01","salary":"7k-12k","companyId":6636,"companyLogo":"image1/M00/00/0E/Cgo8PFTUWCWAOQHbAABtwKGNZK8276.png","companyName":"携程","companyFullName":"携程计算机技术（上海）有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3881301,"positionName":"日语商拓专员","city":"上海","createTime":"今天 19:01","salary":"6k-10k","companyId":6636,"companyLogo":"image1/M00/00/0E/Cgo8PFTUWCWAOQHbAABtwKGNZK8276.png","companyName":"携程","companyFullName":"携程计算机技术（上海）有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3879031,"positionName":"高级java工程师","city":"北京","createTime":"今天 18:56","salary":"25k-45k","companyId":39934,"companyLogo":"image1/M00/33/F0/CgYXBlWVHo2AJ2kfAADcOU-43sg621.jpg","companyName":"每日优鲜","companyFullName":"北京每日优鲜电子商务有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3914343,"positionName":"市场/商务拓展实习生","city":"上海","createTime":"今天 18:55","salary":"2k-3k","companyId":18643,"companyLogo":"i/image/M00/56/00/CgqKkVfJN62Abp6YAACITarCMOk756.jpg","companyName":"YHOUSE","companyFullName":"上海悦会信息科技有限公司"},
					{
						"logger":{
							"traceCapable":true,
							"name":"com.lagou.entity.mobile.MobilePosition"
						},
						"positionId":3858119,
						"positionName":"项目助理",
						"city":"北京",
						"createTime":"今天 09:12",
						"salary":"5k-7k",
						"companyId":3546,
						"companyLogo":"image1/M00/00/09/Cgo8PFTUWBKACRFoAACK5d6otd4230.jpg",
						"companyName":"光宇游戏",
						"companyFullName":"北京光宇在线科技有限责任公司"
					},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3885965,"positionName":"硬件开发工程师","city":"杭州","createTime":"今天 15:08","salary":"8k-12k","companyId":243684,"companyLogo":"i/image/M00/67/EB/CgpFT1mqtu2AX9TSAAAMrWHp_xs374.png","companyName":"小司机-童享科技","companyFullName":"杭州童享科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3875751,"positionName":"DMS算法开发工程师","city":"深圳","createTime":"今天 15:08","salary":"20k-40k","companyId":40459,"companyLogo":"i/image2/M00/1B/63/CgotOVoCv-eAPNQcAARRTfkzqqo936.png","companyName":"商汤科技","companyFullName":"北京市商汤科技开发有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3880005,"positionName":"软件测试工程师","city":"惠州","createTime":"今天 15:07","salary":"6k-12k","companyId":221266,"companyLogo":"i/image/M00/44/CF/CgpEMllbWZKARF-0AAA6CefWEzk833.png","companyName":"德赛西威","companyFullName":"惠州市德赛西威汽车电子股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3880058,"positionName":"用户体验师","city":"惠州","createTime":"今天 15:07","salary":"5k-10k","companyId":221266,"companyLogo":"i/image/M00/44/CF/CgpEMllbWZKARF-0AAA6CefWEzk833.png","companyName":"德赛西威","companyFullName":"惠州市德赛西威汽车电子股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3882021,"positionName":"数据库测试","city":"深圳","createTime":"今天 15:07","salary":"10k-20k","companyId":128998,"companyLogo":"i/image/M00/2A/A6/Cgp3O1cyziuAfM5AAAAe20ZOb-4754.png","companyName":"江苏亿科达","companyFullName":"上海海万信息科技股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3906252,"positionName":"java工程师（数据方向）","city":"北京","createTime":"今天 15:06","salary":"15k-30k","companyId":443,"companyLogo":"i/image2/M00/09/7D/CgotOVna8B-ARDuWAAAUKhbSQss213.jpg","companyName":"蚂蚁短租","companyFullName":"易云游网络技术(北京)有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3906253,"positionName":"市场运营经理","city":"北京","createTime":"今天 15:06","salary":"10k-20k","companyId":272183,"companyLogo":"i/image2/M00/0C/99/CgoB5lngdHmAcwhkAAAW1N_cPx4863.jpg","companyName":"彩云时代","companyFullName":"北京彩云时代科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3877350,"positionName":"架构师\\技术经理","city":"北京","createTime":"今天 15:05","salary":"20k-40k","companyId":46399,"companyLogo":"i/image/M00/02/83/CgqKkVaTDLmAeVUrAAK2B39-3-M618.jpg","companyName":"会分期","companyFullName":"会找房（北京）网络技术有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3884585,"positionName":"项目助理","city":"上海","createTime":"今天 15:05","salary":"6k-7k","companyId":128998,"companyLogo":"i/image/M00/2A/A6/Cgp3O1cyziuAfM5AAAAe20ZOb-4754.png","companyName":"江苏亿科达","companyFullName":"上海海万信息科技股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3875155,"positionName":"质量总监/高级质量经理-杭州-00153","city":"杭州","createTime":"今天 15:02","salary":"20k-30k","companyId":100684,"companyLogo":"i/image/M00/86/8F/CgqKkVhkuKGAT9-MAABl3Jz3fHk862.jpg","companyName":"杭州智聪","companyFullName":"杭州智聪网络科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3881377,"positionName":"客服经理/主管","city":"上海","createTime":"今天 14:57","salary":"3k-6k","companyId":181571,"companyLogo":"i/image/M00/BD/96/CgqKkVjKT2CAfHXFAAEKx1QCSUY577.jpg","companyName":"上海千众信息科技","companyFullName":"上海千众信息科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3881387,"positionName":"招商/品牌经理","city":"上海","createTime":"今天 14:57","salary":"4k-8k","companyId":181571,"companyLogo":"i/image/M00/BD/96/CgqKkVjKT2CAfHXFAAEKx1QCSUY577.jpg","companyName":"上海千众信息科技","companyFullName":"上海千众信息科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3908322,"positionName":"执行策划（休闲游戏类）","city":"厦门","createTime":"今天 14:57","salary":"4k-6k","companyId":9547,"companyLogo":"i/image/M00/50/20/CgqKkVey7KKAQwHOAAASXRwwpcI865.jpg","companyName":"4399","companyFullName":"四三九九网络股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3875453,"positionName":"运营经理","city":"苏州","createTime":"今天 14:54","salary":"7k-11k","companyId":65422,"companyLogo":"image1/M00/21/20/Cgo8PFU6CH6AQYxqAADPlWAnO7I729.jpg","companyName":"梦想人（北京）科技有限公司","companyFullName":"苏州梦想人软件科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3879977,"positionName":"多媒体图书制作实习生","city":"苏州","createTime":"今天 14:54","salary":"1k-2k","companyId":65422,"companyLogo":"image1/M00/21/20/Cgo8PFU6CH6AQYxqAADPlWAnO7I729.jpg","companyName":"梦想人（北京）科技有限公司","companyFullName":"苏州梦想人软件科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3880049,"positionName":"母婴知识研发部_内容运营","city":"北京","createTime":"今天 16:06","salary":"15k-30k","companyId":1575,"companyLogo":"i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png","companyName":"百度","companyFullName":"百度在线网络技术（北京）有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3878988,"positionName":"市场经理（高端定制旅游）","city":"北京","createTime":"今天 16:06","salary":"15k-25k","companyId":223687,"companyLogo":"i/image/M00/40/EA/CgpFT1lbNn2AZ8EMAAARaTWQ8DA87.jpeg","companyName":"真我之旅","companyFullName":"北京真我旅行社有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3874348,"positionName":"运维工程师","city":"上海","createTime":"今天 16:05","salary":"15k-20k","companyId":213786,"companyLogo":"i/image/M00/54/9D/CgpFT1mBc8-AKfalAAARFQzMdhg682.png","companyName":"咪咕","companyFullName":"咪咕文化科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3641394,"positionName":"汽车网论坛内容编辑（实习）J10894","city":"广州","createTime":"今天 16:05","salary":"2k-3k","companyId":992,"companyLogo":"image1/M00/00/05/CgYXBlTUWACAEirfAABRQiJOrU4446.jpg","companyName":"太平洋网络有限公司","companyFullName":"广州太平洋电脑信息咨询有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3879469,"positionName":"部门助理-贤芯科技","city":"杭州","createTime":"今天 16:05","salary":"4k-6k","companyId":992,"companyLogo":"image1/M00/00/05/CgYXBlTUWACAEirfAABRQiJOrU4446.jpg","companyName":"太平洋网络有限公司","companyFullName":"广州太平洋电脑信息咨询有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3874224,"positionName":"商务采购-北京-00545","city":"北京","createTime":"今天 16:05","salary":"7k-10k","companyId":8332,"companyLogo":"image1/M00/38/6F/CgYXBlWl0HSAFVzWAABLcPjLxCc226.jpg","companyName":"任子行","companyFullName":"任子行网络技术股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3879288,"positionName":"高级大客户经理","city":"杭州","createTime":"今天 16:05","salary":"11k-18k","companyId":136244,"companyLogo":"i/image/M00/73/02/Cgp3O1gtda6AItGsAABoZSOiC2U057.JPG","companyName":"宗盛智能","companyFullName":"杭州宗盛智能科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3641031,"positionName":"前端工程师（数据可视化）","city":"北京","createTime":"今天 16:05","salary":"15k-30k","companyId":5706,"companyLogo":"i/image2/M00/1A/0D/CgotOVoAFfyAQt_cAANhx0qp9w8316.jpg","companyName":"洋葱数学","companyFullName":"光合新知（北京）科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3882610,"positionName":"售后软件技术支持工程师（面向高校）","city":"温州","createTime":"今天 16:04","salary":"3k-5k","companyId":23453,"companyLogo":"i/image/M00/62/BC/CgpEMlmVVNqARRNVAAEktjLYqaY08.jpeg","companyName":"基理科技","companyFullName":"天津市基理科技股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3635524,"positionName":"HRBP（北京）","city":"北京","createTime":"今天 16:03","salary":"9k-18k","companyId":51480,"companyLogo":"i/image/M00/7D/D7/CgqKkVhIy6mAWdXiAAAuG0CkxhU755.png","companyName":"饿了么","companyFullName":"拉扎斯网络科技（上海）有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3643699,"positionName":"线上客服","city":"上海","createTime":"今天 16:03","salary":"4k-6k","companyId":229115,"companyLogo":"i/image/M00/57/42/CgpEMll_3xCAVlovAABATMMQAnM806.png","companyName":"洪涛教育","companyFullName":"深圳市前海洪涛教育科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3643729,"positionName":"文案运营","city":"上海","createTime":"今天 16:03","salary":"3k-6k","companyId":229115,"companyLogo":"i/image/M00/57/42/CgpEMll_3xCAVlovAABATMMQAnM806.png","companyName":"洪涛教育","companyFullName":"深圳市前海洪涛教育科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3872742,"positionName":"自动化测试工程师","city":"北京","createTime":"今天 16:03","salary":"15k-25k","companyId":6206,"companyLogo":"i/image/M00/01/26/CgqKkVZhNySAS7T5AAA3UFH1J3k937.png","companyName":"海尔","companyFullName":"北京海尔广科数字技术有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3872813,"positionName":"JAVA研发工程师（网络）","city":"北京","createTime":"今天 16:03","salary":"20k-35k","companyId":6206,"companyLogo":"i/image/M00/01/26/CgqKkVZhNySAS7T5AAA3UFH1J3k937.png","companyName":"海尔","companyFullName":"北京海尔广科数字技术有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3879700,"positionName":"员工关系副总监","city":"上海","createTime":"今天 16:03","salary":"15k-30k","companyId":12807,"companyLogo":"image1/M00/00/19/Cgo8PFTUWFKATducAACI22CM0KQ059.png","companyName":"诺亚（中国）控股有限公司","companyFullName":"上海诺亚金融服务有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3907993,"positionName":"移动机器人算法研究员","city":"北京","createTime":"今天 16:15","salary":"25k-50k","companyId":139755,"companyLogo":"i/image2/M00/01/B5/CgoB5lm_Z2eAO7g_AAAsw5Ww4Ig707.jpg","companyName":"京东商城","companyFullName":"北京京东世纪贸易有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3908053,"positionName":"视觉算法研究员（机器人）","city":"北京","createTime":"今天 16:15","salary":"20k-40k","companyId":139755,"companyLogo":"i/image2/M00/01/B5/CgoB5lm_Z2eAO7g_AAAsw5Ww4Ig707.jpg","companyName":"京东商城","companyFullName":"北京京东世纪贸易有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3881759,"positionName":"产品经理","city":"北京","createTime":"今天 16:10","salary":"10k-20k","companyId":91666,"companyLogo":"i/image/M00/75/AB/Cgp3O1g0HkOALkYOAAAXBjO10es920.png","companyName":"普奥云信息","companyFullName":"普奥云信息科技（北京）有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3876854,"positionName":"DBA","city":"杭州","createTime":"今天 16:10","salary":"20k-25k","companyId":2380,"companyLogo":"i/image/M00/5E/25/Cgp3O1fqMFWAJ4hgAAAUycalP_8040.png","companyName":"浙江执御信息技术有限公司","companyFullName":"浙江执御信息技术有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3879342,"positionName":"产品经理（电商方向）","city":"杭州","createTime":"今天 16:10","salary":"20k-30k","companyId":2380,"companyLogo":"i/image/M00/5E/25/Cgp3O1fqMFWAJ4hgAAAUycalP_8040.png","companyName":"浙江执御信息技术有限公司","companyFullName":"浙江执御信息技术有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3880049,"positionName":"母婴知识研发部_内容运营","city":"北京","createTime":"今天 16:06","salary":"15k-30k","companyId":1575,"companyLogo":"i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png","companyName":"百度","companyFullName":"百度在线网络技术（北京）有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3878988,"positionName":"市场经理（高端定制旅游）","city":"北京","createTime":"今天 16:06","salary":"15k-25k","companyId":223687,"companyLogo":"i/image/M00/40/EA/CgpFT1lbNn2AZ8EMAAARaTWQ8DA87.jpeg","companyName":"真我之旅","companyFullName":"北京真我旅行社有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3874348,"positionName":"运维工程师","city":"上海","createTime":"今天 16:05","salary":"15k-20k","companyId":213786,"companyLogo":"i/image/M00/54/9D/CgpFT1mBc8-AKfalAAARFQzMdhg682.png","companyName":"咪咕","companyFullName":"咪咕文化科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3879469,"positionName":"部门助理-贤芯科技","city":"杭州","createTime":"今天 16:05","salary":"4k-6k","companyId":992,"companyLogo":"image1/M00/00/05/CgYXBlTUWACAEirfAABRQiJOrU4446.jpg","companyName":"太平洋网络有限公司","companyFullName":"广州太平洋电脑信息咨询有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3880020,"positionName":"汽车网-大客户广告销售J11050","city":"广州","createTime":"今天 16:05","salary":"5k-10k","companyId":992,"companyLogo":"image1/M00/00/05/CgYXBlTUWACAEirfAABRQiJOrU4446.jpg","companyName":"太平洋网络有限公司","companyFullName":"广州太平洋电脑信息咨询有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3874224,"positionName":"商务采购-北京-00545","city":"北京","createTime":"今天 16:05","salary":"7k-10k","companyId":8332,"companyLogo":"image1/M00/38/6F/CgYXBlWl0HSAFVzWAABLcPjLxCc226.jpg","companyName":"任子行","companyFullName":"任子行网络技术股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3879288,"positionName":"高级大客户经理","city":"杭州","createTime":"今天 16:05","salary":"11k-18k","companyId":136244,"companyLogo":"i/image/M00/73/02/Cgp3O1gtda6AItGsAABoZSOiC2U057.JPG","companyName":"宗盛智能","companyFullName":"杭州宗盛智能科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3882610,"positionName":"售后软件技术支持工程师（面向高校）","city":"温州","createTime":"今天 16:04","salary":"3k-5k","companyId":23453,"companyLogo":"i/image/M00/62/BC/CgpEMlmVVNqARRNVAAEktjLYqaY08.jpeg","companyName":"基理科技","companyFullName":"天津市基理科技股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3907718,"positionName":"中高级PHP工程师（上海）","city":"上海","createTime":"今天 16:04","salary":"15k-30k","companyId":23453,"companyLogo":"i/image/M00/62/BC/CgpEMlmVVNqARRNVAAEktjLYqaY08.jpeg","companyName":"基理科技","companyFullName":"天津市基理科技股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3872742,"positionName":"自动化测试工程师","city":"北京","createTime":"今天 16:03","salary":"15k-25k","companyId":6206,"companyLogo":"i/image/M00/01/26/CgqKkVZhNySAS7T5AAA3UFH1J3k937.png","companyName":"海尔","companyFullName":"北京海尔广科数字技术有限公司"}
				]
	})
});

app.listen(8848);