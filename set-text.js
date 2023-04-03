
        async function displayText() {
            let text = document.getElementById("text")
            let text2 = document.getElementById("text2")
            await sleep(1500)
            text.setAttribute("text", "value:pick a place")
            await sleep(1000)
            text.setAttribute("text", "value:...anyplace.")
            await sleep(1000)
            text.setAttribute("text", "value: Pick-A-Place.")
            text2.setAttribute("visible", true)//ugly 
            text.emit("set") //ugly 
        }


        function sleep(ms)
        {
            return new Promise(resolve => setTimeout(resolve, ms))
        }



 