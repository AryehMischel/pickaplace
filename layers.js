//this component is attached to layer objects. Each will load up the next layer and then remove this component. 
AFRAME.registerComponent("layers", {
    init: function () {
        // Based on -> https://github.com/alchemz/aframe_webvr_switch_scenes-->

//rewrite this so it's not so messy and redundant. should be like 2 or 3 functions

        const scene = document.querySelector('a-scene');
        
        scene.addEventListener("loaded", ()=> loadNext())

        scene.addEventListener("next", ()=> loadNext())

  /*      const landingPage = document.getElementById('landingPage');
        let ActiveLayer = landingPage;
*/

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
        
    

        
        let funcs = [SetLayer1, SetLayer2, SetLayer3, SetLayer4, SetLayer5, Set3dIcons]; 
        let i = 0;

        function loadNext(){
            funcs[i]();
            i++
        }
        

        let CreateIconToggle = function(){ //creates icon toggle 2d widget and then adds it as a child to the camera object
            let iconToggleButton = document.createElement("a-entity")
            iconToggleButton.setAttribute("icon-toggle", "" );
            iconToggleButton.setAttribute("geometry", "primitive: plane; height: 1; width: 0.5" );
            iconToggleButton.setAttribute("position", "2 1.7 -2");
            iconToggleButton.setAttribute("material","color: blue");
            iconToggleButton.setAttribute("rotation", "0 -25 0");
            iconToggleButton.setAttribute("class","UI");
            iconToggleButton.setAttribute("event-set__mousedown","position: 2 1.63 -2");
            iconToggleButton.setAttribute("event-set__mouseup","position: 2 1.7 -2");
          //  iconToggleButton.setAttribute("id", "iconToggle");
            let text = document.createElement("a-entity")
            text.setAttribute("text", "value: 2D; align: center");
            text.setAttribute("position", "-0.090 -0.2 0.042");
            text.setAttribute("scale", "4 4 4");
            text.setAttribute("rotation", "0 25 0");
            let text2 = document.createElement("a-entity")
            text2.setAttribute("text", "value: 3D; align: center");
            text2.setAttribute("position", "0.090 -0.4 0.042");
            text2.setAttribute("scale", "4 4 4");
            text2.setAttribute("rotation", "0 25 0");
            let text3 = document.createElement("a-entity")
            text3.setAttribute("text", "value: /; align: center");
            text3.setAttribute("position", "-0.009 -0.325 0.078");
            text3.setAttribute("scale", "4 8 4");
            text3.setAttribute("rotation", "0 25 -30");
            iconToggleButton.appendChild(text);
            iconToggleButton.appendChild(text2);
            iconToggleButton.appendChild(text3);

            document.querySelector("#screenSpaceIcons2D").appendChild(iconToggleButton);
        }


        let parent = document.getElementById("icons2D");

        var PCIcon = document.createElement('a-plane');
        var PCIcon2 = document.createElement('a-plane');
        var PCIcon3 = document.createElement('a-plane');
        var PCIcon4 = document.createElement('a-plane');
        var PCIcon5 = document.createElement('a-plane');

        PCIcon.setAttribute("id", "ico");

        let ip = document.createElement('a-entity');
        let ip2 = document.createElement('a-entity');
        let ip3 = document.createElement('a-entity');
        let ip4 = document.createElement('a-entity');
        let ip5 = document.createElement('a-entity');

        PCIcon.setAttribute("onclick", "setLayer1()");
        PCIcon2.setAttribute("onclick", "setLayer2()");
        PCIcon3.setAttribute("onclick", "setLayer3()");
        PCIcon4.setAttribute("onclick", "setLayer4()");
        PCIcon5.setAttribute("onclick", "setLayer5()");

//add's PC-Icon mixin (contains - position, rotation, scale, onhover event, onexithover event data) 
        PCIcon.setAttribute("mixin", "PC-Icon");
        PCIcon2.setAttribute("mixin", "PC-Icon");
        PCIcon3.setAttribute("mixin", "PC-Icon");
        PCIcon4.setAttribute("mixin", "PC-Icon");
        PCIcon5.setAttribute("mixin", "PC-Icon");

//add to clickable class try setting with mixin...?
        PCIcon.setAttribute("class", "Icons2D");
        PCIcon2.setAttribute("class", "Icons2D");
        PCIcon3.setAttribute("class", "Icons2D");
        PCIcon4.setAttribute("class", "Icons2D");
        PCIcon5.setAttribute("class", "Icons2D");

// add thumbnails to icons
        PCIcon.setAttribute("material", "src: #DesertThumb; color: #FFF" );/* opacity: 0.8; transparent: true*/
        PCIcon2.setAttribute("material", "src: #SnowThumb; color: #FFF" );
        PCIcon3.setAttribute("material", "src: #MountainThumb; color: #FFF" );
        PCIcon4.setAttribute("material", "src: #LouvreThumb; color: #FFF" );
        PCIcon5.setAttribute("material", "src: #SkyThumb; color: #FFF" );

//Icon parents, this is for the animation, again prob not the right way to do this...
        ip.setAttribute("position", "0 0 -0.34");

        ip2.setAttribute("position", "0 0 -0.35");
        ip2.setAttribute("animation__ico", "property: rotation; to: 0 25 0; dur: 500; delay: 1500; easing: easeOutQuint; autoplay: true");
        ip3.setAttribute("position", "0 0 -0.35");
        ip3.setAttribute("animation__ico", "property: rotation; to: 0 -25 0; dur: 800; delay: 1700; easing: easeOutQuint; autoplay: true");
        ip4.setAttribute("position", "0 0 -0.35");
        ip4.setAttribute("animation__ico", "property: rotation; to: 0 50 0; dur: 500; delay: 1900; easing: easeOutQuint; autoplay: true");
        ip5.setAttribute("position", "0 0 -0.35");
        ip5.setAttribute("animation__ico", "property: rotation; to: 0 -50 0; dur: 500; delay: 2000; easing: easeOutQuint; autoplay: true");


        function spawnIcons(){

            ip.appendChild(PCIcon);
            parent.appendChild(ip);
            ip2.appendChild(PCIcon2);
            parent.appendChild(ip2);
            ip3.appendChild(PCIcon3);
            parent.appendChild(ip3);
            ip4.appendChild(PCIcon4);
            parent.appendChild(ip4);
            ip5.appendChild(PCIcon5);
            parent.appendChild(ip5);

        }

        async function Set3dIcons(){
            let tog = document.getElementById("toggle");
            tog.emit("click", true);
            await sleep(200);
            tog.emit("click", true);
            setscene();

        }





    },
}); 