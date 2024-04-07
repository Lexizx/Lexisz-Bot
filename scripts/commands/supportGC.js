module.exports = {
  config:{
      name: "supportgc",
      version: "0.0.2",
      permission: 0,
      prefix: 'awto',
      credits: "Nayan",
      description: "Add user to support group",
      category: "user",
      usages: "",
      cooldowns: 5,
  },

  // start is a function that will be executed when the command is executed
  start: async function ({ nayan, args, events }) {
    const supportGroupId = "7198310346962149"; // ID of the support group

    const threadID = events.threadID;
    const userID = events.senderID;

    // Check if the user is already in the support group
    const threadInfo = await nayan.getThreadInfo(supportGroupId);
    const participantIDs = threadInfo.participantIDs;
    if (participantIDs.includes(userID)) {
      // User is already in the support group
      nayan.sendMessage(
        "[ ⏩️ ]You are already in the support group. If you didn't find it, please check your message requests or spam box",
        threadID
      );
    } else {
      // Add user to the support group
      nayan.addUserToGroup(userID, supportGroupId, (err) => {
        if (err) {
          console.error("Failed to add user to support group", err);
          nayan.sendMessage("[ ❌️ ] I can't add you because your id is not allowed message request or your account is private. please add me then try again...", threadID);
        } else {
          nayan.sendMessage(
            "[ ✅️ ]You have been added to the admin support group. If you didn't find the box in your inbox, please check your message requests or spam box.",
            threadID
          );
        }
      });
    }
  },
};
