//Variables
let resultadoImc = 0;
let categoriaImc = "";

//Funciones de cálculo de IMC

function capturarBoton(){

    let botonCalcular = document.getElementById("calcularIMC");
    botonCalcular.addEventListener("click", calcularIMC);

};

function calcularIMC(){

    let sexo = document.getElementById("sexo").value;
    let edad = document.getElementById("edad").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    if( (sexo == "sel") || (edad<=0) || (peso<=0) || (altura<=0) ){
        alert("Los datos ingresados son inválidos o están incompletos");
    } else{
        
        //Cálculo de IMC
        let resultado = peso/(altura**2);
        resultadoImc = Math.round(resultado*100)/100;

        let textoResultadoIMC = document.getElementById("resultadoIMC");
        textoResultadoIMC.textContent = `${resultadoImc}`;
        textoResultadoIMC.setAttribute("class", "");

        //Cálculo de peso ideal
        let pesoMin = Math.round(18.5*(altura**2));
        let pesoMax = Math.round(24.9*(altura**2));
        let textoResultadoPeso = document.getElementById("resultadoPeso");
        textoResultadoPeso.textContent = `Peso ideal: ${pesoMin} - ${pesoMax} kg`;

        //Categoría de IMC
        if (resultadoImc<18.5){
            categoriaImc = "pesoBajo";
            textoResultadoIMC.setAttribute("class", "colorAzul");
        } if ( (resultadoImc>=18.5) && (resultadoImc <25) ){
            categoriaImc = "pesoSaludable";
            textoResultadoIMC.setAttribute("class", "colorVerde");
        } if ( (resultadoImc>=25) && (resultadoImc <30) ){
            categoriaImc = "pesoExceso";
            textoResultadoIMC.setAttribute("class", "colorAmarillo");
        } if ( resultadoImc>=30 ){
            categoriaImc = "pesoObeso";
            textoResultadoIMC.setAttribute("class", "colorRojo");
        }

        //Almacenamiento de datos en el local storage
        let datos={
            sex: sexo,
            eda: edad,
            pes: peso,
            alt: altura,
            imc: resultadoImc,
            cat: categoriaImc
        }

        let cantidadDatos = localStorage.length + 1;

        localStorage.setItem( cantidadDatos , JSON.stringify(datos));

    }

};

capturarBoton();
