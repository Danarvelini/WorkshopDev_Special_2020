//Usei o express pra criar e configurar meu servidor
const express = require("express")
const server = express()

// configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static("public"))

// configuracao do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,

})

const ideias = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        url: "https://danhausen.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        url: "https://danhausen.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729034.svg",
        title: "Namahamahni",
        category: "Mahani",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        url: "https://danhausen.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729036.svg",
        title: "Online school",
        category: "Aprendizado",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        url: "https://danhausen.com.br"
    },
]

//criei uma rota /
// e capturo o pedido do cliente para responder
server.get("/", function(req, res){
    const reversedIdeias = [...ideias].reverse()

    let lastIdeas = []
    for (let idea of reversedIdeias){
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", {ideias : lastIdeas})
})

server.get("/ideias", function(req, res){
    const reversedIdeias = [...ideias].reverse()

    return res.render("ideias.html", {ideias: reversedIdeias})
})

//liguei meu servidor na porta 3000
server.listen(3000)