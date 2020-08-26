$(function(){
    $('#calcular').click(function(){
        var texto = document.getElementById('texto').value;
        var palavras = texto.split(" ");
        if(texto.length > 0){
            if(texto.indexOf(".") > -1){
                var frases = texto.split(".");
                var indice = Math.round(Math.round((palavras.length / (frases.length-1)) * 0.4)*1.5);
                if(indice >= 41){
                    alert("grau de legibilidade: nebulosidade");
                }else if(indice <= 40 && indice >= 31){
                    alert("grau de legibilidade: linguagem técnica");
                }else if(indice <= 30 && indice >= 20){
                    alert("grau de legibilidade: muito difícil");
                }else if(indice <= 19 && indice >= 16){
                    alert("grau de legibilidade: pequena dificuldade");
                }else if(indice <= 15 && indice >= 11){
                    alert("grau de legibilidade: ótimo");
                }else if(indice <= 10 && indice >= 8){
                    alert("grau de legibilidade: excepcional");
                }else{
                    alert("grau de legibilidade: história em quadrinhos");
                }
            }else{
                alert("falta pontuação");
            }
        }else{
            alert("insira um texto válido");
        } 
    });

    $('#limpar').click(function(){
        document.getElementById('texto').value = "";
    });
});


