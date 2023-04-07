
AFRAME.registerComponent("scene-controller", {
    init: function () {

        document.querySelector('a-scene').renderer.xr.addEventListener( 'sessionstart', ()=> onEnterVR());

        document.querySelector('a-scene').renderer.xr.addEventListener( 'sessionend', ()=> onExitVR());
        
        
        function onEnterVR(){
            // toggleVRScene();
           document.getElementById("screenSpaceIcons2D").setAttribute("visible", "false");
            document.getElementById("vrui").setAttribute("visible", "true");
            
        }

        function onExitVR(){
            // toggleVRScene();
            document.getElementById("screenSpaceIcons2D").setAttribute("visible", "true");
            document.getElementById("vrui").setAttribute("visible", "false");

        }



        /* function sleep(ms)
         {
             return new Promise(resolve => setTimeout(resolve, ms));
         }
 
         
         this.el.addEventListener("loaded",function(){
            trySetScene();
             
 
         });
         
         async function trySetScene(){
             if (typeof   loadNext == 'undefined'){
                 
                 sleep(500)
                 trySetScene();
                 console.log("coming for yuh")
                 /!*document.getElementById("loader").addEventListener("loaded", ()=> loadNext());*!/
             } else(
 
                 loadNext()
 
             )
         }*/

    },
});




