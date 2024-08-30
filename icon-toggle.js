

AFRAME.registerComponent("icon-toggle", {
    init: function () {
        let el = this.el;
        let on = true; //starts with 2D Icons Visibile & 3D Hidden

        const Icons2D = document.getElementById("icons2D");
        const Icons3D = document.getElementById("icons3D");
        const cursor = document.getElementById("cursor");
        const leftController = document.getElementById("leftController");
        const rightController = document.getElementById("rightController");
        const rightHand = document.getElementById("rightHand");
        const leftHand = document.getElementById("leftHand");
        let text = document.getElementById("text2d3d");

        //this.el.setAttribute(" event-set__mouseenter", "scale: 0.30 0.30 0.30");

        el.addEventListener("click", () => swapVisible());
        el.addEventListener("stop", function () {
            console.log("stopped listening");
            el.removeEventListener('click', swapVisible, true);
        })


        function swapVisible() {
            console.log(el.id);
            if (on) {
                console.log("switch to 3d");
                cursor.setAttribute("raycaster", "objects: .Icons3D, .UI");
                leftController.setAttribute("raycaster", "objects: .vr-ui, .UI");
                rightController.setAttribute("raycaster", "objects: .vr-ui, .UI");
                text.setAttribute("text", "value:2D");
                rightHand.setAttribute("class", "hand")
                leftHand.setAttribute("class", "hand")
                Icons2D.object3D.visible = false;
                Icons3D.object3D.visible = true;
                //  Icons3D.emit('enabled'); //makes 3d icons clickable (2d unclickable) via toggle-raycast-selectable script 
                on = false;
            } else {
                console.log("switch to 2d");
                cursor.setAttribute("raycaster", "objects: .Icons2D, .UI");
                leftController.setAttribute("raycaster", "objects:  .Icons2D, .vr-ui, .UI");
                rightController.setAttribute("raycaster", "objects:  .Icons2D, .vr-ui, .UI");
                rightHand.setAttribute("class", "default")
                leftHand.setAttribute("class", "default")
                text.setAttribute("text", "value:3D");
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
        console.log("awake hands manager")
        function showHands() {
            //hide controllers
            controllers.setAttribute("visible", false);
            //stop raycasting
            rightController.setAttribute("raycaster", "objects: .default");
            leftController.setAttribute("raycaster", "objects: .default");
            //set hands visible
            hands.setAttribute("visible", true);
        }

        function hideHands() {
            //show controllers
            controllers.setAttribute("visible", true);
            //start raycasting
            rightController.setAttribute("raycaster", "objects: .Icons2D, .vr-ui"); //, .Icons3D
            leftController.setAttribute("raycaster", "objects: .Icons2D, .vr-ui"); //, .Icons3D
            //hide hands
            hands.setAttribute("visible", false);

        }

        el.addEventListener("showHands", () => showHands());
        el.addEventListener("hideHands", () => hideHands());



    },
});

let handsTouching = 0;

AFRAME.registerComponent("toggle-hands", {
    init: function () {
        const manager = document.getElementById("rightController");
        let el = this.el;
        this.handsTouchingMe = 0;
        /*        const hands = document.getElementById("hands");*/
        el.addEventListener("hitstart", function (e) {
            // console.log("hands touching me " + this.handsTouchingMe);
            // console.log("hands touching me " + handsTouching);
            console.log("is it this?")
            this.handsTouchingMe++;
            handsTouching++;
            hands.emit("showHands");
        });

        el.addEventListener("hitend", function () {
            handsTouching--;
            this.handsTouchingMe--;
            if (handsTouching < 1) {
                hands.emit("hideHands")
            }
            // console.log("hands touching me " + this.handsTouchingMe);

            // console.log("hands touching me " + handsTouching);



        });

        el.addEventListener("onDestroy", function () {

            handsTouching = handsTouching - this.handsTouchingMe;
            console.log("hands touching me " + this.handsTouchingMe);
            console.log("hands touching now: " + handsTouching);
            el.parentEl.removeChild(el);
        })


    },
});



