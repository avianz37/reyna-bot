const makeWASocket=require('@adiwajshing/baileys')
const fs=require('fs')
require('./config')
module.exports=async(m,sock)=>{
console.log(JSON.stringify(m,undefined,2))
let msg = m.messages[0]
let id=msg.key.remoteJid
let prefix='.'
let cmd=msg.message.conversation.split(prefix)[1]
switch(cmd){
case'p':case'P':
sock.sendMessage(id,{text:'P'},{quoted:msg})
break;
case'menu':
sock.sendMessage(id,{
caption:bot,
footer:wm,
document:{url:ig},
mimetype:'application/msword',jpegThumbnail:fs.readFileSync('./media/thumb.jpeg'),
fileName:bot,fileLength:1000000000000000,pageCount:1,
contextInfo:{externalAdReply:{showAdAttribution:true,title:bot,body:wm,thumbnail:fs.readFileSync('./media/verifi2.png')}},
mentions:['0@s.whatsapp.net']},{quoted:msg})
break;
}}