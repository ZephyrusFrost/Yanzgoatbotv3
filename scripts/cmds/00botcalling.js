module.exports.config = {
   name: "interact bot calling ",
   version: "1.0.0",
   hasPermssion: 0,
   credits: "Zephyrus ", //bf mo pala
   description: "no prefix",
   usePrefix: false,
   commandCategory: "system",
   usages: "tawag robot etc...",
   cooldowns: 1,
};

module.exports.handleEvent = function (
{
   api,
   event,
   client,
   __GLOBAL
})
{
   //font
   function font(letters)
   {
      const change = {
         a: "𝖺",
         b: "𝖻",
         c: "𝖼",
         d: "𝖽",
         e: "𝖾",
         f: "𝖿",
         g: "𝗀",
         h: "𝗁",
         i: "𝗂",
         j: "𝗃",
         k: "𝗄",
         l: "𝗅",
         m: "𝗆",
         n: "𝗇",
         o: "𝗈",
         p: "𝗉",
         q: "𝗊",
         r: "𝗋",
         s: "𝗌",
         t: "𝗍",
         u: "𝗎",
         v: "𝗏",
         w: "𝗐",
         x: "𝗑",
         y: "𝗒",
         z: "𝗓",
         A: "𝖠",
         B: "𝖡",
         C: "𝖢",
         D: "𝖣",
         E: "𝖤",
         F: "𝖥",
         G: "𝖦",
         H: "𝖧",
         I: "𝖨",
         J: "𝖩",
         K: "𝖪",
         L: "𝖫",
         M: "𝖬",
         N: "𝖭",
         O: "𝖮",
         P: "𝖯",
         Q: "𝖰",
         R: "𝖱",
         S: "𝖲",
         T: "𝖳",
         U: "𝖴",
         V: "𝖵",
         W: "𝖶",
         X: "𝖷",
         Y: "𝖸",
         Z: "𝖹"
      };
      let formattedFont = "";
      for (let i = 0; i < letters.length; i++)
      {
         const char = letters[i];
         formattedFont += change[char] || char;
      }
      return formattedFont
   }
   {
      var
      {
         threadID,
         messageID
      } = event;
    
  //botcalling
      {
         let ha = ["bot176", "176", "yanzu", "kylesbot"," Yanzu"];
         if (event.body && typeof event.body === 'string' && event.body.trim() !== '')
         {
            if (ha.includes(event.body.toLowerCase()))
            {
               let haVar = ["yes master Kyle ?", "I'm  always here  master", "yezz master?", "I'm  here master Kung pogi ", "yess master?", "Yess I'm  Riaome Ai can I help you?", "the Riaome  is here sir!!", "why master Kyle?"];
               let haRes = haVar[Math.floor(Math.random() * haVar.length)];
               api.sendMessage(font(`${haRes}`), threadID, messageID);
               api.setMessageReaction('🫡', event.messageID, (err) =>
               {}, true);
            }
         }
      };
   }