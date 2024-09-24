const dayjs = require("dayjs");
const TelegramBot = require("node-telegram-bot-api");

require("dotenv").config();

const botToken = process.env.TELEGRAM_BOT_TOKEN

// console.log(botToken)

const bot = new TelegramBot(
    botToken,
    {polling : true}
)

let dateAndTime = dayjs().format('DD/MM/YY');

bot.sendPhoto("./assets/203553.jpg")

bot.on('message' , (command)=>{
    const commandId = command.chat.id;
    const commandText = command.text;


   switch (commandText) {
    case "/start":
        bot.sendMessage(commandId , `Hey , welocome to y4bots this is ${dateAndTime} , get some useful bots by running /list`)
        break;
    
    case "/help":
        bot.sendMessage(commandId , "listed commands")
        break;

    case "/list":
        bot.sendMessage(commandId , "The list of the bots are below")
        break;
           
   }

})