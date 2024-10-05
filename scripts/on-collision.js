//using A-frame Physics Engins
//handling for "head" collisions
//then emit the scene change from colliding objects parent via the color-sky component

AFRAME.registerComponent("on-collision", {

    init: function () {
        let el = this.el;


        el.addEventListener('collisions',  (e)=> {
            console.log("collision detected");
            e.detail.els[0].emit("set", true);
          
            // console.log(box);
        });
    },
});




AFRAME.registerComponent("out-of-bounds-collision", {

    init: function () {
        let el = this.el;

        el.addEventListener('collisions',  (e)=> {
            console.log("out of bounds");
            e.detail.els[0].emit("reset");

        });
    },
});




