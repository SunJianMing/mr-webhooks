const http = require('http')
const webhookHander = require("github-webhook-handler")
const hander = webhookHander({
    path:'/webhooks',
    secret:'mrSun'
})
const {spawn} = require('child_process')
function run_cmd(cmd,args,call){
    const child = spawn(cmd,args)
    let rest = ''
    child.stdout.on('data',chunk=>{
        rest += chunk.toString()
    })
    child.stdout.on('end',()=>{
        call(rest)
    })
}
http.createServer((req,res)=>{
    hander(req,res,err=>{
        if(err){
            res.statusCode = 404
            res.end('Error')
        }
    })
}).listen(8888,()=>{
    console.log('start 8888')
})
hander.on('error',err=>{
    if(err){
        console.Error('err',err.message)
    }
})
hander.on('push',event=>{
    console.log(event)
    run_cmd('sh',['deploy-dev.sh'],function(text){
        console.log(text)
    })
})


