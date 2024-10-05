import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ping",
    description : 'Replies with ping !'
  },
];

const rest = new REST({version: '10'}).setToken(TOKEN)