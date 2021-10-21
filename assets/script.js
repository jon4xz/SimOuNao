let num = function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

function veri(){
  let resultado = num(1,3);
  let saida = document.querySelector("#op");
  if(resultado === 1){
    saida.innerHTML = "Sim";
    saida.classList.add("sim");
    saida.classList.remove("não");
  } else{
    saida.innerHTML = "Não";
    saida.classList.add("não");
    saida.classList.remove("sim");
  }
}
