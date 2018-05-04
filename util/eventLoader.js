const reqEvent = (event) => require(`../events/${event}`)

module.exports = (client) => {
	client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
	client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
	client.on('guildMemberRemove', reqEvent('guildMemberRemove'));
  client.on('channelCreate', reqEvent('channelCreate'));
  client.on('channelDelete', reqEvent('channelDelete'));
  client.on('messageDelete', reqEvent('messageDelete'));

/*
	client.on('guildBanAdd', reqEvent('guildBanAdd'));
	client.on('guildBanRemove', reqEvent('guildBanRemove'));
	client.on('roleCreate', reqEvent('roleCreate'));
	client.on('roleDelete', reqEvent('roleDelete'));
	client.on('guildCreate', reqEvent('guildCreate'));
	client.on('guildDelete', reqEvent('guildDelete'));
*/

};
