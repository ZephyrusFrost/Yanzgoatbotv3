const axios = require('axios');

const GPT_API_URL = 'https://sandipapi.onrender.com/gpt';
const PREFIXES = ['ask'];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {
    // Initialization logic if needed
  },
  onChat: async function ({ api, event, args, message }) {
    try {
      const prefix = PREFIXES.find((p) => event.body && event.body.toLowerCase().startsWith(p));

      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }

      const prompt = event.body.substring(prefix.length).trim();

      if (!prompt) {
        const defaultMessage = getCenteredHeader("𝗛𝗲𝗹𝗹𝗼👋I'm 𝗬𝗔𝗡𝗭𝗨 made by 𝗞𝘆𝗹𝗲 𝗕𝗮𝗶𝘁-𝗶𝘁") + "\n━━━━━━━━━━━━━━━━━━\n𝗔𝗦𝗞 𝗠𝗘 𝗔𝗡𝗬𝗧𝗛𝗜𝗡𝗚!";
        await message.reply(defaultMessage);
        return;
      }

      const answer = await getGPTResponse(prompt);

      // Adding header to the answer
      const answerWithHeader = getCenteredHeader("𝗞𝗬𝗟𝗘 🤖") + "\n━━━━━━━━━━━━━━━━━━\n" + answer; "\n━━━━━━━━━━━━━━━━━━\n\nFB LINK: https://www.facebook.com/Itzkyleigopjk\n"; 

      await message.reply(answerWithHeader);
    } catch (error) {
      console.error("Error:", error.message);
      // Additional error handling if needed
    }
  }
};

function getCenteredHeader(header) {
  const totalWidth = 32; // Adjust the total width as needed
  const padding = Math.max(0, Math.floor((totalWidth - header.length) / 2));
  return " ".repeat(padding) + header;
}

async function getGPTResponse(prompt) {
  // Implement caching logic here

  const response = await axios.get(`${GPT_API_URL}?prompt=${encodeURIComponent(prompt)}`);
  return response.data.answer;
}