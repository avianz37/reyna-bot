const makeWASocket=require('@adiwajshing/baileys')
const{useSingleFileAuthState,DisconnectReason}=require('@adiwajshing/baileys')
const{Boom}=require('@hapi/boom')
const{state,saveState}=useSingleFileAuthState("./session.json")
const cfonts=require('cfonts')
const{say}=cfonts
const fs=require('fs')
require('./config')
function startBot(){
cfonts.say(bot,{font:'chrome',align:'center',colors:['cyan']});
setTimeout(function(){cfonts.say(`WhatsApp BOT Multi Device by ${ownername}\nIG: @${ownerig}`,{font:'console',align:'center',gradient:['red','magenta']})},1000)
setTimeout(function(){console.log(fs.readdirSync('./'))},2000)
setTimeout(function(){const sock=makeWASocket.default({printQRInTerminal:true,auth:state,browser:[bot,'BOT','1.0.0']});
sock.ev.on("creds.update",saveState);
sock.ev.on("connection.update",(update)=>{
const{connection, lastDisconnect}=update;
if(!(connection==undefined))console.log(update.connection+'...');
if(connection==undefined){
cfonts.say(`${botname}: Tunggu sebentar...`,{font:'console',align:'left',colors:['green']})};
if(connection=='close'){
let reason=new Boom(lastDisconnect?.error)?.output?.statusCode;
console.log(reason);
console.log(DisconnectReason);
switch(reason){
case DisconnectReason.connectionClosed:
console.log(`Closed`);
cfonts.say('Restart...',{font:'console',align:'left',colors:['green']});
startBot();
break;
case DisconnectReason.connectionLost:
console.log(`Lost`);
cfonts.say('Restart...',{font:'console',align:'left',colors:['green']});
startBot();
break;
case DisconnectReason.connectionReplaced:
console.log(`Replaced`);
cfonts.say('Restart...',{font:'console',align:'left',colors:['green']});
startBot();
break;
case DisconnectReason.timedOut:
console.log(`Timed Out`);
cfonts.say('Restart...',{font:'console',align:'left',colors:['green']});
startBot();
break;
case DisconnectReason.loggedOut:
console.log(`Logged Out`);
cfonts.say(`${bot} berhenti...`,{font:'console',align:'left',colors:['red']});
break;
case DisconnectReason.badSession:
console.log(`Bad Session`);
cfonts.say('Restart...',{font:'console',align:'left',colors:['green']});
startBot();
break;
case DisconnectReason.restartRequired:
console.log(`Required`);
cfonts.say('Restart...',{font:'console',align:'left',colors:['green']});
startBot();
break;
case DisconnectReason.multideviceMismatch:
console.log(`Multi Device Mismatch`);
cfonts.say('Restart...',{font:'console',align:'left',colors:['green']});
startBot();
break;
default:
console.log(`Undefined`);
cfonts.say('Restart...',{font:'console',align:'left',colors:['green']});
startBot();
}};
if(connection=='connecting'){
cfonts.say(`${botname}: Menghubungkan...`,{font:'console',align:'left',colors:['green']})};
if(connection=='open'){
cfonts.say(`${botname}: Memulai BOT...`,{font:'console',align:'left',colors:['green']})};
})
sock.ev.on('messages.upsert',async m=>{require('./yusuf')(m,sock)})
},3000)
};startBot()