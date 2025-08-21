// 1. Importa o Express
const Express = require('express');

// 2. Cria uma instância do Express
const app = Express();

// 3. Define a porta onde a API irá rodar
const port = 3000

// 4. Middleware para permitir que o servidor lide com requisições no formato JSON
app.use(Express.json());


// 5. Criação da rota GET na raiz ('/') que responde com uma mensagem simples
app.get('/', (req, res) => {
    res.send('API Funcionando!');
});

let dados = [];

// Rota post chamada data

app.post('/data', (req, res) => {
    const { nome, idade } = req.body;
    res.send(`Nome: ${nome}, Idade: ${idade}`);
    if(!nome || !idade){
        return res.status(400).json({error:'Informe Nome e Idade'})
    }
    
    const novo = {nome,idade};
    dados.push(novo);
    res.status(201).json({message:'Dados salvos com sucesso! ',data:novo})
});

// Rota get para exibir os dados

app.get('/data', (req, res) => {
    res.json(dados);
})

// 6. Inicia o Servidor e define que ele deve rodar na porta especificada (3000)
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
