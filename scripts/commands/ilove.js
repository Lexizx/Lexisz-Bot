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
	if (event.body.indexOf("Saan na kayo")==0 || (event.body.indexOf("Saan na kayo?")==0 || (event.body.indexOf("Saan na sila")==0 || (event.body.indexOf("Saan na sila?")==0)))) {
		var msg = {
				body: "Malay ko senyu, lumalabas kayu, tapos ako nandito lang sa GC, tamang reply lang sa mga kalokohan niyu 😒"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("Sana all")==0 || (event.body.indexOf("Sana ol")==0 || (event.body.indexOf("sana all")==0 || (event.body.indexOf("sana ol")==0)))) {
		var msg = {
				body: "Anong sana all ka dyan hfmt 😒"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("Kumain na kayo")==0 || (event.body.indexOf("Kumain na kayo?")==0 || (event.body.indexOf("Kumain bana kayo")==0 || (event.body.indexOf("Kumain bana kayo?")==0)))) {
		var msg = {
				body: "Sana all kumakain ng pagkain, Ako kasi puro nalang code kinakain ko hhmft. 😒"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("Kain guys")==0 || (event.body.indexOf("kain")==0 || (event.body.indexOf("kain na")==0 || (event.body.indexOf("Kain na")==0)))) {
		var msg = {
				body: "Edi kumain ka 😒"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("Bwisit")==0 || (event.body.indexOf("Bwiset")==0 || (event.body.indexOf("Nakakaines")==0 || (event.body.indexOf("Nakakainis")==0)))) {
		var msg = {
				body: "Anong nakakabwisit, aber? 😒"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("tru")==0 || (event.body.indexOf("Tru")==0 || (event.body.indexOf("tru be")==0 || (event.body.indexOf("true")==0)))) {
		var msg = {
				body: "Trulalu ey 😂😒"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("Sorry")==0 || (event.body.indexOf("Sorry na")==0 || (event.body.indexOf("Sori")==0 || (event.body.indexOf("sorry")==0)))) {
		var msg = {
				body: "Sorry is not enough, Akala mo nakakatuwa ? 😏"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("Salamat")==0 || (event.body.indexOf("salamat")==0 || (event.body.indexOf("Salamat boss")==0 || (event.body.indexOf("Salamat pre")==0)))) {
		var msg = {
				body: "You are very welcome. Ferson 😒"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("Ayoko pumasok")==0 || (event.body.indexOf("Pumasok")==0 || (event.body.indexOf("Wag na pumasok")==0 || (event.body.indexOf("Wag na")==0)))) {
		var msg = {
				body: "Wag kana pumasok boss. HAHAHAH 😂"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	



	



	
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
