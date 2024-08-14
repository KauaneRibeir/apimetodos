const express = require("express");
const app = express();
const porta = 4000;

app.get('/', (req, res)=> {
res.send("Hello world")
})

app.get('/segunda-rota', (req, res)=> {
    res.send("segunda rota")
})
app.get('/prime-day/:produto', (req, res)=> {
req.params;
res.send(`O produto comprado foi: ${req.params.produto}`)
    // res.send("rota amazon")
})
app.listen(porta, () => {
console.log(`O servidor iniciou na porta ${porta}`);
})
