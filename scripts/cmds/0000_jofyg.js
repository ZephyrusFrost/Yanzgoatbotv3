const os = require("os");

module.exports = {
  config: {
    name: "uptime",
    aliases: ["up", "upt"],
    version: "2.1",
    author: "SiAM",
    longDescription: "uptime checker",
    category: "Utility",
    guide: {
      en: "{pn}",
    },
  },

  onStart: async function ({ api, message, event }) {
    try {
      const uptimeInSeconds = process.uptime();

      const days = Math.floor(uptimeInSeconds / 86400);
      const hours = Math.floor((uptimeInSeconds % 86400) / 3600);
      const minutes = Math.floor((uptimeInSeconds % 3600) / 60);

      const uptimeString = `${days} days, ${hours} hours, ${minutes} minutes`;

      const pingStart = Date.now();
      await api.sendMessage({ body: "testing..." }, event.threadID);
      const pingEnd = Date.now();
      const ping = Math.floor((pingEnd - pingStart) / 10); 

      const isStable = ping < 110;  

      const memoryUsage = (os.totalmem() - os.freemem()) / (1024 ** 2); 

      let statusMessage = "Bot is running smoothly 🚀";
      if (!isStable) {
        statusMessage = "Bot is currently experiencing higher latency ⚠";
      }

      let uptimeGreeting = "Greetings!"; 
      if (days > 5) {
        uptimeGreeting = "Impressive! The bot has been here for over 5 days!";
      } else if (days > 2) {
        uptimeGreeting = "Cheers! The bot is doing well on its journey!";
      } else if (days > 1 || (days === 1 && hours >= 1)) {
        uptimeGreeting = "Good to see you! The bot has been active for over a day!";
      } else if (hours >= 12) {
        uptimeGreeting = "The bot has been active for a solid 12 hours! Keep the vibes going!";
      } else if (hours >= 6) {
        uptimeGreeting = "Half a day in, and the bot is rocking it!";
      } else if (hours >= 3) {
        uptimeGreeting = "Three hours strong! The bot is in the groove!";
      } else if (hours >= 1) {
        uptimeGreeting = "Good to see you! The bot has been active for over an hour!";
      } else if (minutes > 30) {
        uptimeGreeting = "Half an hour has passed, and the bot is going strong!";
      } else if (minutes > 15) {
        uptimeGreeting = "15 minutes in, and the bot is ready for action!";
      } else if (minutes > 5) {
        uptimeGreeting = "The bot is getting warmed up after 5 minutes of uptime!";
      } else if (minutes > 1) {
        uptimeGreeting = "One minute down, and the bot is just getting started!";
      } else {
        uptimeGreeting = "Hello there! The bot is just getting started!";
      }

      const additionalMessages = [
        "Enjoy your time with the bot!",
        "Feel free to ask me anything!",
        "Let the bot bring some joy to your day!",
        "Marin BoT: Did you know the bot loves coding?",
        "Thanks for having me in your Group!",
        "Ready for some cool commands? Just ask!",
        "Bot fun fact: I can generate random jokes!",
        "Need assistance? I'm here to help!",
      ];

      const randomAdditionalMessage = additionalMessages[Math.floor(Math.random() * additionalMessages.length)];

      const replyMessage = `🤖 Uptime: ${uptimeString}\n🚦 Status: ${statusMessage}\n🕒 Ping: ${ping}ms\n💾 Memory Usage: ${memoryUsage.toFixed(2)} MB\n\n${uptimeGreeting}\n\n🌟 ${randomAdditionalMessage}`;

      message.reply(replyMessage);
    } catch (error) {
      console.error(error);
      message.reply("Error getting uptime and ping.");
    }
  },
};