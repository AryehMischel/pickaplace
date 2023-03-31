
AFRAME.registerComponent("observe", {
    schema: {type: 'string', default: "na"},
    init: function () {
        let data = this.data;
        const el = this.el;
        console.log(data);
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
            console.log(data + " has changed");
             el.removeEventListener("componentchanged", onchange); // S

             await sleep(10);
            loadNext();

            // el.removeEventListener("componentchanged", onchange,  true);
        }


     
     
        /*
                const targetNode = this.el;
        
        
        // Options for the observer (which mutations to observe)
                const config = { attributes: true, childList: true, subtree: true };
        
        // Callback function to execute when mutations are observed
                const callback = (mutationList, observer) => {
                    for (const mutation of mutationList) {
                        if (mutation.type === "childList") {
                            console.log("A child node has been added or removed.");
                        } else if (mutation.type === "attributes") {
                            console.log(`The ${mutation.attributeName} attribute was modified.`);
                        }
                    }
                };
        
        // Create an observer instance linked to the callback function
                const observer = new MutationObserver(callback);
        
        // Start observing the target node for configured mutations
                observer.observe(targetNode, config);
        
        // Later, you can stop observing
        //observer.disconnect();
        */



    },
}); 