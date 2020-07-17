function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("obrigado por clicar");
}
function redirecionar(){
    //window.open("https://github.com/elisangela10/");
    window.location.href = "https://github.com/elisangela10/";
}
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("troca o texto")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value)
}





/*
function soma(n1, n2){
    return n1+n2;
}
*/
/*
function validaIdade(idade){
    var validar;
    if(idade >=18){
        validar=true
    }else {
        validar = false
    }

    return validar;
}
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/


/*
function soma(n1, n2){
    return n1+n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/ 

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
/*
var count;
for(count=0; count<=5; count++){
    alert(count);
}
*/

/*
var count = 0;

while (count <= 5 ){
    console.log(count);
    count = count +1; 
}
*/



/*
var idade = prompt("Qual a sua idade?");
//var idade = 18;

if (idade >= 18){
    alert("Maior de idade");
}else {
    alert("Menor de idade")
} 
*/




//var frutas = [{nome:"maça", cor:"vermelho"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);


/*var fruta = {nome:"maça", cor: "vermelho"}
console.log(fruta.nome);
alert(fruta.cor) */ 



//var lista = ["maça", "pêra", "laranja"];
//lista.pop("pêra"); Retira o elemento do Array
//lista.push("uva"); Inclui o elemento no array
//console.log(lista[1]); imprime no conole o elemento 1 do array
//alert(lista[2]); imprime no alerta o elemento 1 do array
//console.log(lista.length); mostra a quantidade de elemento esta na lista
//console.log(lista.reverse) mostra a lista de tras para  frente. 
//console.log(lista.toString) aparece como String e não como Array
//console.log(lista.join( | | )) separa da forma que deseja 



/*
var nome = "Elisangela Miranda dos Anjos";
var idade = 26;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";

//alert(nome + "tem" + idade + "anos");

//alert(idade + idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLocaleLowerCase());
*/
