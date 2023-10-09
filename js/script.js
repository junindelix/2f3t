 mensagem = (msg) => alert(msg);
 soma = (a,b) => a + b;
 sub = (a,b) => a - b;
 mult = (a,b) => a * b;
 div = (a,b) => a / b;
 raiz = x => Math.sqrt(x);
 let a = "";
 let b = "";
 let valor = "";
 let temPonto = false;
 let desligada = true;

 function porcentagem(){
  if(executa == "mult"){
    b = valor
    escrever_display(div(mult(a,b),100));
    b = "";
    valor = "";
  }
 }
 function onoff(){
  if (desligada) {
  zerar();
    desligada = false;
  }else{
    zerar();
    escrever_display("");
    desligada = true;
  }
  function raiz_quadrada(){
    escrever_display(raiz(valor));
    valor = "";
  }
}

 

 //funções para mostrar númeroas no display
  function escrever_display(num){
    document.getElementById("resultado").value = num;

  }

  //função para receber as teclas numericas e o ponto
  function digitando(tecla){
    if(tecla == "."){
      if(! temPonto){
        temPonto = true;

      }
      return;
    }
    valor += tecla;
    escrever_display(valor);

  }
  let executa = "";
  function operacao(op){
      executa = op;
      a = valor;
      valor = "";
      temPonto = false;
  }
  function calcula(){
      if(executa != ""){
          b=valor;
          if(executa == "mult") escrever_display(mult(a,b));
          if(executa == "div") escrever_display(div(a,b));
          if(executa == "sub") escrever_display(sub(a,b));
          if(executa == "soma") escrever_display(soma(Number(a),Number(b)));
          a = "";
          b = "";
          valor = "";
          temPonto = false;
      }
  }

