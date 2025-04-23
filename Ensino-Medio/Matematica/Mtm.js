function IrParaEm(){
    window.location.href = "../EM.html"
}

function IrParaAtv1(){
    window.location.href = "https://docs.google.com/document/d/1fzxASnsolEo5GzUygQUVhBW3lpwBdWiKbLd-Ux6ju98/edit?usp=sharing"
}

function IrParaAtv2(){
    window.location.href = "https://www.canva.com/design/DAGlCk3PBW4/enSUrgNlqfWidlpJLOFDSg/edit?utm_content=DAGlCk3PBW4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
}

// Descrições das atividades
const modalAtv1_1 = document.getElementById("modalAtv1-1")
const modalAtv2_1 = document.getElementById("modalAtv2-1")
const fade = document.getElementById("fade")

function fecharModal(){
    fade.style.display = "none";
    modalAtv1_1.style.display = "none";
    modalAtv2_1.style.display = "none";
}

function descAtv1_1(){
    fade.style.display = "block";
    modalAtv1_1.style.display = "block";
}

function descAtv2_1(){
    fade.style.display = "block";
    modalAtv2_1.style.display = "block";
}

