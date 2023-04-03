
AFRAME.registerComponent("spawn-position", {
    schema: {
        position: {type: 'string', default: "0, 0, 0"},
        rotation:{ type: "int", default: 0}

    }
    ,
    init: function () {
        let el = this.el;
        let newposition = this.data.position;
        let yrotation = this.data.rotation;
        let newrotation = "0 " + yrotation.toString() + " 0";
        let list = document.querySelector("#list");




        el.addEventListener('spawn', function () {
            list.emit("remove");
            el.setAttribute("render-order", "9");
            el.setAttribute("rotation", {x: 0, y: yrotation, z: 0});
            el.removeAttribute("dynamic-body");
            el.setAttribute("position", newposition);
            el.setAttribute("rotation", newrotation);
            el.setAttribute("dynamic-body", "mass: 40");
            el.setAttribute("class", "Icons3D");

            // var removed = list.splice(-1);
        });
    },
});