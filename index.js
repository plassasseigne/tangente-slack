const { App } = require('@slack/bolt');
const dotenv = require('dotenv');

dotenv.config({ 
  path: ['.env.local', '.env'] 
})

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  port: process.env.PORT || 3000,
});


(async () => {
  await app.start();

  console.log("⚡️ Bolt app is running!");
})();