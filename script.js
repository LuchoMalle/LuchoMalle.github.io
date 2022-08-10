var texto1 = document.getElementById('textoE');
var texto2 = document.getElementById('textoS');
var removerImg = document.getElementById('removerImg');
var removerP = document.getElementById('removerP');

var expresion = /[A-Z0-9áéíóú]/;

/* Función de encriptación del texto */

document.getElementById('botonEncriptar').onclick = function(){
    var encriptado = texto1.value;
    if (typeof encriptado === 'string'){
        if (encriptado.length){
            if(expresion.test(encriptado)){
                alert("El texto escrito solo puede tener caracteres en mínuscula y sin tilde");
                texto1.value = "";
            }else{
                encriptado = encriptado.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat')
                if(document.getElementById("removerImg") && document.getElementById("removerP")){
                    removerImg.parentNode.removeChild(removerImg);
                    removerP.parentNode.removeChild(removerP);
                }
                texto2.value = encriptado;
            }
        }else{
            alert('El texto debe tener al menos un caracter');
        }
    }else{
        alert('El argumento debe ser una cadena de caracteres.');
    }
}

/* Función de desencriptación del texto */
document.getElementById('botonDesencriptar').onclick = function(){
    var desencriptado = texto1.value;

    if (typeof desencriptado === 'string'){
        if (desencriptado.length){
            if(expresion.test(desencriptado)){
                alert("El texto escrito solo puede tener caracteres en mínuscula y sin acentos");
                texto1.value = "";
            }else{
                desencriptado = desencriptado.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');

                if(document.getElementById("removerImg") && document.getElementById("removerP")){
                    removerImg.parentNode.removeChild(removerImg);
                    removerP.parentNode.removeChild(removerP);
                }
                
                texto2.value = desencriptado;
            }
        }else{
            alert('El texto debe tener al menos un caracter');
        }
    }else{
        alert('El argumento debe ser una cadena de caracteres.');
    }
}

/* Función de copiado del texto encriptado/desencriptado */
document.getElementById('botonCopiar').onclick = function(){
    texto2.select();
    document.execCommand('copy');
}