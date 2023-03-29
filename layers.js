// Based on -> https://github.com/alchemz/aframe_webvr_switch_scenes-->

const scene = document.querySelector('a-scene');


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function delayedSetScene() {
    if(scene.renderStarted){
        setscene();
    } else{
        console.log("not yet rendered");
        await delay(100);
        delayedSetScene()

    }
    
}

scene.addEventListener('loaded', delayedSetScene());

let ActiveLayer =  document.getElementById('landingPage'); 

const Layer1 = document.getElementById('L1');
const Layer2 = document.getElementById('L2');
const Layer3 = document.getElementById('L3');
const Layer4 = document.getElementById('L4');
const Layer5 = document.getElementById('L5');



function setscene(){
    
    Layer1.setAttribute('visible', 'false');
    Layer2.setAttribute('visible', 'false');
    Layer3.setAttribute('visible', 'false');
    Layer4.setAttribute('visible', 'false');
    Layer5.setAttribute('visible', 'false');
}

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

