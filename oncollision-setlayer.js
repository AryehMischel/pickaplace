AFRAME.registerComponent("oncollision-setlayer", {
    schema: {type: 'string', default: "snow"}
    ,
    init: function () {
        let el = this.el;
        let parent = this.el.parentEl;
        let i = this.data;



        el.addEventListener('set', function () { //executes scene change and resets it's position -- used when camera collider collides with 3d icons

         
            // console.log("name is " + i);
            //set the background texture
            setSceneBackgroundTexture(i)
            //respawn the cube
            parent.emit("spawn");


        });

        el.addEventListener('reset', function () { //sets it it's original position without executing any scene change --used by out of bounds collider
            // console.log("name is " + i);
            parent.emit("spawn");

        });
    },
});




