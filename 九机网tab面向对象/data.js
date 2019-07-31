let datatypes=[
    ["华为P30","三星S10","小米9","华为Mate 20","iPhone XR"],
    ["加湿器","电动牙刷","插座","智能电视","智能安防"],
    ["智能手表","智能手环","儿童手表","车载充电器","车载支架"],
    ["保护膜","保护壳","数据线","充电器","移动电源","手机耳机"],
    ["平板电脑","轻薄本","游戏本","路由器"," 键盘/鼠标","U盘"],
    ["Beats","SONY","Bose","华为","智能音箱","无人机","摄影摄像"]
];
let li1data = [
    ["苹果","华为","小米","荣耀","OPPO","vivo","三星","魅族","美图","一加","努比亚","全部手机"],
    ["0-599","600-999","1000-1999","2000-2999","3000-3999","4000-4999","5000以上"],
    ["全网通","4G+全网通","移动/联通双4G","联通4G","电信4G"],
    ["屏幕指纹识别","面部识别解锁","全面屏","快速充电","无线充电","液冷散热","双卡双待","指纹识别"],
    ["华为P30","iPhone XR","华为 Mate 20","华为 nova 4e","iPhone X","三星S10","OPPO Reno","vivo X27","华为 nova 4","华为畅享 9"],
    ["手机维修","维修配件价格","九机服务","苹果电池快修","苹果显示屏快修"]
];
let li2data = [
    ["路由器","插座","风扇","电池"],
    ["加湿器","灯光照明","榨汁机","扫地机器人","厨房小电","除螨仪"],
    ["小米电视","小米盒子","荣耀盒子"],
    ["智能门锁", "智能摄像头","电子猫眼/门铃"],
    ["电动牙刷","剃须刀","体脂称","按摩设备"]
];
let li3data = [
    ["苹果","华为","荣耀","三星","AMAZFIT","Ticwatch"],
    ["华为","小米","荣耀"],
    ["华为","小天才","科大讯飞","小米","糖猫"],
    ["车载支架","车载充电器","行车记录仪","车载蓝牙耳机"]
];
let li4data = [
    ["苹果保护膜","华为保护膜","荣耀保护膜","一加保护膜","OPPO保护膜","vivo保护膜","小米保护膜","三星保护膜","平板保护膜","其他"],
    ["苹果保护壳","华为保护壳","荣耀保护壳","一加保护壳","OPPO保护壳","vivo保护壳","小米保护壳","三星保护壳","平板保护壳","其他"],
    ["快充数据线","苹果数据线","MFI认证线" ,"安卓Type-C数据线","安卓Micro数据线","多合一数据线","转接头"],
    ["无线充电器","快充充电器","多口充电器","单口充电器","车载充电器"],
    ["超轻薄","双向快充","自带线","无线输出","苹果输入","Type-C输入","安卓Micro输入","单口输出","多口输出","自带线","电量数字显示"],
    ["手机维修","维修配件价格","九机服务","苹果电池快修","苹果显示屏快修"],
    ["手机维修","维修配件价格","九机服务","苹果电池快修","苹果显示屏快修"]
];
let li5data = [
    ["苹果","华为","小米","荣耀","OPPO","vivo","三星","魅族","美图","一加","努比亚","全部手机"],
    ["0-599","600-999","1000-1999","2000-2999","3000-3999","4000-4999","5000以上"],
    ["全网通","4G+全网通","移动/联通双4G","联通4G","电信4G"],
    ["屏幕指纹识别","面部识别解锁","全面屏","快速充电","无线充电","液冷散热","双卡双待","指纹识别"],
    ["华为P30","iPhone XR","华为 Mate 20","华为 nova 4e","iPhone X","三星S10","OPPO Reno","vivo X27","华为 nova 4","华为畅享 9"],
    ["手机维修","维修配件价格","九机服务","苹果电池快修","苹果显示屏快修"]
];
let li6data = [
    ["苹果","华为","小米","荣耀","OPPO","vivo","三星","魅族","美图","一加","努比亚","全部手机"],
    ["0-599","600-999","1000-1999","2000-2999","3000-3999","4000-4999","5000以上"],
    ["全网通","4G+全网通","移动/联通双4G","联通4G","电信4G"],
    ["屏幕指纹识别","面部识别解锁","全面屏","快速充电","无线充电","液冷散热","双卡双待","指纹识别"],
    ["华为P30","iPhone XR","华为 Mate 20","华为 nova 4e","iPhone X","三星S10","OPPO Reno","vivo X27","华为 nova 4","华为畅享 9"],
    ["手机维修","维修配件价格","九机服务","苹果电池快修","苹果显示屏快修"]
];
let lidata = [li1data,li2data,li3data,li4data,li5data,li6data];
let Data = {
 dataoption:[
    {
    title:"手机通讯",
    typelist:datatypes[0]
    },
    {
    title:"智能家居/智能健康",
    typelist:datatypes[1]
    },
    {
    title:"智能穿戴/智能出行",
    typelist:datatypes[2]  
    },
    {
    title:"手机配件",
    typelist:datatypes[3]  
    },
    {
    title:"电脑办公",
    typelist:datatypes[4]  
    },
    {
    title:"时尚影音/娱乐竞技",
    typelist:datatypes[5]  
    },   
],

datadetail:[
    [[
      {redtext:"热门品牌",blacktext:lidata[0][0]},
      {redtext:"价位",blacktext:lidata[0][1]},
      {redtext:"网络制式",blacktext:lidata[0][2]},
      {redtext:"产品特点",blacktext:lidata[0][3]},
      {redtext:"热销机型",blacktext:lidata[0][4]},
      {redtext:"售后维修",blacktext:lidata[0][5]}
    ],{pic1:"img/1-1.jpg",pic2:"img/1-2.jpg"}],
    [[
      {redtext:"生活周边",blacktext:lidata[1][0]},
      {redtext:"智能电器",blacktext:lidata[1][1]},
      {redtext:"电视/盒子",blacktext:lidata[1][2]},
      {redtext:"智能安防",blacktext:lidata[1][3]},
      {redtext:"智能健康",blacktext:lidata[1][4]}
    ],{pic1:"img/2-1.jpg",pic2:"img/2-2.jpg"}],
    [[
     {redtext:"智能手表",blacktext:lidata[2][0]},
     {redtext:"智能手环",blacktext:lidata[2][1]},
     {redtext:"儿童手表",blacktext:lidata[2][2]},
     {redtext:"智能车载",blacktext:lidata[2][3]}
    ],{pic1:"img/3-1.jpg",pic2:"img/3-2.jpg"}],
    [[
    {redtext:"保护膜",blacktext:lidata[3][0]},
    {redtext:"保护壳",blacktext:lidata[3][1]},
    {redtext:"数据线",blacktext:lidata[3][2]},
    {redtext:"充电器",blacktext:lidata[3][3]},
    {redtext:"移动电源",blacktext:lidata[3][4]},
    {redtext:"手机耳机",blacktext:lidata[3][5]},
    {redtext:"手机周边",blacktext:lidata[3][6]}
    ],{pic1:"img/4-1.jpg",pic2:"img/4-2.jpg"}],
    [[
    {redtext:"电脑",blacktext:lidata[4][0]},
    {redtext:"平板电脑",blacktext:lidata[4][1]},
    {redtext:"外设产品",blacktext:lidata[4][2]},
    {redtext:"网络茶品",blacktext:lidata[4][3]},
    {redtext:"办公设备",blacktext:lidata[4][4]},
    {redtext:"服务产品",blacktext:lidata[4][5]}
    ],{pic1:"img/5-1.jpg",pic2:"img/5-2.jpg"}],
    [[
    {redtext:"热门品牌",blacktext:lidata[5][0]},
    {redtext:"耳机耳麦",blacktext:lidata[5][1]},
    {redtext:"音箱/音响",blacktext:lidata[5][2]},
    {redtext:"无人机",blacktext:lidata[5][3]},
    {redtext:"儿童专区",blacktext:lidata[5][4]},
    {redtext:"数码产品",blacktext:lidata[5][5]}
    ],{pic1:"img/6-1.jpg",pic2:"img/6-2.jpg"}]
]
}
// let data = [dataoption,datadetail];

