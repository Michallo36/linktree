const sharebuttons = document.querySelectorAll(".share.button")

async function copyText(e){
    e.preventDefault()
    const link = this.getAttribute("link")
    console.log(link)

    try{
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)

    }
    catch (err){
        console.error(err)
    }
}

sharebuttons.forEach(sharebuttons => sharebuttons.addEventListener("click",copyText))