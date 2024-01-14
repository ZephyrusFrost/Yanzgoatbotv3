const axios = require('axios');

module.exports = {
    config: {
        name: "uptime",
        version: "1.0",
        author: "Ronald Allen Albania",
        role: 0,
        shortDescription: {
            en: "Add a URL to the uptimer service."
        },
        longDescription: {
            en: "This command adds a given URL to the uptimer service to keep it alive."
        },
        category: "Utility",
        guide: {
            en: "To use this command, type: -uptime <name> <url>"
        }
    },

    langs: {
        vi: {
            adding: "Đang thêm URL vào dịch vụ uptimer...",
            added: "URL đã được thêm vào dịch vụ uptimer.",
            alreadyExists: "The specified URL already exists in the monitored list.",
            error: "Có lỗi xảy ra khi thêm URL."
        },
        en: {
            adding: "Adding the URL to the uptimer service...",
            added: "The URL has been added to the uptimer service.",
            alreadyExists: "The specified URL already exists in the monitored list.",
            error: "An error occurred while adding the URL."
        }
    },

    onStart: async function ({ api, args, event, getLang }) {
        if (args.length < 2) {
            return api.sendMessage(getLang("guide"), event.threadID);
        }

        const name = args[0];
        const url = args[1];

        api.sendMessage(getLang("adding"), event.threadID);

        try {
            const response = await axios.get(`https://botscope.chatbot-community-ltd.repl.co/api/ping?name=${name}&url=${encodeURIComponent(url)}`);
            if (!response.data.error) {
                api.sendMessage(getLang("added"), event.threadID);
            }
        } catch (error) {
            api.sendMessage(getLang("alreadyExists"), event.threadID);
            console.error(error);
        }
    }
};
