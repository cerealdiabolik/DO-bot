const discord = require('discord.js');


var bot = new discord.Client();

bot.on('ready', function()  {
    bot.user.setPresence({ game: { name: 'Last of DO bot, V:1.0', type: 0 } });
    console.log(bot.user.username);
});
bot.login('NDU4MzE4Njk1NTYzNzg4MzEz.DgmB5w.cS6tIT4_f-joIOlQGV88pECISZA');

//Join/leave/StarterRole//
bot.on("guildMemberAdd", member => {
    //let aucun = member.guild.roles.find("name", "Aucun rôles");
    member.guild.channels.find("name", "general").send(`Bienvenue ${member.user.username} chez [Łαѕт] Łαѕт σƒ Uѕ, nous te souhaitons un agréable séjour pilote ! `)
    //member.addRole(aucun)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "general").send(`${member.user.username}, songeant qu’ils faudraient nous quitter, nous nous plaçâmes tristement près de sa soute.`)
})

//Message Entree/Sortie//

bot.on("message", message => {
    var enchères = new discord.RichEmbed()
    .setColor('#FE1A1A')
    .addField("__**ENCHERES**__", "il reste 5 minutes avant la fin des enchères")
    if (message.content === "123") { 
      var interval = setInterval (function () {
        message.channel.send(enchères)
      }, 3600000); 
      console.log("ws");
    }
});

