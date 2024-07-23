noconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349137594086";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDU3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMyLFxuICAgICAgICA2NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDY1LFxuICAgICAgICA2MixcbiAgICAgICAgMTYyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgxLFxuICAgICAgICA3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM5LFxuICAgICAgICAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NixcbiAgICAgICAgMjE5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYzLFxuICAgICAgICA1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTczLFxuICAgICAgICA2MixcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU2LFxuICAgICAgICA3MixcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOUQ5Y215VVZzWXI2dE00c0JpRGgvSStpZEpnZTI2RGNuQjN6bTRURGZJWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLW0wRUlCN3pUSkdPZnI3MWNEMi1KUVwiLFxuICBcInBob25lSWRcIjogXCIwZTkwNjU0Ni0zMjRhLTRiYWEtOTc5Yy1mZTdiNDY0Mjg1ODRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjQsXG4gICAgICAxMDAsXG4gICAgICAyNTUsXG4gICAgICAxMDMsXG4gICAgICA3NSxcbiAgICAgIDgyLFxuICAgICAgMjMsXG4gICAgICAwLFxuICAgICAgMTcxLFxuICAgICAgNDksXG4gICAgICAxMTQsXG4gICAgICAyNDAsXG4gICAgICAyNTQsXG4gICAgICAyMzEsXG4gICAgICAxMzcsXG4gICAgICAxMDUsXG4gICAgICAxNjYsXG4gICAgICAxNDAsXG4gICAgICAyMTEsXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICA0LFxuICAgICAgNjUsXG4gICAgICAxMDcsXG4gICAgICA1NixcbiAgICAgIDE3NixcbiAgICAgIDI1LFxuICAgICAgMTIxLFxuICAgICAgMjMxLFxuICAgICAgMTg0LFxuICAgICAgMTgsXG4gICAgICAyMzEsXG4gICAgICAyMDYsXG4gICAgICAyMzEsXG4gICAgICAxNDAsXG4gICAgICAyNTEsXG4gICAgICAxNjcsXG4gICAgICAxMzUsXG4gICAgICA5NixcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjIxRzNaMUtDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM3NTk0MDg2OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRW1tYW51ZWxcIixcbiAgICBcImxpZFwiOiBcIjI2NTI2MDM2Nzk1NTkzOjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BHZ2lJRUhFSi9vKzdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTGFCYmFqc24wZ0o2bXFzaGVpYjNQNStUUzRteldwOVlTWnpuSXRVTEloVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtUzZ3VFJlbXpEVURaVmtaYnpyK3VzcHVmbnlpeXVFWU5MdUoxd2xJdFBVOU9BTnFKUDdEN2ZJRVhZOUtFWXc1YllrdnQ0alIvQzFqWkJOUHdJUGJEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFT0s4TmxlSTdiNlpoK2FEQ3JyUHpKVmcwUTdJVGV4MzVBM2szWkc0UnpiSi9YM2xSY1l2K1B6V1VxYUNBTWRxL1FDcEd1c3hzYjB2ZDJtdnAzRitqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM3NTk0MDg2OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY5MzIxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1VdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVV0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSCtsVTlOZjJ1M3lmZUZ3czZuTzVmMzFIOHhaQ1l6OFhYaGRuSlpxQ21Eaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODgxMjgwNjI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE2OTMyMjU0ODlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "KiRa",
  packname: process.env.PACK_NAME || "KiRa",
  botname : process.env.BOT_NAME  || "KiRa-MD",
  ownername:process.env.OWNER_NAME|| "KiRa",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
