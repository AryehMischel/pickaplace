AFRAME.registerComponent("oncollision-setlayer", {
    schema: {type: 'string', default: "snow"}
    ,
    init: function () {
        let el = this.el;
        let parent = this.el.parentEl;
        let i = this.data;



        el.addEventListener('set', function () { //executes scene change and resets it's position -- used when camera collider collides with 3d icons

           
            parent.emit("spawn");

            el.setAttribute("geometry", "box; width: 0.1; height: 0.1; depth: 0.1" )
            //set the background texture
            setSceneBackgroundTexture(i)
            //respawn the cube
           


        });

        el.addEventListener('reset', function () { //sets it it's original position without executing any scene change --used by out of bounds collider
            parent.emit("spawn");

        });
    },
});




