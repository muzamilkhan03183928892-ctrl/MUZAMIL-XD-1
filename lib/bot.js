const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://arslan-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/bandusers.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/MUZAMIL-XD",
REPO_NAME: process.env.REPO_NAME || "MUZAMIL-XD",
BOT_NAME: process.env.BOT_NAME || "MUZAMIL-XD",
DESCRIPTION: process.env.DESCRIPTION || "MUZAMIL-XD PAKISTANI POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "923183928892",
OWNER_NAME: process.env.OWNER_NAME || "Muzamil Official",
ST_SAVE: process.env.ST_SAVE || "MUZAMIL-XD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "MUZAMIL-XD-BY-MUZAMIL-OFFICIAL",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY MUZAMIL-XD`* _*POWERD BY*_ *Muzamio Official Whtsapp Bot*",
FOOTER: process.env.FOOTER || "MUZAMIL-XD",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ MUZAMIL-XD BY ARSLAN-MD OFFICIAL*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363426106687970@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VbCkm3rAe5VzCYLtNb2u",
INSTA: process.env.INSTA || "https://Instagram.com/muzamilkhan_892",
ALIVE_IMG: process.env.ALIVE_IMG || "https://ibb.co/ymzhC8LZ",
OWNER_IMG: process.env.OWNER_IMG || "https://ibb.co/ymzhC8LZ",
CONVERT_IMG: process.env.CONVERT_IMG || "https://ibb.co/ymzhC8LZ",
AI_IMG: process.env.AI_IMG || "https://ibb.co/ymzhC8LZ",
SEARCH_IMG: process.env.SEARCH_IMG || "https://ibb.co/ymzhC8LZ",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://ibb.co/ymzhC8LZ",
MAIN_IMG: process.env.MAIN_IMG || "https://ibb.co/ymzhC8LZ",
GROUP_IMG: process.env.GROUP_IMG || "https://ibb.co/ymzhC8LZ",
FUN_IMG: process.env.FUN_IMG || "https://ibb.co/ymzhC8LZ",
TOOLS_IMG: process.env.TOOLS_IMG || "https://ibb.co/ymzhC8LZ",
OTHER_IMG: process.env.OTHER_IMG || "https://ibb.co/ymzhC8LZ",
MOVIE_IMG: process.env.MOVIE_IMG || "https://ibb.co/ymzhC8LZ",
NEWS_IMG: process.env.NEWS_IMG || "https://ibb.co/ymzhC8LZ",
PP_IMG: process.env.PP_IMG || "https://ibb.co/ymzhC8LZ"
};
