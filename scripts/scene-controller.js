
AFRAME.registerComponent("scene-controller", {
    init: function () {

        document.querySelector('a-scene').renderer.xr.addEventListener( 'sessionstart', ()=> onEnterVR());

        document.querySelector('a-scene').renderer.xr.addEventListener( 'sessionend', ()=> onExitVR());
        
        
       async function onEnterVR(){
           document.getElementById("screenSpaceIcons2D").setAttribute("visible", "false");
            document.getElementById("vrui").setAttribute("visible", "true");

        }

        function onExitVR(){
            document.getElementById("screenSpaceIcons2D").setAttribute("visible", "true");
            document.getElementById("vrui").setAttribute("visible", "false");

        }



    },
});




