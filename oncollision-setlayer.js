AFRAME.registerComponent("oncollision-setlayer", {
    schema: {type: 'string', default: "snow"}
    ,
    init: function () {
        let el = this.el;
        let parent = this.el.parentEl;
        let i = this.data;
        console.log(i);



        el.addEventListener('set', function () { //executes scene change and resets it's position -- used when camera collider collides with 3d icons

            //funcs[i]();
            console.log("name is " + i);
            setSceneBackgroundTexture(i)
            parent.emit("spawn");


        });

        el.addEventListener('reset', function () { //sets it it's original position without executing any scene change --used by out of bounds collider
            console.log("name is " + i);
            parent.emit("spawn");

        });
    },
});




AFRAME.registerComponent("oncollision-execute", {
    schema: {type: 'string', default: "snow"}
    ,
    init: function () {
        let el = this.el;
        let parent = this.el.parentEl;
        let i = this.data;
        console.log(i);



        el.addEventListener('set', function () { //executes scene change and resets it's position -- used when camera collider collides with 3d icons

            //funcs[i]();
            console.log("name is " + i);
            parent.emit("spawn");


        });

        el.addEventListener('reset', function () { //sets it it's original position without executing any scene change --used by out of bounds collider
            console.log("name is " + i);
            parent.emit("spawn");

        });
    },
});