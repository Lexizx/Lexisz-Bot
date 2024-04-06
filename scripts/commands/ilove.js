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
	if (event.body.indexOf("Sana all")==0 || (event.body.indexOf("Sana ol")==0 || (event.body.indexOf("sana all")==0 || (event.body.indexOf("sana oil")==0)))) {
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
	if (event.body.indexOf("Good morning")==0 || (event.body.indexOf("Morning")==0 || (event.body.indexOf("good morning")==0 || (event.body.indexOf("morning")==0)))) {
		var msg = {
				body: "Good morning too. Have a nice day ❤️😊"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("Good night")==0 || (event.body.indexOf("goodnight")==0 || (event.body.indexOf("Guynyt")==0 || (event.body.indexOf("nyt")==0)))) {
		var msg = {
				body: "Good night, Sweet dreams 💕"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("Hello")==0 || (event.body.indexOf("hello")==0 || (event.body.indexOf("helo")==0 || (event.body.indexOf("Helo")==0)))) {
		var msg = {
				body: "Hello, How are you? 💕"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("Okay lang")==0 || (event.body.indexOf("im fine")==0 || (event.body.indexOf("I'm fine")==0 || (event.body.indexOf("Gwenchana")==0)))) {
		var msg = {
				body: "Are you sure? Are u really okay? 😊"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("Sad")==0 || (event.body.indexOf("malungkot")==0 || (event.body.indexOf("sad")==0 || (event.body.indexOf("Malungkot")==0)))) {
		var msg = {
				body: "Why are u sad? Don't be sad, everything will be okay. ❤️😊"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	if (event.body.indexOf("Broken")==0 || (event.body.indexOf("broken")==0 || (event.body.indexOf("Brokenhearted")==0 || (event.body.indexOf("Sawi")==0)))) {
		var msg = {
				body: "Are u really broken hearted? Do you need hug? 😒"
    }
			api.sendMessage(msg, threadID, messageID);
		}



	



	


	
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
