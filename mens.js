
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
  
}, 4000);

let bag=[];
let url="https://6370948408218c267e01d3bd.mockapi.io/mens";
fetch(url)
.then((res)=>res.json())
.then((data)=>{
    bag=data;
    Displaydata(data);
})



wishlist=JSON.parse(localStorage.getItem("wishlist-item")) ||[];


// searchbar Selection 

document.querySelector("#searchbar").addEventListener("input",function(){
    let q=document.querySelector("#searchbar").value;
    let newdata=bag.filter((ele)=>{
        return ele.title.toLowerCase().includes(q.toLowerCase());
    })
    Displaydata(newdata);
})


 
function Displaydata(data){
    document.querySelector("#items").innerText=[];
    data.map((ele) => {
        let x =document.createElement("div");
        h2=document.createElement("h2");
        h2.innerText=ele.title;
        img=document.createElement("img");
        img.setAttribute("src",ele.image);
        h3=document.createElement("h3");
        h3.innerText="Rs."+ele.price;
        h4=document.createElement("h5");
        h4.innerText=ele.brand;
        btn=document.createElement("button");
        btn.innerText="Wishlist";
        btn.addEventListener("click",function(){
        wishlist.push(ele);
        localStorage.setItem("wishlist-item",JSON.stringify(wishlist));
        alert("Item added to wishlist")
       })


        x.append(h2,img,h3,h4,btn);
        document.querySelector("#items").append(x);
    });
        
}

// price sort
function myfun1(){
    bag.sort((a,b)=>{
        return (a.price-b.price);
    })
    Displaydata(bag);
}
function myfun2(){
    bag.sort((a,b)=>{
        return (b.price-a.price);
    })
    Displaydata(bag);
}


// brand select

function brand1(){
    let ans=bag.filter((ele)=>{
       return ele.brand=="Puma";
    })
    Displaydata(ans);
}
function brand2(){
    let ans=bag.filter((ele)=>{
       return ele.brand=="Roadster";
    })
    Displaydata(ans);
}
function brand3(){
    let ans=bag.filter((ele)=>{
       return ele.brand=="Wrong";
    })
    Displaydata(ans);
}
function brand4(){
    let ans=bag.filter((ele)=>{
       return ele.brand=="Adidas";
    })
    Displaydata(ans);
}
function brand5(){
    let ans=bag.filter((ele)=>{
       return ele.brand=="Campus";
    })
    Displaydata(ans);
}

// items select

function item1(){
    let itm=bag.filter((ele)=>{
        return ele.title=="Shirt";
    })
    Displaydata(itm);
}
function item2(){
    let itm=bag.filter((ele)=>{
        return ele.title=="Jacket";
    })
    Displaydata(itm);
}
function item3(){
    let itm=bag.filter((ele)=>{
        return ele.title=="Kurtas";
    })
    Displaydata(itm);
}
function item4(){
    let itm=bag.filter((ele)=>{
        return ele.title=="Shoes";
    })
    Displaydata(itm);
}
function item5(){
    let itm=bag.filter((ele)=>{
        return ele.title=="T-Shirt";
    })
    Displaydata(itm);
}
function item6(){
    let itm=bag.filter((ele)=>{
        return ele.title=="Jeans";
    })
    Displaydata(itm);
}





