AFRAME.registerComponent("icon-toggle", {
    init: function () {
        let el = this.el;
        let on = true; //starts with 2D Icons Visibile & 3D Hidden

        const Icons2D = document.getElementById("icons2D");
        const Icons3D = document.getElementById("icons3D");
        const cursor = document.getElementById("cursor");
        const lHand = document.getElementById("lHand");
        const rHand = document.getElementById("rHand");

        //this.el.setAttribute(" event-set__mouseenter", "scale: 0.30 0.30 0.30");

        el.addEventListener("click", ()=> swapVisible());
        el.addEventListener("stop", function(){
            console.log("stopped listening");
            el.removeEventListener('click', swapVisible, true);
        })


        function swapVisible(){
            console.log(el.id);
            if(on){
                console.log("switch to 3d");
                cursor.setAttribute("raycaster", "objects: .Icons3D, .UI");
                lHand.setAttribute("raycaster", "objects: .vr-ui, .UI");
                rHand.setAttribute("raycaster", "objects: .vr-ui, .UI");
                Icons2D.object3D.visible = false;
                Icons3D.object3D.visible = true;
                //  Icons3D.emit('enabled'); //makes 3d icons clickable (2d unclickable) via toggle-raycast-selectable script 
                on = false;
            } else {
                console.log("switch to 2d");
                cursor.setAttribute("raycaster", "objects: .Icons2D, .UI");
                lHand.setAttribute("raycaster", "objects:  .Icons2D, .vr-ui, .UI");
                rHand.setAttribute("raycaster", "objects:  .Icons2D, .vr-ui, .UI");
                Icons2D.object3D.visible = true;
                Icons3D.object3D.visible = false;
                //Icons3D.emit('disabled'); //makes 3d icons unclickable (2d clickable) via toggle-raycast-selectable script 
                on = true;
            }
            
        }

    },
});

