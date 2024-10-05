

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
            console.log("showing hands")
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
            leftController.setAttribute("raycaster", "objects: .vr-ui, .UI");
            rightController.setAttribute("raycaster", "objects: .vr-ui, .UI");
            //hide hands
            hands.setAttribute("visible", false);

        }

        el.addEventListener("showHands", () => showHands());
        el.addEventListener("hideHands", () => hideHands());



    },
});

let handsTouching = 0;

AFRAME.registerComponent("toggle-hands", {
    schema: {
        handsTouchingMe: { type: "number", default: 0 }
    },
    init: function () {
        console.log("is this re inited?, if so that dum,b")
        let el = this.el;
        let handsTouchingMe = this.data.handsTouchingMe;
        console.log(this.data.handsTouchingMe);

        /*        const hands = document.getElementById("hands");*/
        el.addEventListener("hitstart", function (e) {
            // console.log("hands touching me " + this.handsTouchingMe);
            // console.log("hands touching me " + handsTouching);

            handsTouchingMe++;
            handsTouching++;
            el.setAttribute("toggle-hands", "handsTouchingMe", handsTouchingMe);
            // console.log(skyCube.getAttribute("toggle-hands").handsTouchingMe);

            console.log("hands touching cubes", handsTouching);
            console.log("hands touching this cube", handsTouchingMe, el);
            hands.emit("showHands");
        });

        el.addEventListener("hitend", function () {
            handsTouching--;
            handsTouchingMe--;
            el.setAttribute("toggle-hands", "handsTouchingMe", handsTouchingMe);
            console.log("hands touching cubes", handsTouching);
            console.log("hands touching this cube", handsTouchingMe);

            if (handsTouching < 1) {
                hands.emit("hideHands")
            }
            // console.log("hands touching me " + this.handsTouchingMe);

            // console.log("hands touching me " + handsTouching);
        });

        el.addEventListener("onDestroy", function () {
            console.log("does ever even happen?")

            handsTouching = handsTouching - this.data.handsTouchingMe;
            console.log("hands touching cubes", handsTouching);
            console.log("hands touching this cube", this.data.handsTouchingMe, el);
            el.parentEl.removeChild(el);
        });
    },
    update: function () {
        console.log("handsTouchingMe updated");
        // Add your code here to handle the update
    }
});



