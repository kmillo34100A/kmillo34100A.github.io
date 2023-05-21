const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
//pasos
// 1.funciones de encrpcion y desencripcion.
// 2. llamado de las funciones.
// 3. agregamos la funciones de enceiocion con la  funcion de sincontenido en una sola
// 4. quitamos los acentos.
// 5. creamos la funcion Copy


// 1.paso - funcion encriptar y desencriptar
// funcion encriptar
function encriptar(stringEncriptado) {


    // se crea una matriz o arreglo con los valores que se reemplazaran
        let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    
    // se crea una variabke con el valor de text area y se aplica la funcion toNormalForm oara quitar accentos a letras y .toLowerCase para que todo sea minusculas
        var stringEncriptado = toNormalForm(textArea.value);
        stringEncriptado = stringEncriptado.toLowerCase();
    
    //creamos una lop para que entre a todos los valores de la matrizCodigo
        for(let i = 0; i < matrizCodigo.length; i++ ) {
    
    // Si en nuestro textarea hay alguno de los elementos en la matrizCodigo estos seran reemplazados donde [i] = indice , [0] = posicion
            if(stringEncriptado.includes(matrizCodigo[i][0])) {
    //reeplazo de posicion aqui aplicamos matrizCodigo [i][0] a [i][1] lo que cambia de "a" a "ai"
                stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i]
                    [0], matrizCodigo[i][1]);
            }
        }
        return stringEncriptado;
    }
    
    // hacemos los mismo que en la funcion encriptar 
function desencriptar(stringDesencriptado) {
        let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        var stringDesencriptado = textArea.value;
        stringDesencriptado = stringDesencriptado.toLowerCase();
    
        for(let i = 0; i < matrizCodigo.length; i++) {
    
            if(stringDesencriptado.includes(matrizCodigo[i][0])) {
                stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
        return stringDesencriptado;
    }

//2.paso. llamamos a la funcion encriptar y mandamos el valor a su respectivo destino y limpiamos la pantalla
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.Value);
    mensaje.value = textoEncriptado;
    textArea.value = "";

    }

// llamado  ala funcion desencriptar
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";

}   
//paso 3. juntar las funciones de wncriocion con la de contenido lateral para aplicar oncli

function sinContenido() {
    document.getElementById("sin").style.display = "none";   
    document.getElementById("con").style.display = "block";     
}
function encriptadora() {
    sinContenido();
    btnEncriptar();
}

function desencriptadora() {
    sinContenido();
    btnDesencriptar();
}

//4.function para cambiar los accentos a lettras sin acentos
function toNormalForm(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


//paso5. creo la funcion copy

function copiar(){
    var contenido = document.querySelector("#id");
    contenido.select();
    document.execCommand('copy')
    document.querySelector(".background").classList.add("show")

    setTimeout(()=>{
        document.querySelector(".background").classList.remove("show")

    },2000)

}


   