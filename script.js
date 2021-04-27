function results(){
    //5 variaveis que guardam as respostas dadas pelo usuário
    var q1;
    var q2;
    var q3 = [];
    var q4;
    var q5;

    //radiosQ1 pega todas as opções da questão 1
    var radiosQ1 = document.getElementsByName('q1');
    //Esse 'for' vê qual das opções está MARCADA pelo usuário e mandar o valor para a variavel q1
    for (let i = 0, length = radiosQ1.length; i < length; i++) {
        if (radiosQ1[i].checked) {
            q1 = radiosQ1[i].value;
        break;
        }
    }

    //radiosQ5 pega todas as opções da questão 5
    var radiosQ5 = document.getElementsByName('q5');
    //Esse 'for' vê qual das opções está MARCADA pelo usuário e mandar o valor para a variavel q5
    for (let i = 0, length = radiosQ5.length; i < length; i++) {
        if (radiosQ5[i].checked) {
            q5 = radiosQ5[i].value;
        break;
        }
    }

    //Aqui é pego o valor escrito nos campos de texto e passado para cada variavel equivalente, o valor escrito no campo da questão 2 é passada pra variavel q2 e assim por diante...
    q2 = document.getElementById("q2").value;
    q3 = document.getElementById("q3").value;
    q4 = document.getElementById("q4").value;

    //Se o usuário respondeu todas as questões
    if (q1 && q2 && q3 && q4 && q5){
        var respostas = [q1, q2, q3, q4, q5]; //Esse array tem as respostas do USUÁRIO
        var respostasCorretas = 0;
        var respostasErradas = 0;
        var questoesCorretas = [];
        var questoesErradas = [];

        var respostasCertas = ["1", "Fernando", "Javascript", "MATC84", "5"]; //Esse array tem as respostas corretas

        //Aqui ocorre a verificação do array com as respostas do usuário e o array com as respostas corretas
        for (let i = 0; i < 5; i++) {
            if (respostas[i] == respostasCertas[i]) {
                respostasCorretas++;
                questoesCorretas.push(i+1);
                
                document.getElementById('correctQuestion' + (i+1)).innerHTML = 'Você acertou!'; //É adicionado "Você acertou" nos elementos <p> das questões que estiver correta
                document.getElementById('correctQuestion' + (i+1)).classList.add("green"); //É também mudado a cor do título da questão para verde
                document.getElementById('t' + (i+1)).classList.add("green");
            }
            //Se a reposta não for correta, isso ocorre:
            else {
                respostasErradas++;
                questoesErradas.push(i+1);

                document.getElementById('correctQuestion' + (i+1)).innerHTML = 'Você errou!';//É adicionado "Você errou" nos elementos <p> das questões que estiver errada
                document.getElementById('correctQuestion' + (i+1)).classList.add("red"); //É também mudado a cor do título da questão para vermelho
                document.getElementById('t' + (i+1)).classList.add("red");
            }
        }
        let textoPopUp = "Você acertou " + respostasCorretas + " de 5!"; //Aqui é o pop-up que aparece depois de responder tudo, quantas você acertou de 5.
        if (respostasCorretas > 3) document.getElementById('results').innerHTML = textoPopUp + ' Muito bem!';
        else if (respostasCorretas == 0) document.getElementById('results').innerHTML = "Você errou todas, minha nossa!";
        else document.getElementById('results').innerHTML = textoPopUp + " Tente novamente!";
        alert(textoPopUp);
        
    }
    //Se o usuário não respondeu tudo, isso ocorre:
    else alert("Por favor, responda todas as questões!");
}

function calcular(){ // Minha alteração da página no js
    var calc = document.getElementById("calc").value // Pega váriavel calc
    var operador = ["+","-","*","/"]
    var calc_1 = ""
    var calc_2 = ""
    var operador_ = ""

    var x = 0;
    var y = 0;

    if (calc) { 
        for (let i = 0; i < 4; i++) {
            if (calc.includes(operador[i])){
                calc_1 = calc.split(operador[i])[0]
                calc_2 = calc.split(operador[i])[1]
                operador_ = operador[i]
            }
        }

        x = Number(calc_1)
        y = Number(calc_2)

        if(!isNaN(x) && !isNaN(y)){ //Verificando se a entrada tem dois números
            switch(operador_){

                case "+":
                    res = x + y
                    document.getElementById('calcReturn').innerHTML = "O resultado é " + res
                    break
    
                case "-":
                    res = x - y
                    document.getElementById('calcReturn').innerHTML = "O resultado é " + res
                    break
    
                case "*":
                    res = x * y
                    document.getElementById('calcReturn').innerHTML = "O resultado é " + res
                    break
    
                case "/":
                    res = x / y
                    document.getElementById('calcReturn').innerHTML = "O resultado é " + res
                    break
                default:
                    alert("Por favor, insira uma fórmula válida"); //Caso não tenha posto um operador válido
            }
        }
        else { //Se não tiver dois números, emite um alerta informado qual campo está errado
            if(isNaN(x) && isNaN(y)) alert (x + " nem " + y +  " são um número válido!")
            else if(isNaN(x))   alert(x + " não é um número válido!");
            else if(isNaN(y)) alert(calc_2 + " não é um número válido")
        }
        
    }

    else alert("Campo vazio!") //Se deixou o campo vazio


}