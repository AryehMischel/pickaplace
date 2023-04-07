//using A-frame Physics Engins      
//handling for "head" collisions
//then emit the scene change from colliding objects parent via the color-sky component

AFRAME.registerComponent("on-collision", {

    init: function () {
        let el = this.el;


        el.addEventListener('collisions',  (e)=> {


            let box = e.detail.els[0];
             box.emit("set", true);
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



    AFRAME.registerComponent("generate-trigger", {
        // 
    init: function () {
    let el = this.el;
    let box;
    
    el.addEventListener('go', function (){
    box = document.createElement('a-box');
    box.setAttribute("scale", "6 6 6")
    box.setAttribute("material", "color: pink; transparent: true; opacity: 0.4" )
    box.setAttribute( "aabb-collider", "objects: .hand")
        box.setAttribute("toggle-hands", "");
   el.appendChild(box)
        /*addTrigger(box);*/
})
        
        async function addTrigger(box){
            await sleep(100);
            el.appendChild(box)
        }

        el.addEventListener('destroy', function (){
            box.emit("onDestroy");
            /*el.removeChild(box);*/
        })



},
});



