const botoes = document.querySelectorAll(".botao");
const textos = documentos.querySelectorAll(".aba-conteudo");
for (let i =0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j=0; j<botoes.length){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add(".ativo");
        textos[i].classList.add("ativo");
    }
console.log(botoes);
}