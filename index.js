const { App } = require('@slack/bolt');
const dotenv = require('dotenv');
const pingCommand = require('./commands/pingCommand');
const teamMood = require('./commands/teamMood');

const homeView = require('./views/homeView');

dotenv.config({ 
  path: ['.env.local', '.env'] 
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  port: process.env.PORT || 3000,
});

pingCommand(app);
teamMood(app);

homeView(app);

(async () => {
  await app.start();

  console.log("⚡️ Bolt app is running!");
})();