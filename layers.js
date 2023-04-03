// Based on -> https://github.com/alchemz/aframe_webvr_switch_scenes-->

//rewrite this so it's not so messy and redundant. should be like 2 or 3 functions


const scene = document.querySelector('a-scene');

const landingPage =  document.getElementById('landingPage');
let ActiveLayer = landingPage;


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
    document.getElementById("transitionSphere").emit("fadeinscene");
    onSceneLoaded();



}
/*when the layers are set & cached*/
async function onSceneLoaded(){
    //await sleep(500);
    spawnIcons();
    CreateIconToggle(); 
}


function SetLayer1() {

   // ActiveLayer.setAttribute('visible', 'false');
    Layer1.setAttribute('visible', 'true');
    //ActiveLayer = Layer1;
}

function SetLayer2() {

   // ActiveLayer.setAttribute('visible', 'false');
    Layer2.setAttribute('visible', 'true');
  //  ActiveLayer = Layer2;
}

function SetLayer3() {

   // ActiveLayer.setAttribute('visible', 'false');
    Layer3.setAttribute('visible', 'true');
   // ActiveLayer = Layer3;
}

function SetLayer4() {

    //ActiveLayer.setAttribute('visible', 'false');
    Layer4.setAttribute('visible', 'true');
   // ActiveLayer = Layer4;

}

function SetLayer5() {

   //ActiveLayer.setAttribute('visible', 'false');
    Layer5.setAttribute('visible', 'true');
   // ActiveLayer = Layer5;


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


