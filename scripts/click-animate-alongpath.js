AFRAME.registerComponent('click-animate-alongpath', {
    schema: {type: 'string', default: ''}
    ,
    init: function () {
        let el = this.el;
        let data = this.data;
        let target = document.querySelector("#p" + data);
        
        
        el.addEventListener('click', function (evt) {
            let cursor = evt.detail.cursorEl.getAttribute("class");
            if(cursor != "raycasting") return;
            playClip(data ) // hmmm
            target.setAttribute("position", "0 1.3 0");
            el.removeAttribute("alongpath");
            el.removeAttribute("dynamic-body");
            el.emit("animate");
            let string = "curve: #path" + data + "; dur: 1500; loop: false; easing: easeInCirc"
            el.setAttribute("alongpath", string);
            el.removeAttribute("class", "Icons3D");
            audioplayer.components.sound.stopSound();
            audioplayer.setAttribute("sound", "src: #clip" + data);
            audioplayer.emit("play");

        });


      
    }
    
});

