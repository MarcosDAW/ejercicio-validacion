// Selección de un formulario:

const formulario = document.getElementById("formulario");
/*
//array con todos los formularios
const formulario2 = document.fonts["formulario"]
//otra forma - traer el formulario el perimero
const formulario3 = document.getElementsByTagName("form")[0];
//otra forma - 
const formulario4 = document.forms[0];
*/
const warning = document.getElementById("warning");
/*
// objetos del formulario.----con esto tengo todos los inputs
const miInptus = document.querySelectorAll("#formulario input");
//extrae por posicion
const inputNombre = formulario.element[0];//no recomendada
*/
//se trae todo el objeto
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
//para los radio button con byname
const sexo = document.getElementsByName("sexo");

const acuerdos = document.getElementById("terminosAcuerdo");

window.onload = miFuncion;//no ponerle parentesis
//formas de ejecutar el codigo js al finalizar de 
//cargar toda la informacion
//(forma - 1) con método onload en window 
//cuando termine de ejecutarse la ventana ejecute la funcion miFuncion
function miFuncion(){
    //busca el boton btnEnviar y con el listener al tocar el boton se ejecutara validarTodo
    document.getElementById("btnEnviar").addEventListener("click",validarTodo,function(e){e.preventDefault()});
}
let expresion = new RegExp();
expresion = /(^[A-Za-zÁ-ÿ-]+\s){1}([A-Za-zÁ-ÿ]+\s){1}[A-Za-zÁ-ÿ]+/;
function validarTodo(event){
    let validar = [];
    let errores = [];
    let validadoTodo = true;
    //funcion que valida todas las opciones de mi formulario
    
    function validarNombre(){
        if(expresion.test(nombre.value)){
            validar.push(true);
        }else{
            validar.push(false);
            errores.push("Nombre Incorrecto");
        }
        return expresion.test(nombre.value);
    }
    function validarEdad(){
        if(expresion=/^([1-9][0-9]|[1-9])$/.test(edad.value)){
            validar.push(true);
        }else{
            validar.push(false);
            errores.push("Edad Incorrecta")
        }
        return expresion=/^([1-9][0-9]|[1-9])$/.test(edad.value);
    }
    function validarSexo(){
        if(sexo[0].checked || sexo[1].checked){
            validar.push(true);
        }else{
            validar.push(false);
            errores.push("Debes seleccionar algun sexo");
        }
    }
    function validarAcuerdos(){
        if(!acuerdos.checked){
            errores.push("Debe aceptar las condiciones");
            validar.push(true);
        }else{s
            validar.push(false);
        }
    }

    validarNombre();
    validarEdad();
    validarSexo();
    validarAcuerdos();

    for(let i = 0 ; i < validar.length ; i++){
        if(validar[i]==false){
            warning = document.getElementById("warning").innerHTML=(errores[i]);
            validadoTodo = false;
        }
    }
    if(validadoTodo==false){
        e.preventDefault();
    }else{
        document.warning.innerHTML=("Todo Correcto");
        console.log("to piola");
    }
    return validadoTodo;
}
//(forma - 2) usando una funcion


