const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex = index;
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.style.display = "none";

});

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex].src;

});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    lightboxImg.src = images[currentIndex].src;

});

function filterImages(category){

    images.forEach(img=>{

        if(category === "all"){
            img.style.display = "block";
        }

        else if(img.classList.contains(category)){
            img.style.display = "block";
        }

        else{
            img.style.display = "none";
        }

    });

}