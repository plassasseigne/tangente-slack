module.exports = (app) => {
  app.command('/ping', async ({ command, say, ack }) => {
    const start = Date.now();
    await ack();
    const end = Date.now();

    await say(`Pong <@${command.user_name}> ! Le délai est de ${start - end} ms.`);
  });
};