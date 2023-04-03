const Layer1 = document.getElementById('L1');
const Layer2 = document.getElementById('L2');
const Layer3 = document.getElementById('L3');
const Layer4 = document.getElementById('L4');
const Layer5 = document.getElementById('L5');
const landingPage = document.getElementById('landingPage');
let ActiveLayer = landingPage;
function setLayer1() {

    ActiveLayer.setAttribute('visible', 'false');
    Layer1.setAttribute('visible', 'true');
    ActiveLayer = Layer1;
}

function setLayer2() {

    ActiveLayer.setAttribute('visible', 'false');
    Layer2.setAttribute('visible', 'true');
    ActiveLayer = Layer2;
}

function setLayer3() {

    ActiveLayer.setAttribute('visible', 'false');
    Layer3.setAttribute('visible', 'true');
    ActiveLayer = Layer3;
}

function setLayer4() {

    ActiveLayer.setAttribute('visible', 'false');
    Layer4.setAttribute('visible', 'true');
    ActiveLayer = Layer4;

}

function setLayer5() {

    ActiveLayer.setAttribute('visible', 'false');
    Layer5.setAttribute('visible', 'true');
    ActiveLayer = Layer5;


}