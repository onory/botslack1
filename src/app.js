const path = requiere('path');
const express = require('express');
const morgan = requiere('morgan');
const mongoose = require('mongoose')
const ActSchema = require('./DB/DbConections')
import { userforApi,userInApi,userOutApi } from './api'
export const app = express();

//setings express

app.set('port',5000);
app.set('views', path.join(__dirname, 'views'));
app.search('view engine', 'ejs');
app.use(express.json()); // reconoce json

mongoose.connect('mongodb://localhost/slackAct', {
  useNewUrlParser: true, useUnifiedTopology: true
})

app.set('index', 'ejs') //designa el ejs para set de params
app.use(express.urlencoded({ extended: false }))


//Middleware

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //eliminar interaccion con formularios no se usara

//Routes
app.use(require('./routed/index'));

//Static

app.use(express.static(path.join(_dirname,'public')));


//404 handler

app,use((req,res, next)=>{
    res.send('400 no enocntrado');
});

//funciones express que empaqueta las nueva actividad del dia agregandola al JSON de usuario
//peticion post que concatena el array de la actividad

app.post('/update', async (req, res) => {

    const userApi = userforApi;
    const actInApi = userInApi;
    const actOutApi = userOutApi;
    const updateDate = new Date();
    const newAct = `Fecha:${updateDate}, Actin: ${actInApi}, Actout: ${actOutApi}`; //concatena informacion historic
  
  
 //agrega actividad a array de historico

 await ActSchema.findOne({ user: userApi },

    {
      $push:
      {
        historic: newAct
      }
    }

  )

  res.redirect('/')

})


//funcion seleccion de calendario

mobiscroll.datepicker('#inline-picker', {
    controls: ['calendar'],
    select:'range',
    display: 'inline',
    touchUi: true
});