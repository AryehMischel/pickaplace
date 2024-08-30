//this component is attached to layer objects. Each will load up the next layer and then remove this component. 
AFRAME.registerComponent("layers", {
    init: function () {
        
        //make a single landing page animation script that will trigger our icons to animate.
        let parent = document.getElementById("icons2D");
        let transitionSphere = document.getElementById("transitionSphere");
        let screenSpaceIcons2D = document.getElementById("screenSpaceIcons2D");

        scene.addEventListener("loaded", ()=> setscene())

        function setscene(){
            transitionSphere.emit("fadeinscene");
            // spawnIcons();
            // CreateIconToggle();

        }


 





    },
}); 