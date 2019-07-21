//import axios from 'axions';

const products = [
    {
       id: 1,
       imageUrl: 'https://images.unsplash.com/photo-1478004521390-655bd10c9f43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
       name: 'Apple',
       price: {
        "amount": "2.00",
        "currency": "RSA",
        "symbol": 'R'
    }
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80',
        name: 'Banana',
        price: {
            "amount": "2.00",
            "currency": "RSA",
            "symbol": 'R'
        }
    },
    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1560769680-ba2f3767c785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=700&q=80',
        name: 'Coconut',
        price: {
            "amount": "2.00",
            "currency": "RSA",
            "symbol": 'R'
        }
    }
];

let cartItems = [];


export default class HttpService{


    getAllProducts() {
        return products;
    }

    getProductById(id){
        return products.filter(r => r.id === id)[0];
    }

    filterProductByName(name){
        return products.filter(p => p.name === name);
    }

    addToCart(item){
        var c = cartItems.filter(i => i.id === item.id)[0];
        if(c){
            c.quantity += 1;
            const index = cartItems.findIndex(i => i.id === item.id);

            if(index !== -1){
                cartItems.splice(index, 1, c);
                return cartItems;
            }
        }

        cartItems.push(item);
        return cartItems;
    }

    removeFromCard(id){
        cartItems = cartItems.filter(r => r.id !== id);
    }

    getCartItems(){
        return cartItems;
    }
    
}