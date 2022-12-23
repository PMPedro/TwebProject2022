
function alert() {

    var div = document.getElementById('calcCarroHided');
    div.style.display = 'block';
}


  function calcValorCarro(){

    var brand = document.getElementById('carBrand').value;
    var model = document.getElementById('carModel').value;
    var preco = document.getElementById('carPreco').value;
    var anoCarro = document.getElementById('carAno').value;
    var kmCarro = document.getElementById('carKm').value;
        var idadeCalc = 2023 - anoCarro; 
        var c1; 

        if(idadeCalc < 10 ){
            c1 = 0.05; 
        }

        else if(idadeCalc > 10){
            c1 = 0.04;
        }


        var c2; 

        if(kmCarro < 30000 ) { c2 = 1; }
        else if (kmCarro > 70000 ) {c2 = 0.9; }
        else {c2 = 0.95; }        

        var precoFinal; 

        precoFinal = preco * (1-idadeCalc*c1)*c2;

        console.log(precoFinal);

        if(precoFinal < 500){
            document.getElementById("textPreco").innerHTML = "Carro em demasiado mal estado!";
        }
        else{
        document.getElementById("textPreco").innerHTML = precoFinal;}
        




    


  }
  