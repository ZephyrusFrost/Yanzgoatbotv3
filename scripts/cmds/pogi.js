module.exports = {
	config: {
			name: "pogi",
			version: "1.0.0",
			author: "Kyle",
			countDown: 5,
			role: 0,
			shortDescription: "No Prefix",
			longDescription: "No Prefix",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "pogi") return message.reply("mas pogi admin ko na si Kyle maraming babae naghahabol nun e, pero hinde lang nila pinahalata na crush nila master ko kasi nahihiya sila baka mah reject nanamn sila ky master Kyle."));
}
};