var texto1 = document.getElementById('textoE');
var texto2 = document.getElementById('textoS');
var removerImg = document.getElementById('removerImg');
var removerP = document.getElementById('removerP');

var expresion = /[A-Z0-9áéíóú]/;

/* Función de encriptación del texto */

document.getElementById('botonEncriptar').onclick = function(){
    var txt = texto1.value;
    var txt1 = "";
    var txtNuevo = "";

    if (typeof txt === 'string'){
        if (txt.length){
            if(expresion.test(txt)){
                alert("El texto escrito solo puede tener caracteres en mínuscula y sin tilde");
                texto1.value = "";
            }else{
                for(var i = 0; i < txt.length; i++){
                    txt1 = txt[i];
                    if(txt1 == "a"){
                        txt1 = "ai";
                    }
                    if(txt1 == "e"){
                        txt1 = "enter";
                    }
                    if(txt1 == "i"){
                        txt1 = "imes";
                    }
                    if(txt1 == "o"){
                        txt1 = "ober";
                    }
                    if(txt1 == "u"){
                        txt1 = "ufat";
                    }
                    txtNuevo += txt1;
                }
                if(document.getElementById("removerImg") && document.getElementById("removerP")){
                    removerImg.parentNode.removeChild(removerImg);
                    removerP.parentNode.removeChild(removerP);
                }
                texto2.value = txtNuevo;
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
    var txt = texto1.value;

    if (typeof txt === 'string'){
        if (txt.length){
            if(expresion.test(txt)){
                alert("El texto escrito solo puede tener caracteres en mínuscula y sin acentos");
                texto1.value = "";
            }else{
                txt = txt.replace(/ai/gi, 'a');
                txt = txt.replace(/enter/gi, 'e');
                txt = txt.replace(/imes/gi, 'i');
                txt = txt.replace(/ober/gi, 'o');
                txt = txt.replace(/ufat/gi, 'u');

                if(document.getElementById("removerImg") && document.getElementById("removerP")){
                    removerImg.parentNode.removeChild(removerImg);
                    removerP.parentNode.removeChild(removerP);
                }
                
                texto2.value = txt;
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