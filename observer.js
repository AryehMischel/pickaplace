//this component is attached to layer objects. Each will load up the next layer and then remove this component. 
AFRAME.registerComponent("observe", {
    init: function () {
        const el = this.el;
        el.addEventListener("componentchanged", onchange);

        function sleep(ms)
        {
            return new Promise(resolve => setTimeout(resolve, ms));
        }


        async function cacheCubeMaps () {
            for (var i = 0; i < funcs.length; i++) {
                funcs[i]();
            }
        }
        
         async function onchange(){
             el.removeEventListener("componentchanged", onchange); 

             await sleep(500);
            loadNext();  

        }


    },
}); 