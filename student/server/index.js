const express =require("express")
const server=express()

const Vue=require("vue");
const Render=require("vue-server-renderer").createRenderer({
    template:
    '<!DOCTYPE html>' +
    '<html lang="en">' +
      '<head>' +
        '<meta charset="utf-8">' +
        // context.head will be injected here
        // context.styles will be injected here
      '</head>' +
      '<body>' +
        '<!--vue-ssr-outlet-->' + // <- app content rendered here
        // context.state will be injected here
      '</body>' +
    '</html>'
});

const vue=new Vue({
    template:'<div>{{msg}}</div>',
    data:{
        msg:"template hello"
    }
})

server.use(express.static(require('path').join(__dirname,"../assets")))


server.get("/ssr",(req,res)=>{
    Render.renderToString(vue,(err,html)=>{
        console.log('tag', html)
        res.send(html)
    })
    

})
server.listen(12306)