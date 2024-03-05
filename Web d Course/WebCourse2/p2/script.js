let productContainer = document.querySelector('#productContainer');

let popularContainer = document.querySelector('#popularContainer');

let cart = [];

let url = 'https://fakestoreapi.com/products';
async function getProducts() {
    let response = await fetch(url);
    let data = await response.json();
    loadProducts(data);
    loadPopularProducts(data);
}


function loadProducts(products) {
    productContainer.innerHTML = '';

    for(let i=0;i<10;i++){
        let product = products[i];
        let div = document.createElement('div');
        div.classList.add('product', 'w-fit', 'rounded-xl', 'p-2', 'bg-white');

        div.innerHTML = `<div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl"></div>
        <div class="data w-full px-2 py-5 overflow-hidden text-ellipsis">
          <h1 class="font-semibold text-xl leading-none tracking-tight">${product.title}</h1>
          <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                 <h3 class="font-semibold capitalize text-red-900">${product.category}</h3>
                 <h4 class="font-semibold mt-2">&#8377; ${product.price*80}</h4>
            </div>
            <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                      class="ri-add-line"></i></button>
          </div>`;

        let imageDiv = div.querySelector('.image');
        imageDiv.style.backgroundImage = `url(${product.image})`;

        div.querySelector('button').addEventListener('click', function() {
            if(cart.indexOf(product) == -1){
                console.log(cart);
                cart.push(product);
            }
                
        });

        productContainer.appendChild(div);   
    }
}

function loadPopularProducts(products) {
    popularContainer.innerHTML = '';

    for(let i=10;i<20;i++){
        let product = products[i];
        let div = document.createElement('div');
        
        div.classList.add('popular', 'bg-white', 'p-2', 'rounded-2xl', 'flex', 'items-start', 'gap-3', 'w-[60%]', 'flex-shrink-0');

        div.innerHTML = `<div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.title}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20 text-red-900">${product.category}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price*80}</h4>
        </div>`;

        popularContainer.appendChild(div);
    }
}

getProducts();

