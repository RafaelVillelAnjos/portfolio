function IrParaEm(){
    window.location.href = "../EM.html"
}

function VerAtv1(){
    window.location.href = "https://padlet.com/rafael_v_anjos/o-s-culo-da-humilha-o-chinesa-1839-1949-y8miux35qnplpkjg"
}

function VerAtv2(){
    window.location.href = "https://www.canva.com/design/DAGlU3lMtac/q0pZkh7NLvGIyL4aO-7h-A/edit?utm_content=DAGlU3lMtac&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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

