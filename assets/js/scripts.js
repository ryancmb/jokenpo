$(document).ready(function(){
    $(".jogo").hide();
    $("#resultado").hide();
    $("#opcoes").hide();
    function opcoes(){
        var opcao = $("input[name=concordar]:checked").val();
        if(opcao === "nao"){
            $("#opcoes").show();
        }
        if(opcao === "sim"){
            $("#opcoes").hide();
        }
    }
    $("#iniciar").on("click",function(){
        var nome = $("#nome").val();
        
         if(vazioOuNulo(nome)){
            alert("Digite seu nome");
            return false;
         }
         $("#nomeJogo").empty();
         $("#nomeJogo").append(nome);
         $(".jogo").show();
         $(".container").hide();
    } )
    $("#selectPlayer1").on("change",function(){
        var escolha = this.value;
        if(escolha == "1"){
            $("#Player1").empty().append("<img src='assets/img/pedra.png' >")
        }
        if(escolha == "2"){
            $("#Player1").empty().append("<img src='assets/img/papel.png' >")
        }
        if(escolha == "3"){
            $("#Player1").empty().append("<img src='assets/img/tesoura.png' >")
        }
        if(escolha == "0"){
            $("#Player1").empty()
        }
    })
    function vazioOuNulo(valor){
        return valor === null || valor === undefined || valor === "";
    }
    $("#jogar").on("click",function(){
        var p1 = parseInt($("#selectPlayer1").val());
        var p2 = Math.floor(Math.random()*3)+1;
        if(p1 === 0){
            alert("Escolha uma opção!")
            return false;
        }
        $(".jogo").hide();
        $("#resultado").show();
        $("#escolhap1").empty().append(`<img src='assets/img/${p1 === 1?'pedra':p1===2?'papel':"tesoura" }.png'>`)
        $("#escolhap2").empty().append(`<img src='assets/img/${p2 === 1?'pedra':p2===2?'papel':"tesoura" }.png'>`)


        if(p1 === p2){
            alert("Empate")
            return false;
        }   
        if((p1 === 1 && p2 === 3) ||
           (p1 === 2 && p2 === 1) ||
           (p1 === 3 && p2 === 2)
        ){
            alert ("Player1 venceu")
        }
        else{
            alert ("Player2 venceu")
        }
    })
    $("input[name=concordar]").on("change",function(){
        opcoes();
    });
})
