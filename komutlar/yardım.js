const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => { 
  
    let yardım = new Discord.RichEmbed()
  .setAuthor('Yardım Menüsü', client.user.avatarURL)
  .setDescription('**DM** kutunu kontrol et!')
  .setColor('GREEN')
  message.channel.send(yardım)
  
  
  let prefix = ayarlar.prefix
  
  
  let codeming = new Discord.RichEmbed()
  .setTitle(client.user.username +' Yardım Menüsü')
  .addField(':book: Komutlar:', `${prefix}yardım | Yardım menüsünü atar.\n${prefix}çal | istenilen şarkıyı çalar\n${prefix}durdur | şarkıyı durdurur.\n${prefix}geç | şarkıyı geçer.${prefix}devam | şarkıya devam eder\n${prefix}radyo | radyo listesindeki istediğin radyo kanalını çalar.\n${prefix}pop | 7/24 Pop radyo çalar.\n\n`)
  .setFooter('Beyefendi')
  .setColor('RANDOM')
  message.author.send(codeming)
  // CODEMİNG TÜM HAKLARI SAKLIDIR.
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'taslak', 
  usage: 'yardım'
};
