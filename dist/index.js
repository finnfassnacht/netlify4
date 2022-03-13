console.log("THIS IS FUCKING WORKING!!!")
function getter() {
    async function getData(){
        const response = await fetch("/.netlify/functions/index/data")
        const data = await response.json()
        var finale = (data.data)
        console.log("server says this: " + finale)
        document.getElementById("data_display").innerText = finale
    }
    getData()
}