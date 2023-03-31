const funcs = [SetLayer1, SetLayer2, SetLayer3, SetLayer4, SetLayer5, unsetscene]; //functions are defined in ./scripts/loading.js, 
let i = 0;

function loadNext(){
    
    console.log(" executing " + i)
    funcs[i]();
    i++
}


scene.addEventListener("loaded", ()=> loadNext());


