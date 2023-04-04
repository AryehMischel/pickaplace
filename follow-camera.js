//SourceTemplate --> https://stackoverflow.com/questions/38960058/how-to-listen-to-cameras-world-position-in-a-frame
AFRAME.registerComponent('follow-camera', {

    schema: {
        timestamp: {type: 'int'},
        seconds:   {type: 'int'} // default 0
    },

    log : function () {
        const cameraEl = this.el.sceneEl.camera.el;
        let rotation = cameraEl.getAttribute('rotation');
        let worldPos = new THREE.Vector3();
        worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);
        this.el.setAttribute("position", worldPos);
      
    },

    play: function () {
        this.data.timestamp = Date.now();
        this.log();
    },

    tick: function () {
        if (Date.now() - this.data.timestamp > 100) {
            this.data.timestamp += 100;
            this.log();
        }
    },
});