
AFRAME.registerComponent("respawn-cube", {
    schema: {
        position: {type: 'string', default: "0, 0, 0"},
        rotation:{ type: "int", default: 0}

    }
    ,
    init: function () {
        const el = this.el;
        let newposition = this.data.position;
        let yrotation = this.data.rotation;
        let newrotation = "0 " + yrotation.toString() + " 0";


        el.addEventListener('spawn', function () {
          
            // el.emit("destroy") //removing the trigger collider (there must be a better way)
            el.removeAttribute("dynamic-body");
            el.setAttribute("scale", "0.05 0.05 0.05")
            el.setAttribute("visible", "false")
            
            el.setAttribute("rotation", {x: 0, y: yrotation, z: 0});
     

           

           

         
            theRest();
            
        });
        
        async function theRest(){
            el.setAttribute("position", newposition);
            el.setAttribute("rotation", newrotation);
           
            await sleep(500)
           
            handsTouching = handsTouching - el.getAttribute("toggle-hands").handsTouchingMe < 0 ? 0 : handsTouching - el.getAttribute("toggle-hands").handsTouchingMe;
          
            el.setAttribute("toggle-hands", "handsTouchingMe", 0);

            if(handsTouching == 0){
                   hands.emit("hideHands")
            }
            await sleep(500)
            el.setAttribute("dynamic-body", "mass: 0.5");
            await sleep(500)
            el.emit("go") //what does this even do?
            await sleep(500)
            el.setAttribute("visible", "true");
            el.setAttribute("class", "Icons3D");
        }
        
        
        
    },
});