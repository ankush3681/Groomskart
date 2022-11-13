mydata=JSON.parse(localStorage.getItem("wishlist-item"));

cartlist=JSON.parse(localStorage.getItem("cart-item"))||[];

document.querySelector("#wishlist-total>span").innerText=mydata.length;

Displaydata(mydata);


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
        h4.innerText=ele.brand;
        btn=document.createElement("button");
        btn.innerText="Add to Cart";
            btn.addEventListener("click",function(){
                cartlist.push(ele);
                localStorage.setItem("cart-item",JSON.stringify(cartlist));
                alert("Item added to cart successfully")

               mydata= mydata.filter((x)=>
                    x.title!==ele.title
               )
                localStorage.setItem("wishlist-item",JSON.stringify(mydata));
                location.reload();
               });


        x.append(h2,img,h3,h4,btn);
        document.querySelector("#items").append(x);
    });
        
}