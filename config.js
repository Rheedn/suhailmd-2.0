const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349070023704";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_19_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMSxcbiAgICAgICAgODYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDc4LFxuICAgICAgICA0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI3LFxuICAgICAgICA1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDcxLFxuICAgICAgICA4NCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY1LFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuaUFEd1VTNVhTQ2tzS3paR1M2U0lCNXdOOFNQcHprNmRERDZKRFVid01NPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNzM1NTA1NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg2MUU2M0ZBMjM1MzUxOEJCQkQ3NjlBOThGMDZBOTg0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTI4Nzk1M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNzM1NTA1NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI3REI0RkREMTAyRDZCQzIyNTk3NkY5M0JERDdBNzIyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTI4Nzk1M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNzM1NTA1NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEyRTZGNDU1RDEyMUIyNUI5NUMwQTdEOUZFNUMyMDk4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTI4Nzk1NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNzM1NTA1NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI1RUM4MzQxQjcxOTY4RDA3MTdDQkU4MjJBNzM5RTYyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTI4Nzk1NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSTVIyT0J1WVNDT3FxSjVfbXZBR2FBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU1MjViZjliLTdkNGEtNDg2Mi1iNzgwLTllMjU0YmJmMjhmYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDI0MCxcbiAgICAgIDEzMyxcbiAgICAgIDIyNCxcbiAgICAgIDEzMSxcbiAgICAgIDE1MixcbiAgICAgIDE3MixcbiAgICAgIDE5MixcbiAgICAgIDM2LFxuICAgICAgMTM1LFxuICAgICAgMTYzLFxuICAgICAgMjEwLFxuICAgICAgNjQsXG4gICAgICAyMTAsXG4gICAgICA3MyxcbiAgICAgIDE4OSxcbiAgICAgIDE2NSxcbiAgICAgIDY2LFxuICAgICAgMjI3LFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDEzNSxcbiAgICAgIDIxLFxuICAgICAgMTQ1LFxuICAgICAgOTQsXG4gICAgICA5MyxcbiAgICAgIDE3NSxcbiAgICAgIDM4LFxuICAgICAgNjcsXG4gICAgICAxNDksXG4gICAgICAxMDksXG4gICAgICAzMCxcbiAgICAgIDIxNSxcbiAgICAgIDE5OSxcbiAgICAgIDEwNSxcbiAgICAgIDg5LFxuICAgICAgMzYsXG4gICAgICAyMzgsXG4gICAgICAxMTEsXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTlYNlNYNTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNzM1NTA1NzY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU5OTIzNjI3MzY0NTk0OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUmhlZWRuMlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09mWHVza0JFSXUzeGJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidWxhZTZ2Q2IxNXRmbXAyd0NKZ0pibytZbXFOQnVOZU9WTnA0ZDcwVy8xcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzV1JGOTkvbm1vMTA3dkZJUmVzVXA0ZXFaMThVTE55UjJXejFyTUdhVDVxQkcvQy9rNElYUEFDckMyRG1saFNEN3QvYmR3Rzg2dSsvNUFCVFh2M2VDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2NnJBTXJDc25jdnBPeTFRemlRMHZNc0ZjTjNPQUlEMHFDSnJPM1ZVNWV3QzhhQkQySlA3VE5Va1hyMWVtenllR0hBQnV5M2c0U2wxWG9EdjBXOGtoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDczNTUwNTc2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTI4Nzk1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJCalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkJqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU2R6c1NOU291OUJVVlZISjU1YnNZb3BBUUxyQWt3KzU5WHFRaFlkSEpvdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MjI0ODkwNjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTI4Nzk1MzA5M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
