async function fetchProducts(){
    try{
        let url = 'https://dummyjson.com/products';
        let data = await fetch(url);

        let products = await data.json();
        return products.products;
    }
    catch(error){
        console.log('Unable to Fetch Data',error);
    }
}

let products = []

fetchProducts().then(response => {
    products = response;
})