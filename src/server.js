//Servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages') 


//Configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio e Configuração do Servidor
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true }))
//Configurar arquivos estáticos (CSS, scripts, imagens)
.use(express.static("public"))
//Rotas de Aplicação
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes",saveClasses)
.listen(5100)