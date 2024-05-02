document.querySelector("footer").addEventListener("click", function(){
    if(this.classList.contains("on")){
        this.classList.remove("on")
    }else{
        this.classList.add("on")
    }
})