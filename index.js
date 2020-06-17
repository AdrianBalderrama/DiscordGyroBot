const Discord = require('discord.js');
const bot = new Discord.Client();
const axios = require('axios');
const token = 'INSERT KEY HERE';
const PREFIX = "!";
const fetch = require('node-fetch');
var version ='1.0'

bot.on('ready', () =>{
    console.log('this bot is online');

})



/// canciones
var rndSong = require('rnd-song');
 
var options = {
  api_key: '4e6fe51f2cb7946b347b31a546b5e99a',
  genre: 14,
  snippet: true,
  language: 'en'
};


  
//// end canciones


bot.on('message', async message =>{

    let args = message.content.substring(PREFIX.length).split(" ");
//cases with prefix
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
        
        case 'stando':
    rndSong(options, function(err, res) {
        var UrlStand = 'https://robohash.org/';
        if (!err) {
        let args2 = res.track.track_name.split(" ");
        let args3 = res.track.artist_name.split(" ");
        var standName = args2[0]+args3[0];
        message.reply(`Stand name args2:` +standName);
        message.reply(UrlStand+standName);
        message.reply(`Your stand says: ${res.snippet.snippet_body}`);
        message.reply(`Song Name:  ${res.track.track_name}`);
        message.reply(`Artist: ${res.track.artist_name}`);
    } else {  message.reply(new Error(err)); }
  });

  break;
  



            ////////canciones
            




/// end canciones


        

        
    }

    //jokes
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

    //cats
    if (message.content === 'cat') {
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
    
        message.channel.send(file);
    }


//code for horse and foff
    if(message.content === 'horse'){
        message.reply('Tell him to go eat shit, Johny.');
        
    }


    if(message.content === 'tell him yourself'){
        message.reply('Eat shit, asshole! Fall of your horse!');
    }
})





//login
bot.login(token);