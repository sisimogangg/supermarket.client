import axios from 'axions';

const apiBaseURL = '';


export default class HttpService{
    getAllProducts(){
        return [
            {
               imageUrl: 'https://images.unsplash.com/photo-1478004521390-655bd10c9f43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
               name: 'Apple',
               price: 2
            },
            {
                imageUrl: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80',
                name: 'Banana',
                price: 2  
            },
            {
                imageUrl: 'https://images.unsplash.com/photo-1560769680-ba2f3767c785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=700&q=80',
                name: 'Coconut',
                price: 2
            }
        ];
    }
}