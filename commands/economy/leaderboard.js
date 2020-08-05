/**
 * Tanki Bot
 * 
 * Command to check the bot's leaderboard (ex: top 10 players by crystals)
 * 
 * @author gbfactory
 * @since ?
 */

const Discord = require("discord.js");

module.exports = {
    name: 'leaderboard',
    description: 'Check who are the Top Players of the Bot.',
    aliases: ['lb'],
    usage: '`>leaderboard crys` - Top Crystals \n`>leaderboard xp` - Top Experience \n`>leaderboard tankoins` - Top Tankoins',
    args: true,
    cooldown: 3,
    execute(client, message, args, con) {

        if (args[0] == "crys") {

            con.query(`SELECT id, username, crys FROM users ORDER BY crys DESC`, (err, rows) => {
                if (err) throw err;

                var n;
                if (rows.length < 12) {
                    n = rows.length;
                } else {
                    n = 12;
                }

                let topCrys = new Discord.RichEmbed()
                    .setAuthor("Tanki Bot")
                    .setTitle("Crystals Leaderboard")

                for (var i = 0; i < n; i++) {

                    // posPointer
                    let posPointer;
                    if (message.author.id == rows[i].id) {
                        posPointer = " 👈"
                    } else {
                        posPointer = "";
                    }

                    topCrys.addField(` ${i + 1} - ${rows[i].username} ${posPointer}`, `💎 ${rows[i].crys.toLocaleString()}`, true)
                }

                message.channel.send({ embed: topCrys });

            });

        } else if (args[0] == "xp") {

            con.query(`SELECT id, username, xp FROM users ORDER BY xp DESC`, (err, rows) => {
                if (err) throw err;

                var n;
                if (rows.length < 12) {
                    n = rows.length;
                } else {
                    n = 12;
                }

                let topExp = new Discord.RichEmbed()
                    .setAuthor("Tanki Bot")
                    .setTitle("Experience Leaderboard")

                for (var i = 0; i < n; i++) {

                    // posPointer
                    let posPointer;
                    if (message.author.id == rows[i].id) {
                        posPointer = " 👈"
                    } else {
                        posPointer = "";
                    }

                    topExp.addField(` ${i + 1} - ${rows[i].username} ${posPointer}`, `<:xp:661186205458628608>  ${rows[i].xp.toLocaleString()}`, true)
                }

                message.channel.send({ embed: topExp });

            })
        } else if (args[0] == "tankoins") {

            con.query(`SELECT id, username, tankoins FROM users ORDER BY tankoins DESC`, (err, rows) => {
                if (err) throw err;

                var n;
                if (rows.length < 12) {
                    n = rows.length;
                } else {
                    n = 12;
                }

                let topExp = new Discord.RichEmbed()
                    .setAuthor("Tanki Bot")
                    .setTitle("Tankoins Leaderboard")

                for (var i = 0; i < n; i++) {

                    // posPointer
                    let posPointer;
                    if (message.author.id == rows[i].id) {
                        posPointer = " 👈"
                    } else {
                        posPointer = "";
                    }

                    topExp.addField(` ${i + 1} - ${rows[i].username} ${posPointer}`, `<:tankoin:660948390263128124>  ${rows[i].tankoins.toLocaleString()}`, true)
                }

                message.channel.send({ embed: topExp });

            })
        }

    },
};