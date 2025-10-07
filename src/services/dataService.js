const catalog = [

    {
        "title": "Orange",
        "category": "fruit",
        "price": 1.99,
        "image":"oranges.jpeg",
        "_id":"1"
    },
    {
        "title": "Banana",
        "category": "fruit",
        "price": 0.99,
        "image":"banana.jpeg",
        "_id":"2"
    },
    {
        "title": "Apple",
        "category": "fruit",
        "price": 1.49,
        "image":"apples.jpeg",
        "_id":"3"
    },
    {
        "title": "Grape",
        "category": "fruit",
        "price": 1.99,
        "image":"grapes.jpeg",
        "_id":"4"
    },
    {
        "title": "Strawberry",
        "category": "fruit",
        "price": 2.49,
        "image":"strawberry.jpeg",
        "_id":"5"
    }

    
];

class DataService{
    getProducts() {
        return catalog;
    }
}

export default DataService;
