function getDistance(e,a,t,s){const{sin:n,cos:o,asin:c,PI:r,hypot:i}=Math;let p=(e,a)=>(e*=r/180,{x:o(a*=r/180)*o(e),y:o(a)*n(e),z:n(a)}),u=p(e,a),l=p(t,s),b=2*c(i(u.x-l.x,u.y-l.y,u.z-l.z)/2)*6371;return Math.round(b)}function showWelcome(){if(!document.getElementById("welcome-info"))return;let e,a,t,s=getDistance(110.84721,35.97053,ipLoacation.result.location.lng,ipLoacation.result.location.lat),n=ipLoacation.result.ad_info.nation;switch(ipLoacation.result.ad_info.nation){case"日本":a="よろしく，一起去看樱花吗？";break;case"美国":a="Make America Great Again!";break;case"英国":a="想同你一起夜乘伦敦眼！";break;case"俄罗斯":a="干了这瓶伏特加！";break;case"法国":a="C'est La Vie";break;case"德国":a="Die Zeit verging im Fluge.";break;case"澳大利亚":a="一起去大堡礁吧！";break;case"加拿大":a="拾起一片枫叶赠予你";break;case"中国":switch(n=ipLoacation.result.ad_info.province+" "+ipLoacation.result.ad_info.city,e=ipLoacation.result.ip,ipLoacation.result.ad_info.province){case"北京市":n="北京市",a="北——京——欢迎你~~~";break;case"天津市":n="天津市",a="讲段相声吧。";break;case"重庆市":n="重庆市",a="高德地图:已到达重庆，下面交给百度地图导航。";break;case"河北省":a="山势巍巍成壁垒，天下雄关。铁马金戈由此向，无限江山。";break;case"山西省":a="咱们是老乡尼！";break;case"内蒙古自治区":a="天苍苍，野茫茫，风吹草低见牛羊。";break;case"辽宁省":a="我想吃烤鸡架！";break;case"吉林省":a="状元阁就是东北烧烤之王。";break;case"黑龙江省":a="很喜欢哈尔滨大剧院。";break;case"上海市":n="上海市",a="众所周知，中国只有两个城市。";break;case"江苏省":switch(ipLoacation.result.ad_info.city){case"南京市":a="欢迎来自安徽省南京市的小伙伴。";break;case"苏州市":a="上有天堂，下有苏杭。";break;case"泰州市":a="州建南唐，文昌北宋，名城名宦交相重。 月华如练旧亭台，清词范晏人争诵。 朗润明珠，翩仙彩凤，梅郎合受千秋供。 重光殿宇古招提，放翁大笔今堪用。。";break;default:a="散装是必须要散装的。"}break;case"浙江省":a="东风渐绿西湖柳，雁已还人未南归。";break;case"安徽省":a="蚌埠住了，芜湖起飞。";break;case"福建省":a="井邑白云间，岩城远带山。";break;case"江西省":a="落霞与孤鹜齐飞，秋水共长天一色。";break;case"山东省":a="遥望齐州九点烟，一泓海水杯中泻。";break;case"湖北省":a="来碗热干面！";break;case"湖南省":a="74751，长沙斯塔克。";break;case"广东省":a="老板来两斤福建人。";break;case"广西壮族自治区":a="桂林山水甲天下。";break;case"海南省":a="朝观日出逐白浪，夕看云起收霞光。";break;case"四川省":a="康康川妹子。";break;case"贵州省":a="茅台，学生，再塞200。";break;case"云南省":a="玉龙飞舞云缠绕，万仞冰川直耸天。";break;case"西藏自治区":a="躺在茫茫草原上，仰望蓝天。";break;case"陕西省":a="来份臊子面加馍。";break;case"甘肃省":a="羌笛何须怨杨柳，春风不度玉门关。";break;case"青海省":a="牛肉干和老酸奶都好好吃。";break;case"宁夏回族自治区":a="大漠孤烟直，长河落日圆。";break;case"新疆维吾尔自治区":a="驼铃古道丝绸路，胡马犹闻唐汉风。";break;case"台湾省":a="我在这头，大陆在那头。";break;case"香港特别行政区":n="香港特别行政区",a="永定贼有残留地鬼嚎，迎击光非岁玉。";break;case"澳门特别行政区":n="澳门特别行政区",a="性感荷官，在线发牌。";break;default:a="社会主义大法好。"}break;default:a="带我去你的国家逛逛吧。"}let o=new Date;t=o.getHours()>=5&&o.getHours()<11?"<span>上午好</span>，一日之计在于晨，早起的虫儿被鸟吃丫~":o.getHours()>=1&&o.getHours()<13?"<span>中午好</span>，要好好吃饭哦~":o.getHours()>=13&&o.getHours()<15?"<span>下午好</span>，懒懒地睡个午觉吧！":o.getHours()>=15&&o.getHours()<16?"<span>三点几啦</span>，饮茶先啦！":o.getHours()>=16&&o.getHours()<19?"<span>夕阳无限好！</span>":o.getHours()>=19&&o.getHours()<24?"<span>晚上好</span>，夜生活嗨起来！":"夜深了，早点休息，少熬夜",document.getElementById("welcome-info").innerHTML=`欢迎来自<span>${n}</span>的小伙伴，${t}<br>你距离博主约有<span>${s}</span>公里，${a}<br>您IP地址为：<b><span>${e}</span></b>`}$.ajax({type:"get",url:"https://apis.map.qq.com/ws/location/v1/ip",data:{key:"5BZBZ-VFQWZ-CCIXF-TNMOI-GPBV3-RFFWJ",output:"jsonp"},dataType:"jsonp",success:function(e){ipLoacation=e,showWelcome()}}),document.addEventListener("pjax:complete",showWelcome);const tencentMapKey="5BZBZ-VFQWZ-CCIXF-TNMOI-GPBV3-RFFWJ";function initMap(){var e=document.getElementById("mapContainer");e&&fetch("/get-location").then((e=>e.json())).then((a=>{var t=a.latitude,s=a.longitude,n=new qq.maps.Map(e,{center:new qq.maps.LatLng(t,s),zoom:15});new qq.maps.Marker({position:new qq.maps.LatLng(t,s),map:n}),new qq.maps.Geocoder({complete:function(e){var a=e.detail.address;document.getElementById("addressDescription").innerText=a}}).getAddress(new qq.maps.LatLng(t,s))})).catch((e=>{console.error("获取用户位置失败:",e)}))}app.get("/get-location",(async(e,a)=>{try{if(0===locationData.status&&locationData.result){const{lat:e,lng:t}=locationData.result.location;a.json({latitude:e,longitude:t})}else a.status(500).json({error:"无法从腾讯地图API获取位置信息"})}catch(e){console.error("获取用户位置时发生错误:",e),a.status(500).json({error:"无法获取用户位置"})}})),document.addEventListener("DOMContentLoaded",initMap);