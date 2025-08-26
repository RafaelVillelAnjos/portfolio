function IrParaEm(){
    window.location.href = "../Tec.html"
}

function IrParaAtv1(){
    window.location.href = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLo_fD2hZkhN_4N4RaGAbyIO1GXTyWIIYh1S1CUvcv716dFJzbEhDG0kipDAwPn5E3H4fBXutZLWYc/pubhtml"
}

function IrParaAtv2(){
    window.location.href = "https://www.canva.com/design/DAGlaVhtrA8/Bzg_wwPBud_oNddAk_RlaA/edit?utm_content=DAGlaVhtrA8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
}

function IrParaAtv3(){
    window.location.href ='https://www.figma.com/design/RJVDMgRVmxFHP43riva6S1/Prototipagem-Tempfy?node-id=0-1&t=8CzLdggW0yeARmHO-1'
}

// Descrições das atividades
const modalAtv1_1 = document.getElementById("modalAtv1-1")
const modalAtv2_1 = document.getElementById("modalAtv2-1")
const modalAtv1_2 = document.getElementById('modalAtv1-2')
const fade = document.getElementById("fade")

function fecharModal(){
    fade.style.display = "none";
    modalAtv1_1.style.display = "none";
    modalAtv2_1.style.display = "none";
    modalAtv1_2.style.display = 'none';
}

function descAtv1_1(){
    fade.style.display = "block";
    modalAtv1_1.style.display = "block";
}

function descAtv2_1(){
    fade.style.display = "block";
    modalAtv2_1.style.display = "block";
}

function descAtv1_2(){
    fade.style.display = "block";
    modalAtv1_2.style.display = "block";
}

