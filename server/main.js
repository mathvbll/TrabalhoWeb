//Bibliotecas a serem utilizadas
const express = require('express');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const cors = require('cors');



//Inicialização
const app = express();


//Caminhos para router
//const cardsRoute = require('./router/cards');
const authRoute = require('./router/auth');

//habilitar comunicação de origens diferentes
app.use(cors());

//Dividir os dados da requisição no req.body
app.use(express.json());

//app.use('/cards',cardsRoute);
/*
     ->a rota para as cards não enviei, por que ta incompleta ainda,
     no caso preciso saber como vai ser a definição do deck no front.

*/
app.use('/auth',authRoute);




app.listen(3000,(req,res)=>{
    console.log('Servidor Ligado');
});





