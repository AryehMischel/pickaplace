

AFRAME.registerComponent("icon-toggle", {
    init: function () {
        let el = this.el;
        let on = true; //starts with 2D Icons Visibile & 3D Hidden

        const Icons2D = document.getElementById("icons2D");
        const Icons3D = document.getElementById("icons3D");
        const cursor = document.getElementById("cursor");
        const lController = document.getElementById("lController");
        let rController = document.getElementById("rController");

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
                lController.setAttribute("raycaster", "objects: .vr-ui, .UI");
                rController.setAttribute("raycaster", "objects: .vr-ui, .UI");
                Icons2D.object3D.visible = false;
                Icons3D.object3D.visible = true;
                //  Icons3D.emit('enabled'); //makes 3d icons clickable (2d unclickable) via toggle-raycast-selectable script 
                on = false;
            } else {
                console.log("switch to 2d");
                cursor.setAttribute("raycaster", "objects: .Icons2D, .UI");
                lController.setAttribute("raycaster", "objects:  .Icons2D, .vr-ui, .UI");
                rController.setAttribute("raycaster", "objects:  .Icons2D, .vr-ui, .UI");
                Icons2D.object3D.visible = true;
                Icons3D.object3D.visible = false;
                //Icons3D.emit('disabled'); //makes 3d icons unclickable (2d clickable) via toggle-raycast-selectable script 
                on = true;
            }
            
        }

    },
});

AFRAME.registerComponent("hands-manager", {
    init: function () {
        let el = this.el;
        const rController = document.getElementById("rController");
        const hands = document.getElementById("hands");

        function showHands(){
            console.log("showing")
            rController.parentEl.setAttribute("visible", false);
            rController.setAttribute("raycaster", "objects: .default");
            hands.setAttribute("visible", true);
        }

        function hideHands(){
            console.log("hiding")
            rController.parentEl.setAttribute("visible", true);
            rController.setAttribute("raycaster", "objects: .Icons2D, .vr-ui"); //, .Icons3D
            hands.setAttribute("visible", false);

        }
        
        el.addEventListener("ShowHands", ()=>showHands());
        el.addEventListener("HideHands", ()=>hideHands());
        
        
        
    },
});

AFRAME.registerComponent("toggle-hands", {
    init: function () {
        const manager = document.getElementById("rController");
        let el = this.el;
        /*        const hands = document.getElementById("hands");*/
        el.addEventListener("hitstart", function () {
            manager.emit("ShowHands");

        });

        el.addEventListener("hitend", function () {
            manager.emit("HideHands");



    });


    },
});



