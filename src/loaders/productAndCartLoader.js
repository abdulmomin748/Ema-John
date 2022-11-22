import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
    // get Products
    const productsData = await fetch('http://localhost:5000/products');
    const {products} = await productsData.json(); // {count: 76, products: Array(76)}
    // get Cart 
    const savedCart = getStoredCart();
    // console.log('savedCart', savedCart);
    // console.log('producnts', products);

    const initialCart = [];
    for (const id in savedCart) {
        const addedProduct = products.find(product => product._id === id);
        // console.log(addedProduct);
        if(addedProduct){
            const quantity = savedCart[id]; // joto bar akta product repeat hoyche tar quantity
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct)
            // console.log(id,quantity);
        }
        // console.log(id,addedProduct);
        // console.log(id);
    }


    return {products: products, initialCart: initialCart};
};
