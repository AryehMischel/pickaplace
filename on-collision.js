//using A-frame Physics Engins      
//handling for "head" collisions
//then emit the scene change from colliding objects parent via the color-sky component

AFRAME.registerComponent("on-collision", {

    init: function () {
        let el = this.el;


        el.addEventListener('collisions',  (e)=> {


            let box = e.detail.els[0];
             box.emit("sit", true);
        });
    },
});




AFRAME.registerComponent("out-of-bounds-collision", {

    init: function () {
        let el = this.el;


        el.addEventListener('collisions',  (e)=> {

            e.detail.els[0].emit("reset");

        });
    },
});
