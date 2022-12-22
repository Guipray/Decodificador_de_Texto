function criptografar() {
    var texto = document.getElementById("texto").value;
    var resultado = document.getElementById("resultado");

    var textoCriptografado = texto
        .toLowerCase()
        .replace(/[^a-z ]/g, "")
        .replaceAll(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/u/g, "ufat")
        .replace(/o/g, "ober");

    resultado.innerHTML = textoCriptografado;
    

    if (texto != "") {
        var textos = document.getElementById("textos");
        var textos2 = document.getElementById("textos2");
        textos.innerHTML = "";
        textos2.innerHTML = "";
        document.getElementById("imagen-principal").style.display = "none";

        var botaoCopiar = document.getElementById("descriptografia");
        botaoCopiar.innerHTML = "<button onClick='copiar()' class='copiar'>Copiar</button>";

    } else if (texto == "") {
        var textos = document.getElementById("textos");
        var textos2 = document.getElementById("textos2");
        textos.innerHTML = "Nenhuma mensagem encontrada";
        textos2.innerHTML = "Digite um texto que você deseja criptografar ou descriptografar";
        document.getElementById("imagen-principal").style.display = "";

        var botaoCopiar = document.getElementById("descriptografia");
        botaoCopiar.innerHTML = "";

    }

}

function descriptografar() {
    var texto = document.getElementById("texto").value;
    var resultado = document.getElementById("resultado");

    var textoDescriptografado = texto
        .toLowerCase()
        .replace(/[^a-z ]/g, "")
        .replaceAll(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ufat/g, "u")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o");

    resultado.innerHTML = textoDescriptografado;

    if (texto != "") {
        var textos = document.getElementById("textos");
        var textos2 = document.getElementById("textos2");
        textos.innerHTML = "";
        textos2.innerHTML = "";
        document.getElementById("imagen-principal").style.display = "none";

        var botaoCopiar = document.getElementById("descriptografia");
        botaoCopiar.innerHTML = "<button onClick='copiar()' class='copiar'>Copiar</button>";

    } else if (texto == "") {
        var textos = document.getElementById("textos");
        var textos2 = document.getElementById("textos2");
        textos.innerHTML = "Nenhuma mensagem encontrada";
        textos2.innerHTML = "Digite um texto que você deseja criptografar ou descriptografar";
        document.getElementById("imagen-principal").style.display = "";

        var botaoCopiar = document.getElementById("descriptografia");
        botaoCopiar.innerHTML = "";

    }

}

function copiar() {
    var resultado = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(resultado);
}
