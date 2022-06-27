//store the products array in localstorage as "data"

var array=JSON.parse(localStorage.getItem("data"))||[];

document.querySelector("form").addEventListener("submit",submitfun);

function submitfun()
{
    event.preventDefault();
   
    var form=document.querySelector("#product_form");
    var brand=form.product_brand.value;
    var name=form.product_name.value;
    var price=form.product_price.value;
    var image=form.product_image.value;

   var obj={
    Brand:brand,
    Name:name,
    Price:price,
    image:image
   }
   array.push(obj);
   localStorage.setItem("data",JSON.stringify(array));
   
  
  
}




