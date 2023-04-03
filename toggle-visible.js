
AFRAME.registerComponent("toggle-visible", {
    
    init: function () {
       
        let el = this.el;
        

        el.addEventListener('toggle', function () {
           toggle();
           
        });
        
        function toggle(){
            if(el.visible){
                el.setAttribute("visible", false);
            } else{
                el.setAttribute("visible", true);
            }
        }
    },
});