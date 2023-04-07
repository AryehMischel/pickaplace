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


AFRAME.registerComponent("trigger", {

    init: function () {
        const world = scene.CANNON.world;
        const scene = document.querySelector('a-scene').object3D;
        world.gravity.set(0, -1.82, 0)
// world.broadphase = new CANNON.NaiveBroadphase()
// ;(world.solver as CANNON.GSSolver).iterations = 10
// world.allowSleep = true

        const normalMaterial = new THREE.MeshNormalMaterial()
        const phongMaterial = new THREE.MeshPhongMaterial()

        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
        const cubeMesh = new THREE.Mesh(cubeGeometry, normalMaterial)
        cubeMesh.position.x = -3
        cubeMesh.position.y = 3
        cubeMesh.castShadow = true
        scene.add(cubeMesh)
        const cubeShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5))
        const cubeBody = new CANNON.Body({ mass: 1 })
        cubeBody.addShape(cubeShape)
        cubeBody.position.x = cubeMesh.position.x
        cubeBody.position.y = cubeMesh.position.y
        cubeBody.position.z = cubeMesh.position.z
        world.addBody(cubeBody)
       
     
    },
});

