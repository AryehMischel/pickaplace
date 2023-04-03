
AFRAME.registerComponent("scene-controller", {
    init: function () {
        this.el.addEventListener("loaded",function(){
            loadNext();
            console.log("started");

        });
    },
}); 