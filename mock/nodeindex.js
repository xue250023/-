var express = require("express");
const bodyParser=require('body-parser');
var app = express();
var count=0;
var flag=0;
var cushidata=  {
    'totprice': `0`,
    'countnum': '',
    'i1001': { 'num': 0, 'checked': true, 'nowpric': '150', 'perprice': '200' },
    'i1002': { 'num': 0, 'checked': true, 'nowpric': '45', 'perprice': '60' },
    'i1003': { 'num': 0, 'checked': true, 'nowpric': '30', 'perprice': '40' },
    'i1004': { 'num': 0, 'checked': true, 'nowpric': '50', 'perprice': '70' },
    'i1005': { 'num': 0, 'checked': true, 'nowpric': '135', 'perprice': '155' },
    'i1006': { 'num': 0, 'checked': true, 'nowpric': '50', 'perprice': '100' },
    'i1007': { 'num': 0, 'checked': true, 'nowpric': '20', 'perprice': '25' },
    'i1008': { 'num': 0, 'checked': true, 'nowpric': '15', 'perprice': '23' },
    'carinfo': [ 
        ]
};
var gwcdata=  {
    'totprice': `0`,
    'countnum': '',
    'i1001': { 'num': 0, 'checked': true, 'nowpric': '150', 'perprice': '200' },
    'i1002': { 'num': 0, 'checked': true, 'nowpric': '45', 'perprice': '60' },
    'i1003': { 'num': 0, 'checked': true, 'nowpric': '30', 'perprice': '40' },
    'i1004': { 'num': 0, 'checked': true, 'nowpric': '50', 'perprice': '70' },
    'i1005': { 'num': 0, 'checked': true, 'nowpric': '135', 'perprice': '155' },
    'i1006': { 'num': 0, 'checked': true, 'nowpric': '50', 'perprice': '100' },
    'i1007': { 'num': 0, 'checked': true, 'nowpric': '20', 'perprice': '25' },
    'i1008': { 'num': 0, 'checked': true, 'nowpric': '15', 'perprice': '23' },
    'carinfo': [ 
        ]
};
var jiesuaninfo=[]
function addcar(body){   
     gwcdata[body.id].num++; //再看这个坑位是不是这样 不是填进去 是就忽略
    if(!gwcdata.carinfo[body.index])
     {

         gwcdata.carinfo.splice(body.index,0,body.info)
     }
}
function gwcchushihua() {
     cushidata1= JSON.stringify(cushidata); 
    gwcdata = JSON.parse(cushidata1); 
    return gwcdata;
}
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded());
app.post("/",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.json(gwcdata);
    console.log(gwcdata);
    console.log( ++count );
    res.end();
});
app.post("/xq",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    switch (req.body.cmd){
        case 'addcar':  addcar(req.body); res.json(gwcdata);  break;//相应金额增加 数目增加 再把项目加进去
    }
    res.end();
});
app.post('/addgwc',()=>{
    res.header("Access-Control-Allow-Origin","*");
    console.log(req.body);
    res.end();
})
app.post('/jiesuan',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    switch (req.body.cmd){
        case 'jiesuan':  jiesuaninfo=jiesuaninfo.concat(req.body.info);   gwcchushihua() ; res.json(jiesuaninfo);  break;//相应金额增加 数目增加 再把项目加进去
        case 'getjiesuan':    res.json(jiesuaninfo); break;//直接给过去的data就是[{}{}{}]
    }
    res.end();




})
app.listen(1188,function(){
    console.log("服务器运行在3200端口上");
})
