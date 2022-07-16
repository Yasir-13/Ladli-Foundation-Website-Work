const slides = document.querySelectorAll("#move");
const images = document.querySelectorAll('.slide-img')
const light = document.querySelectorAll("#content");
const close = document.querySelectorAll(".closing");
const child = document.querySelectorAll(".lightbox-content");

slides.forEach(function(slide , index) {
    slide.addEventListener("click" , function() {
        light[index].style.display = "flex";
            setTimeout(() => {
                images.forEach((image,index)=>{
                    image.style.display="block";
                })                
            }, 500);
    })
})

close.forEach(function(icon,index) {
    icon.addEventListener("click" , function(){
        console.log("hello")
        light[index].style.display = "none";
        images.forEach((image,index)=>{
            image.style.display="none";
        })             
    })
})
