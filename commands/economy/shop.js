/**
 * Tanki Bot.
 * 
 * Bot shop where you can buy items.
 * 
 * @author gbfactory
 * @since  06.01.2020
*/

const Discord = require("discord.js");

module.exports = {
    name: 'shop',
    description: 'Explore the different shop categories to see what new items you can buy!',
    aliases: ['store'],
    usage: '`>shop` - Main screen \n`>shop turrets` - Buy turrets (🚧) \n`>shop hulls` - Buy hulls (🚧) \n`>shop containers` - Buy Containers \n`>shop special` - Buy special items',
    cooldown: 3,
    execute(client, message, args, con, functions) {

        let authorId = message.author.id;

        con.query(`SELECT * FROM users WHERE id = '${authorId}'`, (err, rows) => {
            if (err) throw err;

            if (rows.length < 1) {
                return message.channel.send({ embed: functions.embedRegister() });
            }

            if (!args[0]) {
                let shop = new Discord.MessageEmbed()
                    .setColor("#00ffff")
                    .setAuthor("Tanki Bot")
                    .setTitle("<:MenuShop:661186115310583808> Shop")
                    .setDescription("Select a category")
                    .addField("**Categories**", "`>shop turrets` \n`>shop hulls` \n`>shop containers` \n`>shop special`")
                    .setThumbnail('https://i.imgur.com/ZOclxPD.png')
                message.channel.send({ embed: shop });
                return;
            } else if (args[0] == "turrets" || args[0] == "t") {
                message.channel.send("❌ Coming soon...")
            } else if (args[0] == "hulls" || args[0] == "h") {
                message.channel.send("❌ Coming soon...")
            } else if (args[0] == "containers" || args[0] == "c") {
                let shopContainers = new Discord.MessageEmbed()
                    .setColor("#00ffff")
                    .setThumbnail('https://i.imgur.com/CtoiatU.png')
                    .setAuthor("Tanki Bot")
                    .setTitle("<:MenuShop:661186115310583808> Shop - Containers")
                    .setDescription("Buy containers with `>buy <quantity>`")
                    .addField("<:MenuContainers:661186115147137056> 1 Container", "5000 💎", true)
                    .addField("<:MenuContainers:661186115147137056> How to buy", "`>buy <quantity>`", true)
                    .addField("<:MenuContainers:661186115147137056> How to open", "`>open c`", true)
                message.channel.send({ embed: shopContainers });

            } else if (args[0] == "special") {
                let shopSpecial = new Discord.MessageEmbed()
                    .setColor("#00ffff")
                    .setThumbnail('https://i.imgur.com/CtoiatU.png')
                    .setAuthor("Tanki Bot")
                    .setTitle("<:MenuShop:661186115310583808> Shop - Special")
                    .setDescription("Buy with `>buy <item>`")
                    .addField("<:Probitva2:684069669585682498> Pro Battle", "8000 💎 (❌)", true)
                    .addField("<:Clan_license:684069669191155728> Clan License", "2000 <:tankoin:660948390263128124> (❌)", true)
                    .addField("<:Rename_pass:684069669208064177> Rename Pass", "1000 <:tankoin:660948390263128124>", true)
                    .addField("<:Battle_Pass:684069669069520925> Battle Pass", "500 <:tankoin:660948390263128124> (❌)", true)
                message.channel.send({ embed: shopSpecial });
            }

        });

    },
};