const Discord = require('discord.js');
const client = new Discord.Client();
const generator = require('generate-password');

client.on('ready', () => {
 client.user.setActivity("Generating Nitro!");
 console.log("Bot ("+client.user.tag+") Ready!");
 });
 
client.on("message", async message => {
  const prefix = "-";
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "help"){
	var i = 0;
    while (i<1000) { //Number of messages
    var password = generator.generate({
    length: 16,
    numbers: true
});
	message.channel.send("https://discord.gift/" + password)
    i++;
	}
  }
})

client.login('Nzc5ODQzNDY0MjYyNzEzMzU2.X7mb0g.Ec7mfA1ux221mt1plgXv3Mdlggo');
