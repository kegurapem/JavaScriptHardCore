const array = [
    {
        "id": 1,
        "name": "Clothes",
        "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=5086"
        },
        {
        "id": 2,
        "name": "Electronics",
        "image": "https://api.lorem.space/image/watch?w=640&h=480&r=271"
        },
        {
        "id": 3,
        "name": "Furniture",
        "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=369"
        },
]

console.log(array[0].category);


const array2 = [
    {
        "id": 1,
        "category": {
            "id": 4,
            "name": "Shoes",
            "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=9227"
        }
    },
    {
        "id": 2,
        "category": {
            "id": 4,
            "name": "Shoes",
            "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=9227"
        }
    },
    {
        "id": 3,
        "category": {
            "id": 3,
            "name": "Furniture",
            "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=8187"
        }
    },
]

console.log(array2[0].id);