
AFRAME.registerComponent("scene-controller", {
    init: function () {
        this.el.addEventListener("loaded",function(){
            if (typeof   loadNext == 'undefined'){
                console.log("coming for yuh")
            } else(
    
                loadNext()
                
            )
            

        });

    },
}); 