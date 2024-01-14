const axios = require('axios');
const request = require('request');
const fs = require("fs");

module.exports = {
config: {
  name: "shoti5",
  version: "1.0",
  author: "Ronald Allen Albania",
  countDown: 5,
  category: "chatbox",
},

langs: {
  vi: {},
  en: {},
},
  onStart: async function ({ api, event }) {

  api.sendMessage(`⏱️ | Video is sending please wait.`, event.threadID, event.messageID);
JSON.parse(fs.readFileSync('cliff.json')); const link = urls[Math.floor(Math.random() * urls.length)];.then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
                                                body: `random bebegurl sa tiktok`,
            attachment: fs.createReadStream(__dirname + `/cache/cliff.json`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cliff.json`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/cliff.json`)).on("close", callback);
      }) .catch(err => {
                     api.sendMessage("api error status: 200", event.threadID, event.messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true);
                  })     
  }
};