
AFRAME.registerComponent("observe", {
    //schema: {type: 'string', default: "na"},
    init: function () {
      //  let data = this.data;
        const el = this.el;
        //console.log(data);
        //this.el.addEventListener("loaded", ()=> console.log("loaded"));
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
          //  console.log(data + " has changed");
             el.removeEventListener("componentchanged", onchange); // S

             await sleep(10);
            loadNext();

        }
        



    },
}); 