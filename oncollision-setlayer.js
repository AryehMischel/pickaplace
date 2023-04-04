AFRAME.registerComponent("oncollision-setlayer", {
    schema: {type: 'int', default: 0}
    ,
    init: function () {
        let el = this.el;
        let parent = this.el.parentEl;
        let i = this.data;
        console.log(i);



        el.addEventListener('sit', function () { //executes scene change and resets it's position -- used when camera collider collides with 3d icons

            funcs[i]();
            parent.emit("spawn");


        });

        el.addEventListener('reset', function () { //sets it it's original position without executing any scene change --used by out of bounds collider

            parent.emit("spawn");

        });
    },
});