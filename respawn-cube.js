
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
            console.log("respawning cube")
            // el.emit("destroy") //removing the trigger collider (there must be a better way)
            el.removeAttribute("dynamic-body");
            el.setAttribute("visible", "false")
            
            el.setAttribute("rotation", {x: 0, y: yrotation, z: 0});
            
               if(handsTouching < 1){
                   hands.emit("HideHands")
               }

           

         
            theRest();
            
        });
        
        async function theRest(){
            el.setAttribute("position", newposition);
            el.setAttribute("rotation", newrotation);

            await sleep(500)
            el.setAttribute("dynamic-body", "mass: 40; shape: box");
            await sleep(500)
            el.emit("go")
            await sleep(500)
            el.setAttribute("visible", "true");
            el.setAttribute("class", "Icons3D");

           
            /*el.setAttribute("rotation", {x: 0, y: yrotation, z: 0});
          
            el.setAttribute("position", newposition);
            el.setAttribute("rotation", newrotation);
            el.setAttribute("dynamic-body", "mass: 40; shape: box");
            el.setAttribute("visible", "true");
            el.setAttribute("class", "Icons3D");
            el.emit("go")*/
        }
        
        
        
    },
});