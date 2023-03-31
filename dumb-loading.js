const funcs = [SetLayer1, SetLayer2, SetLayer3, SetLayer4, SetLayer5, unsetscene]; //functions are defined in ./scripts/loading.js, 
let i = 0;

function loadNext(){
    
    console.log(" executing " + i)
    funcs[i]();
    i++
}


scene.addEventListener("loaded", ()=> loadNext() );


/*
//shhh lets not talk about this...
//dumb way to cache images...
AFRAME.registerComponent("dumb-loading", {
    init: function () {

        let revisiting = false;
        window.onbeforeunload = function (e) {
            if (revisiting) {
                localStorage.setItem('reload-url', window.location.href);
            }
        }

        window.onload = function (e) {
        }
        const funcs = [setLayer1, setLayer2, setLayer3, setLayer4, setLayer5]; //functions are defined in ./scripts/loading.js, 

        let scene = this.el;

        function sleep(ms)
        {
            return new Promise(resolve => setTimeout(resolve, ms));
        }


        async function cacheCubeMaps () {
            for (var i = 0; i < funcs.length; i++) {
                funcs[i]();
                await sleep(1);
            }
        }


      /!*  function cacheCubeMap () {
             cubemap[i].visible = true;
             i ++
            }
        *!/

        scene.addEventListener('loadnext', ()=> cacheCubeMaps)
        scene.addEventListener('loaded', function () {


            if (localStorage.getItem('reload-url') != null)
             {
                 if (window.location.href == localStorage.getItem('reload-url'));
                 {
                   
                     console.log("revisiting"); // load without intro
                 }
             }



            cacheCubeMaps();
            revisting = true;
            console.log("cached!")
            
        });
    },
}); */
