// use local storage to manage card data
const addToDb = id => {
    let shoppingCart = {};
   
    // get the shopping cart from local storage
        const storedCard = localStorage.getItem('shopping-cart');
        if(storedCard) {
            shoppingCart = JSON.parse(storedCard);
        }
    // else{
    //     shoppingCart = {};
    // }

    // add quantity
    const quantity = shoppingCart[id];
    // console.log(quantity);
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }   
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))   
}


const removeFromDb = id => {
   const storedCart = localStorage.getItem('shopping-cart');
   if(storedCart){
    const shoppingCart = JSON.parse(storedCart);
    if(id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))   
    }
   }
}



const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}


const getStoredCart = () => {
    let shoppingCart = {}
   
    // get the shopping cart from local storage
    const storedCard = localStorage.getItem('shopping-cart');
    if(storedCard) {
        shoppingCart = JSON.parse(storedCard);
    }
    return shoppingCart;
}


export {
    addToDb,
    removeFromDb,
    deleteShoppingCart,
    getStoredCart
};