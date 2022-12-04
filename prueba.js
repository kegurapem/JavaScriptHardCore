const array = [
    {
        "id": 1,
        "title": "Change title",
        "price": 100,
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "category": {
            "id": 2,
            "name": "Electronics",
            "image": "https://api.lorem.space/image/watch?w=640&h=480&r=271"
        },
        "images": [
            "https://api.lorem.space/image/watch?w=640&h=480&r=820",
            "https://api.lorem.space/image/watch?w=640&h=480&r=8605",
            "https://api.lorem.space/image/watch?w=640&h=480&r=8785"
        ]
    },
    {
        "id": 2,
        "title": "Gorgeous Granite Bacon",
        "price": 70,
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "category": {
            "id": 5,
            "name": "Others",
            "image": "https://api.lorem.space/image?w=640&h=480&r=6940"
        },
        "images": [
            "https://api.lorem.space/image?w=640&h=480&r=2544",
            "https://api.lorem.space/image?w=640&h=480&r=2454",
            "https://api.lorem.space/image?w=640&h=480&r=6509"
        ]
    }
]

console.log(array[0].category);