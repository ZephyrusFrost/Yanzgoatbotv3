const axios = require('axios');

module.exports = {
    config: {
        name: "ai2",
        aliases: ["aly", "ai2"],
        version: "1.0",
        author: "Team vortex",
        shortDescription: "Ask a question to GPT-3.5.",
        longDescription: "Ask a question to GPT-3.5 using the provided API.",
        category: "ai",
        guide: { en: "{pn} [question]" },
    },

    onStart: async function ({ message, args }) {
        const question = args.join(" ");
        if (!question) {
            return message.reply("Hi I'm Yanzu Ai Please provide a question to ask GPT made by Kyle\n\nExample: ×ai2 [question]\n\nFB Link: https://www.facebook.com/Itzkyleigopjk\n\n Note: Please don't spam the command or else you will be blocked by the system.");
        } else {
            try {
                const response = await axios.get(`hercai api: https://openai-rest-api.vercel.app/hercai?ask=hello&model=v3`);
                const response = await axios.get(apiUrl);
                const gptAnswer = response.data.reply;

                message.reply(gptAnswer);
            } catch (e) {
                console.error(e);
                message.reply("Error while fetching the GPT response.");
            }
        }
    }
};