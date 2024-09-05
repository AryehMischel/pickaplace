//this component is attached to layer objects. Each will load up the next layer and then remove this component. 
AFRAME.registerComponent("landing-animation", {
    init: function () {

        //make a single landing page animation script that will trigger our icons to animate.
        let parent = document.getElementById("icons2D");
        let transitionSphere = document.getElementById("transitionSphere");
        let screenSpaceIcons2D = document.getElementById("screenSpaceIcons2D");
        let text = document.getElementById("text")
        let text2 = document.getElementById("text2")
        scene.addEventListener("loaded", () => setscene())

        async function setscene() {
            console.log(parent.children.length)
        
          
            text.setAttribute("text", "value:pick a place")
            await sleep(600)
            text.setAttribute("text", "value:...anyplace.")
            await sleep(600)
            text.setAttribute("text", "value: Pick-A-Place.")
            text2.setAttribute("visible", "true")  
            text.emit("set") //ugly 
            text2.emit("set") //ugly 

            transitionSphere.emit("fadeinscene");
          
            parent.setAttribute("visible", "true")
            for(child of parent.children){
                child.emit("go", "")
            }
            await sleep(2000)
            text.setAttribute("visible", "false")   
            text2.setAttribute("visible", "false")   

        }








    },
});






function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}



