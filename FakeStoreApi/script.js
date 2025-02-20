const maindiv=document.getElementById('main');
const addcart=document.getElementById('cart');
const pcart=document.getElementById('cartp');
const modal = document.getElementById('description');

const clsbtn=document.getElementById('close');
const clsdesc=document.getElementById('clsdesc');
function APILOGIC()
{
    fetch('https://fakestoreapi.com/products')
    .then(function (res1)
    { 
        return res1.json()
     })
    .then(function (res2){
       console.log(res2);
        displayData(res2)})
    .catch(function (err){console.log(err)});
    

}
APILOGIC();

function displayData(Data)
{
    Data.forEach( function (pro) {
        /*image */
        const img=document.createElement('img');
        img.src=pro.image;
        img.alt="product";
        img.classList.add('product_img');
        /*title*/
        const title=document.createElement('p');
        title.textContent=pro.title;
        title.style.marginLeft="20px";
        title.style.marginBottom="0px";
        title.style.padding="0px";
        title.style.fontSize="15px";
        /*price*/
        const price=document.createElement('p');
        price.textContent="$"+pro.price;
        price.style.fontSize="16px";
        price.style.fontWeight="900";
        price.style.marginLeft="20px";
      
        /*description btn */
        const btn = document.createElement('button');
        btn.textContent="Description";
        btn.addEventListener('click',open);
        btn.style.padding="5px";
        btn.style.marginLeft="20px";
        btn.style.marginBottom="10px";
        btn.style.marginTop="10px";
        btn.style.border="none";
        btn.style.boxShadow="2px 2px black";
        btn.style.backgroundColor="gainsboro";
        btn.style.color="black";
        btn.style.fontSize="16px";
        btn.style.borderRadius="10px";
        btn.style.fontWeight="700";
        btn.style.cursor="pointer";
        btn.addEventListener('click',()=>openmodal(pro.description));

     
       /*add to cart btn*/
        const add = document.createElement('button');
        add.style.cursor="pointer";
        add.textContent="Add to Cart";
        add.classList.add('add');
        add.addEventListener('click',()=>setTimeout(ad(pro.title),1000/2));

        pcart.style.backgroundColor="gainsboro";
        addcart.appendChild(pcart);
         
     

        /*description close */
        clsdesc.addEventListener('click',closemodal);
        clsdesc.style.cursor="pointer";

    
        //---------------------
        const procard=document.createElement('div');
        procard.classList.add('procard');
        procard.append(img,title,price,btn,add,desc);
        maindiv.append(procard);

    }
    );
   
}
/*description */
  
  const desc=document.createElement('p');
  function openmodal(prodesc)
  {
     desc.textContent=prodesc;
     modal.appendChild(desc);
     modal.style.visibility="visible";
  }
  function closemodal()
  {
     modal.style.visibility="hidden";
  }

// //------------------


/*Added To cart */

function ad(title)
{
   addcart.style.visibility="visible";
   pcart.textContent=`${title} Added to cart`;
   setTimeout(close,1000);
}

function close()
{
      addcart.style.visibility="hidden";
}

