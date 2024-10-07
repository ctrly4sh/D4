const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');

const TOKEN = 'MTI5MTgwMDM3MTA2NDQ3MTU2Mg.GRF9yP.I0a9islWB6R3NCA1FzNDTcMGaoblb7vivxj-PM';
const CLIENT_ID = '1291800371064471562';

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const commands = [
  {
    name: 'hey',
    description: 'Replies with "Heyy this is D4 your own discord bot"', 
  },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.once('ready', () => {
  console.log('D4 is online!');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'hey') {
    await interaction.reply('Heyy this is D4 your own discord bot');
  }
});

client.login(TOKEN);
