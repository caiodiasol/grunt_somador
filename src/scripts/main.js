document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form').addEventListener('submit', function(evento){
        evento.preventDefault();
        let primeiroNumero = document.getElementById('primeiro-numero').value;
        primeiroNumero = parseInt(primeiroNumero);
        
        let segundoNumero = document.getElementById('segundo-numero').value;
        segundoNumero = parseInt(segundoNumero);
        
        alert(primeiroNumero + segundoNumero);
        
        document.querySelector('.resultado').style.display = 'block';
    });
});

