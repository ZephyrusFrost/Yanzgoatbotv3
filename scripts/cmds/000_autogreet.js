const allOnEvent = global.GoatBot.onEvent;

const fs = require("fs");
const cron = require("node-cron");
const greetings = {
  morning: [
    { time: "00:10minutes", message: "DON'T FORGET TO FOLLOW/ADD MY BOSS NA POGI PARA KEEP UPDATE KA NI YANZUBOT\n\nFBLink:https://www.facebook.com/Itzkyleigopjk" },
  ],
};

  module.exports = {
  config: {
    name: "autogreet1",
    version: "1.1",
    author: "Zed",
    description: "Autogreeting",
    category: "...."
  },

onStart: async ({ api, args, message, event, threadsData, usersData, dashBoardData, threadModel, userModel, dashBoardModel, role, commandName }) => {

cron.schedule('10 * * * *', () => {
  sendRandomGreeting(greetings.eveningDinner);
});


function sendRandomGreeting(greetingArray) {
  const randomIndex = Math.floor(Math.random() * greetingArray.length);
  const { time, message } = greetingArray[randomIndex];
  console.log(`[${time}] ${message}`);
}
}
};