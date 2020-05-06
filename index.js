const Discord = require('discord.js');
const bot = new Discord.Client();
const axios = require('axios');
const token = 'NzA0NTU3NDkyNzEzMDI5NjMz.Xqe4xw.w-Tdyr0JrTpsrVwPBIjwoilySoY';
const PREFIX = "!";
const fetch = require('node-fetch');
var version ='1.0'

bot.on('ready', () =>{
    console.log('this bot is online');

})



bot.on('message', async message =>{

    let args = message.content.substring(PREFIX.length).split(" ");
//
    switch(args[0]){
        case 'ping':
            message.channel.send('pong!');
        break;  
        
        case 'help':
            message.reply('Here are all the commands: ....');
        break;  

        case 'info':
            if(args[1]==='version'){
            message.channel.send('Version: ' + version)
            }
            else if(args[1]==='author'){
                message.channel.send('Author: Narcissus')
                }
            
            else{
                message.channel.send('Invalid Argument, valid arguments are: version')
            }
        break;

        case 'clear':
            if(!args[1] || isNaN(args[1])) return message.reply('Error please define second argument or put a number')
            message.channel.bulkDelete(args[1]);
            break;

            
        case 'copyme':
            var copyT = args.slice(1).join(' ');
            message.reply(copyT);
          
        break;  

        case 'tellat':
            let userName = args[1];
            let value = userName.concat(' Eat shit, asshole! Fall of your horse!', '!'); 
            message.channel.send(value);
        break;  

        
    }

    
    if(message.content === 'joke'){
        let getJoke = async () =>{
            let response = await axios.get(
                "https://official-joke-api.appspot.com/random_joke"
            );
            let joke = response.data.setup;
            let joke2 = response.data.punchline;
            let jokeF = joke + joke2;
            return jokeF;
        };
        let jokeValue = await getJoke();
        console.log(jokeValue);
        message.channel.send(jokeValue);
    }

    
    if (message.content === 'cat') {
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
    
        message.channel.send(file);
    }


//code for horse
    if(message.content === 'horse'){
        message.reply('Tell him to go eat shit, Johny.');
    }


    if(message.content === 'tell him yourself'){
        message.reply('Eat shit, asshole! Fall of your horse!');
    }
})




bot.login(token);