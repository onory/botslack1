import { RTMClient }  from '@slack/rtm-api'
import  { UsersLookupByEmailResponse, WebClient } from '@slack/web-api';
import { SLACK_OAUTH_TOKEN, BOT_CHANNEL } from './constants'
const packageJson = require('../package.json')


const rtm = new RTMClient(SLACK_OAUTH_TOKEN);
const web = new WebClient(SLACK_OAUTH_TOKEN);

const userforApi="";
const userInApi="";
const userOutApi="";

//conecciones slack
rtm.start()
  .catch(console.error);

rtm.on('ready', async () => {
    console.log('bot started')
    sendMessage(BOT_CHANNEL, `Bot version is online.`)
})


//funciones Slack api

//escucha mensaje in
rtm.on('slack_event', async (eventType, event) => {
    if (event && event.type === 'message'){
        if (event.text === 'actividad in:') {
            //hello(event.channel, event.user)
            userforApi=event.user;
            userInApi=event.text;
            
        }
    }
})

//escucha mensaje out
rtm.on('slack_event', async (eventType, event) => {
    if (event && event.type === 'message'){
        if (event.text === 'actividad out:') {
            //hello(event.channel, event.user)
            userforApi=event.user;
            userOutApi=event.text;
        }
    }
})



module.exports ={
     userforApi,
     userInApi,
     userOutApi 
}