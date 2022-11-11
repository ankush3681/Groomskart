
let url="https://636e3d13182793016f3ad782.mockapi.io/mens";
fetch(url)
.then((res)=>res.json())
.then((data)=>
    Displaydata(data)
)

wishlist=JSON.parse(localStorage.getItem("wishlist-item")) ||[];
 
function Displaydata(data){
    data.map((ele) => {
        let x =document.createElement("div");
        h2=document.createElement("h2");
        h2.innerText=ele.title;
        img=document.createElement("img");
        img.setAttribute("src",ele.image);
        h3=document.createElement("h3");
        h3.innerText="Rs."+ele.price;
        h4=document.createElement("h5");
        h4.innerText=ele.category;
        btn=document.createElement("button");
        btn.innerText="Wishlist";
        btn.addEventListener("click",function(){
        wishlist.push(ele);
        localStorage.setItem("wishlist-item",JSON.stringify(wishlist));
       })


        x.append(h2,img,h3,h4,btn);
        document.querySelector("#items").append(x);
    });
        
}