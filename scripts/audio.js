


let clips = ["clip0", "clip1","clip2", "clip3","clip4","clip3","clip4" ]


function playClip(i) {

    document.getElementById("transitionSphere").setAttribute("sound", "src: #" + clips[i] + "; autoplay: true")

}