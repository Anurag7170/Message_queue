const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue");
async function init() {
  const res=notificationQueue.add("email to Anurag", {
    email: "anuragpandeyjee200@gmail.com",
  });
  console.log(res.id);
}

init();
