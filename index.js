const btnEl=document.getElementById("btn")
const animecontainerEl=document.querySelector(".anime-container")
const animenameEl=document.querySelector(".anime-name")
const animeimgEl=document.querySelector(".anime-img")



btnEl.addEventListener("click",async function(){
    try {
        // before loading
        btnEl.disabled=true;
        btnEl.innerText="Loading ..."
        animenameEl.innerText='Updating...'
        const response =await fetch("https://api.catboys.com/img")
        const data =await response.json()
        // after loading 
        btnEl.disabled = false;
        btnEl.innerText="Get Anime";
        animecontainerEl.style.display = "block"
        animeimgEl.src = data.url
        animenameEl.innerText =data.artist
    } catch (error) {
        // ther is Error are comming if internet is not avaiable .
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText="Get Anime";
        animenameEl.innerText='An error happend , please try again'

    }
})