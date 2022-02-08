//------------------------------------------------------------------------------
// Minicurso - Verão 2022 - IMPA
// Ladrilhamentos do Plano: Representação Computacional e Visualização
// José Ezequiel Soto Sánchez
//------------------------------------------------------------------------------
// Mude apenas os valores destas variáveis para identificar o arquivo:
nome = "Seu Nome";
email = "seu email";
// Não mude estas linhas:
document.getElementById("nome").appendChild(document.createTextNode(nome));
document.getElementById("sidebar").appendChild(document.createTextNode(email));
// Agora sim, crie seu código para desenhar seus ladrilhamentos:
//------------------------------------------------------------------------------

var w = window.innerWidth;
var h = window.innerHeight;
var canvas = document.getElementById("meuCanvas");
var quadro = canvas.getContext('2d');
canvas.style.width = w;
canvas.style.height = h;
