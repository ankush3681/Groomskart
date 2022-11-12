let arr=[
    "./slider image/slider-1.webp",
    "./slider image/slider-2.webp",
    "./slider image/slider-3.webp",
    "./slider image/slider-4.webp",
    "./slider image/slider-5.webp",
    "./slider image/slider-6.webp",
    "./slider image/slider-7.webp",
    "./slider image/slider-8.webp",
    "./slider image/slider-9.webp"
];
let i=0;
 let int=setInterval(() => {
   
        document.querySelector("#slider-image").src=arr[i];
       i++;
       if(i>8){
        i=0;
       }
  
}, 2000);


// setInterval(first,2000);
