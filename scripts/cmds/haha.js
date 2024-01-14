module.exports = {
	config: {
			name: "haha",
			version: "1.0",
			author: "Jaychris Garcia",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "hahaha") return message.reply("happy mo naman idol HAHAHAHAHA what if chat mo owner ko 👇https://www.facebook.com/Itzkyleigopjk  PARA MAS SASAYA KA LALO HAHAHAHA.");
}
};