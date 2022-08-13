"use strict"
import makeWASocket from '@adiwajshing/baileys'
const { useSingleFileAuthState, DisconnectReason } = await import ('@adiwajshing/baileys')
const { Boom } = await import ('@hapi/boom')
const { state, saveState } = useSingleFileAuthState("./session.json")
import cfonts from 'cfonts';
const { say } = cfonts
import fs from 'fs'

function startBot(){
say('ReynaBOT',{
font:'chrome',
align:'center',
colors:['cyan']});
say(`WhatsApp BOT Multi Device by Yusuf\nIG: @yusuf.expert`,{
font:'console',
align:'center',
gradient:['red','magenta']});

const sock=makeWASocket.default({
printQRInTerminal:true,
auth:state
});

sock.ev.on("creds.update", saveState);

sock.ev.on("connection.update",(up)=>{
const{lastDisconnect,connection}=up;
console.log(`Koneksi: ${connection}`);

if(connection==undefined){
say('Reyna: Tunggu sebentar...',{
font:'console',
align:'left',
colors:['green']})};

if(connection=='close'){
let reason=new Boom(lastDisconnect?.error)?.output?.statusCode;
console.log(reason);
console.log(DisconnectReason);
switch(reason){
case DisconnectReason.connectionClosed:
console.log(`Closed`);
say('Restart...',{
font:'console',
align:'left',
colors:['green']});
startBot();
break;
case DisconnectReason.connectionLost:
console.log(`Lost`);
say('Restart...',{
font:'console',
align:'left',
colors:['green']});
startBot();
break;
case DisconnectReason.connectionReplaced:
console.log(`Replaced`);
say('Restart...',{
font:'console',
align:'left',
colors:['green']});
startBot();
break;
case DisconnectReason.timedOut:
console.log(`Timed Out`);
say('Restart...',{
font:'console',
align:'left',
colors:['green']});
startBot();
break;
case DisconnectReason.loggedOut:
console.log(`Logged Out`);
say('Restart...',{
font:'console',
align:'left',
colors:['green']});
startBot();
break;
case DisconnectReason.badSession:
console.log(`Bad Session`);
say('Restart...',{
font:'console',
align:'left',
colors:['green']});
startBot();
break;
case DisconnectReason.restartRequired:
console.log(`Required`);
say('Restart...',{
font:'console',
align:'left',
colors:['green']});
startBot();
break;
case DisconnectReason.multideviceMismatch:
console.log(`Multi Device Mismatch`);
say('Restart...',{
font:'console',
align:'left',
colors:['green']});
startBot();
break;
default:
console.log(`Undefined`);
say('Restart...',{
font:'console',
align:'left',
colors:['green']});
startBot();
}};

if(connection=='connecting'){
say('Reyna: Menghubungkan...',{
font:'console',
align:'left',
colors:['green']})};

if(connection=='open'){
say('Reyna: Membuka...',{
font:'console',
align:'left',
colors:['green']})};
});

sock.ev.on('messages.upsert',m=>{
console.log(m.messages[0].key.remoteJid);
let msg=m.messages[0];
let pesan=msg.message.conversation
if(pesan=='p'){sock.sendMessage(msg.key.remoteJid,{text:'p'})};
});

};startBot();