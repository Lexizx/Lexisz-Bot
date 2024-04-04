module.exports.config = {
    name: "autotime",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "msg",
  prefix: true, 
  category: "user", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};
const nam = [{
    timer: '12:00:00 AM',
    message: ['Hey, Good afternoon, it is 8:00 am, I hope you are doing very well.😙']
},
             {
    timer: '1:00:00 AM',
    message: ['Hey, Good afternoon, it is 9:00 am, I hope you are doing very well.🤟']
},
						{
    timer: '2:00:00 AM',
    message: ['Hey, Good afternoon, it is 10:00 am, I hope you are doing very well.😾']
},
						 {
    timer: '3:00:00 AM',
    message: ['Hey, Good afternoon, it is 11:00 am, I hope you are doing very well.🫠🫠।']
},
						 {
    timer: '4:00:00 AM',
    message: ['Hey, Good afternoon, it is 12:00 pm, I hope you are doing very well.  ']
},
						 {
    timer: '5:00:00 AM',
    message: ['Hey, Good afternoon, it is 1:00 pm, I hope you are doing very well. ']
},
						 {
    timer: '6:00:00 AM',
    message: ['Hey, Good afternoon, it is 2:00 pm, I hope you are doing very well.❤️  ']
},
						 {
    timer: '7:00:00 AM',
    message: ['Hey, Good afternoon, it is 3:00 pm, I hope you are doing very well.  ']
},
						 {
    timer: '8:00:00 AM',
    message: ['Hey, Good afternoon, it is 4:00 pm, I hope you are doing very well. 😊 ']
},
						 {
    timer: '9:00:00 AM',
    message: ['Hey, Good afternoon, it is 5:00 pm, I hope you are doing very well. 😊']
},
             {
    timer: '10:00:00 AM',
    message: ['Hey, Good afternoon, it is 6:00 pm, I hope you are doing very well. 😊❤️' ]
},
						 {
    timer: '11:00:00 AM',
    message: ['Hey, Good afternoon, it is 7:00 pm, I hope you are doing very well. 😊']
},
						 {
    timer: '12:00:00 PM',
    message: ['Hey, Good afternoon, it is 8:00 pm, I hope you are doing very well. 😊']
},					
						 {
    timer: '1:00:00 PM',
    message: ['Hey, Good afternoon, it is 9:00 pm, I hope you are doing very well. 😊❤️ ']
},
						 {
    timer: '2:00:00 PM',
    message: ['Hey, Good afternoon, it is 10:00 pm, I hope you are doing very well. 😊😻 ']
},
						 {
    timer: '3:00:00 PM',
    message: ['Hey, Good afternoon, it is 11:00 pm, I hope you are doing very well. 😊']
},
						 {
    timer: '4:00:00 PM',
    message: ['Hey, Good afternoon, it is 12:00 am, I hope you are doing very well. 😊❤️']
},
						{
    timer: '5:00:00 PM',
    message: ['Hey, Good afternoon, it is 1:00 am, I hope you are doing very well. 😊🥀 ']
},
						 {
    timer: '6:00:00 PM',
    message: ['Hey, Good afternoon, it is 2:00 am, I hope you are doing very well. 😊😻']
},
						 {
    timer: '7:00:00 PM',
    message: ['Hey, Good afternoon, it is 3:00 am, I hope you are doing very well.😍. ']
},
             {
    timer: '8:00:00 PM',
    message: ['Hey, Good afternoon, it is 4:00 am, I hope you are doing very well.❤️']
},
             {
    timer: '9:00:00 PM',
    message: ['Hey, Good afternoon, it is 5:00 am, I hope you are doing very well.']
},
             {
    timer: '10:00:00 PM',
    message: ['Hey, Good afternoon, it is 6:00 am, I hope you are doing very well.🙂']
},
            {
    timer: '11:00:00 PM',
    message: ['Hey, Good afternoon, it is 7:00 am, I hope you are doing very well.😭']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};
