//this component is attached to layer objects. Each will load up the next layer and then remove this component. 
AFRAME.registerComponent("landing-animation", {
    init: function () {

        //make a single landing page animation script that will trigger our icons to animate.
        let parent = document.getElementById("icons2D");
        let transitionSphere = document.getElementById("transitionSphere");
        let screenSpaceIcons2D = document.getElementById("screenSpaceIcons2D");

        scene.addEventListener("loaded", () => setscene())

        async function setscene() {
            
            let text = document.getElementById("text")
            text.setAttribute("text", "value:pick a place")
            await sleep(1000)
            text.setAttribute("text", "value:...anyplace.")
            await sleep(1000)
            text.setAttribute("text", "value: Pick-A-Place.")
            text.emit("set") //ugly 
            transitionSphere.emit("fadeinscene");


        }








    },
});






function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}



