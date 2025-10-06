const catalog = [
    {
        "title": "orange",
        "category": "fruit",
        "price": 1.99,
        "image": "oranges.jpeg",
        "_id": "1"
    },
    {
        "title": "Apple",
        "category": "fruit",
        "price": 8.50,
        "image": "apple.jpg",
        "_id": "2"
    },
    {
        "title": "Banana",
        "category": "fruit",
        "price": 10.00,
        "image": "banana.jpg",
        "_id": "3"
    },
    {
        "title": "Strawberries",
        "category": "berry",
        "price": 15.25,
        "image": "strawberry.jpg",
        "_id": "4"
    },
    {
        "title": "Grapes",
        "category": "fruit",
        "price": 11.99,
        "image": "grapes.jpg",
        "_id": "5"
    }
]; 

class DataService {
    getProducts() {
        return catalog;
    }
}

export default DataService;


