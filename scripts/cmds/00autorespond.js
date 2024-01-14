module.exports = {
config: {
name: "autorespondv3",
version: "2.0.0",
author: "Haru",
cooldown: 5,
role: 0,
shortDescription: "Autoresponds with reactions and replies",
longDescription: "Autoresponds with reactions and replies based on specific words or triggers.",
category: "fun",
guide: "?autorespondv3",
},
onStart: async ({ api, event }) => {
// Blank onStart function as per the request
},
onChat: async ({ api, event }) => {
const { body, messageID, threadID } = event;

// Reactions based on words
const emojis = {
"💜": ["Cliff", "August", "Jonell", "Kylepogi", "purple", "Fritz", "Sab", "Haru", "Xuazane", "Kim","Kyle","kyle"],
"🫡": ["yanzu","Yanzu"],
"💚": ["dia", "seyj", "ginanun", "gaganunin", "pfft", "xyrene", "gumanun"],
"😾": ["Jo", "Ariii", "talong", "galit"],
"😼": ["wtf", "fck", "haaays", "naku", "ngi ", "ngek", "nge ", "luh", "lah"],
"😸": ["pill", "laugh", "lt ", "gagi", "huy", "hoy"],
"⏳": ["prodia", "sdxl", "bardv3", "tanongv2", "-imagine", "genimg", "Tanongv4", "-shortcut","ai","Ai"],
"👋": ["hi ", "hello ", "kumusta"],
"🔥": ["apoy", "lakas", "astig", "damn", "angas", "galing", "husay"],
};

// Replies to specific words
const replies = {
"Angass": "mas maangas si Kyle lods😎", 
"angas": "uwu ako lang to lods😎", 
"Bye": "umalis ka gago...",
"Kyle": "ano nanaman ung Kaylangan mo sa admin ko",
"@Kyle Bait-it": "tumatae pa si Kyle antayin mo nalang bumalik", 
"kyle": "kaylangan mo sa pogi kung admin?", 
"Asep": "pang ilang Asep mo na iyan? adik bato??",
"hi po": "Hello Can U attracted my admin na pogi👉https://www.facebook.com/Itzkyleigopjk",
"lastchat": "sagot ko na talaga lastchat, pag may nagchat pa after me, pangit siya.",
"*": "Sige, correct mo typo mo, tanga ka kasi🤦🏻‍♂️",
"Geh": "geh bahala karin dyan inamoka",
"lakas": "lakas ng baho ng hininga mo lods", 
"tagal": "mag hintay ka  wag aporado", 
"yanzu": "yess my lord?🙇‍♂️", 
};

// React based on words
for (const [emoji, words] of Object.entries(emojis)) {
for (const word of words) {
if (body.toLowerCase().includes(word)) {
api.setMessageReaction(emoji, messageID, () => {}, true);
}
}
}

// Reply based on triggers
for (const [trigger, reply] of Object.entries(replies)) {
if (body.toLowerCase().includes(trigger)) {
api.sendMessage(reply, threadID, messageID);
}
}
},
};