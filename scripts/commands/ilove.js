const fs = require("fs");
module.exports.config = {
  name: "iloveu",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("I love you")==0 || (event.body.indexOf("i love you")==0 || (event.body.indexOf("I love u")==0 || (event.body.indexOf("I love you")==0)))) {
		var msg = {
				body: "Hmm... lexis Love you too 😇😻 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("Bobo")==0 || (event.body.indexOf("Bobo mo")==0 || (event.body.indexOf("bobo")==0 || (event.body.indexOf("bobo mo")==0)))) {
		var msg = {
				body: "Mas bobo kapo. 😇😻 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("Anong pangalan mo")==0 || (event.body.indexOf("anong pangalan mo")==0 || (event.body.indexOf("anong pangalan mo?")==0 || (event.body.indexOf("Anong pangalan mo?")==0)))) {
		var msg = {
				body: "My name is Lexisz-BOT made by Andren kasi trip niya lang 😁😍😒😂."
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("HAHAHAHA")==0 || (event.body.indexOf("HAHAHA")==0 || (event.body.indexOf("hahaha")==0 || (event.body.indexOf("hahahaha")==0 || (event.body.indexOf("ahahahaha")==0))))) {
		var msg = {
				body: "Anong nakakatwawa? TF? 😒"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("Tangina")==0 || (event.body.indexOf("tangina")==0 || (event.body.indexOf("tangina mo")==0 || (event.body.indexOf("Tangina mo")==0)))) {
		var msg = {
				body: "Bunganga mo, Sampalin kita eh. 😒"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("Kelan ako magkakajowa")==0 || (event.body.indexOf("Kelan ako magkakajowa?")==0 || (event.body.indexOf("kelan ako magkakajowa")==0 || (event.body.indexOf("kelan ako magkakajowa?")==0)))) {
		var msg = {
				body: "Paalam ka muna sa parents mo boi . 😒"
    }
			api.sendMessage(msg, threadID, messageID);
		}






	
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
