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

bot.on('message' , (command)=>{
    const commandId = command.chat.id;
    const commandText = command.text;

    if(commandText == '/start'){
        bot.sendMessage(commandId , `hey it is ${dateAndTime}`)
    }





    
})