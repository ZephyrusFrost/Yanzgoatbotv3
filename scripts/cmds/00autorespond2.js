module.exports = {
  config: {
    name: "autorespondv4",
    version: "2.0.0",
    author: "Lorenzo",
    cooldowns: 5,
    role: 0,
    shortDescription: "Autoresponds with reactions and replies",
    longDescription: "Autoresponds with reactions and replies based on specific words or triggers.",
    category: "fun",
    guide: "-autorespondv2",
  },
  onStart: async ({ api, event }) => {
    // Blank onStart function as per the request
  },
  onChat: async ({ api, event }) => {
    const { body, messageID, threadID } = event;

    // Reactions based on words
    const emojis = {
      "😎": ["kyle","Kyle","@Kyle Bait-it","Kyle Bait-it"]
      "💜": ["ayla", "zahi", "xyl", "zunair", "purple", "violet", "lila", "oi", "owemjii", "hmm", "Kyle","kyle"],
      "💚": ["dia", "seyj", "ginanun", "gaganunin", "pfft", "Kyle", "gumanun"],
      "😼": ["Jo", "Ariii", "talong", "galit"],
      "": ["wtf", "fck", "haaays", "naku", "ngi ", "ngek", "nge ", "luh", "lah"],
      "😹": ["pill", "laugh", "lt ", "gagi", "huy", "hoy"],
      "⏳": ["prodia", "sdxl", "bardv3", "tanongv2", "-imagine", "genimg", "Tanongv4", "kamla", "-shortcut"],
      "🤖": ["bot","Bot"],
      "🗣️": ["fak"],
    };

    // Replies to specific words
    const replies = {
      "kyle": "busy pa si boss Kyle, nag jajabol pa kasi", 
      "Kyle": " hinahanap mo nanamn pogi kung admin no?, crush mo ata admin ko e", 
      "collab": "Sige collab kayo, magbabasa ako",
      "?rank": "nagrarank ka na naman naka off eh",
      "pafork": "ano kung ayaw ko??",
      "hi": "pang ilang hi po mo na iyan?",
      "lc": "sagot ko na talaga lastchat, pag may nagchat pa after me, pangit siya.",
      "*": "Sige, correct mo typo mo, tanga ka kasi🤦🏻‍♂️",
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