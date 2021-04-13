export const foodGroupDescription = {
    pageTitle: 'Food Menu',
    title: 'Chef\'s Choice', description: `
          A traditional Italian seasoned roasted pork shoulder, seared in the oven, served on
          a fresh, hand-made flat-bread then topped with pesto crème fraiche and arugula`,
    image: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
};

export const drinkGroupDescription = {
    pageTitle: 'Drink Menu',
    title: 'Bartenders Choice', description: `
            Grab a cold one on us, it'll be delicious, nutritious and all the rest of it.
          Thank us for this hang over free beverage.`,
    image: 'https://images.pexels.com/photos/3821696/pexels-photo-3821696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
};


export const foodGroups = [{
    id: '1',
    name: 'mains',
    image: 'https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    groupId: 1,
    parent: true
},
    {
        id: '2',
        name: 'entree',
        groupId: 2,
        image: 'https://images.pexels.com/photos/5639416/pexels-photo-5639416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        parent: true
    },
    {
        id: '3',
        name: 'lunch',
        groupId: 3,
        image: 'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        parent: true
    },
    {
        id: '4',
        name: 'dessert',
        groupId: 4,
        image: 'https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        parent: true
    }
];

export const foodItems = [{
    id: '1',
    name: 'Steak & Chips',
    price: '16.00',
    groupId: 1,
    quantity: 1,
    description: '250gm Angus Steak with home cooked chips. It will fill you up!',
    image: 'https://images.unsplash.com/photo-1579366948929-444eb79881eb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTk0fHxzdGVhayUyMGFuZCUyMGZyaWVzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
}, {
    id: '2',
    name: 'Pizza',
    price: '15.00',
    groupId: 1,
    quantity: 1,
    description: 'Authentic Italian Cuisine made by only the best chefs!',
    image: 'https://thebigmansworld.com/wp-content/uploads/2020/03/2-ingredient-pizza-dough-13.jpg',
}, {
    id: '3',
    name: 'Burger',
    price: '15.50',
    groupId: 1,
    quantity: 1,
    description: 'Chicken burger made with love, lettuce and plenty of special sauce',
    image: 'https://myfoodbook.com.au/sites/default/files/styles/single_recipe/public/recipe_photo/BuffaloBurger.jpg',
},
    {
        id: '104',
        name: 'Dozen Freshly Shucked Oysters',
        price: '38.00',
        quantity: 1,
        groupId: 2,
        description: 'Traditional kilpatrick oysters with bacon pieces w/ a twist of lemon  ',
        image: 'https://myfoodbook.com.au/sites/default/files/styles/single_recipe/public/recipe_photo/BuffaloBurger.jpg',
    },
    {
        id: '105',
        name: 'Garlic Bread',
        price: '11.00',
        quantity: 1,
        groupId: 2,
        description: 'Home-made garlic bread with fresh gloves from the garden out back.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Garlicbread.jpg/1200px-Garlicbread.jpg',
    },
    {
        id: '106',
        name: 'Arancini Balls',
        price: '18.50',
        quantity: 1,
        groupId: 2,
        description: 'Arancini Balls from Grandma`s special recipe',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/arancini_balls-db2b1df.jpg',
    }

];

export const drinkGroups = [{
    id: '1',
    name: 'Beer',
    image: 'https://images.unsplash.com/photo-1441985969846-3e7c90531139?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
    groupId: 101,
    parent: true
},
    {
        id: '2',
        name: 'Wine',
        groupId: 102,
        image: 'https://images.pexels.com/photos/3756623/pexels-photo-3756623.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        parent: true
    },
    {
        id: '3',
        name: 'Spirits',
        groupId: 103,
        image: 'https://images.unsplash.com/photo-1509157774525-cd6d6cbf00a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        parent: true
    },
    {
        id: '4',
        name: 'Soft Drink',
        groupId: 104,
        image: 'https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        parent: true
    }];

export const drink = [{
    id: '1001',
    name: 'Coca-cola',
    price: '6.00',
    quantity: 1,
    groupId: 104,
    description: '250ml Refreshing Beverage',
    image: 'https://shortysliquor.com.au/media/catalog/product/cache/2fcc3329aef4183c8e06230d7e06f8f3/5/6/569-2.png',
}, {
    id: '1002',
    name: 'Fanta',
    price: '5.00',
    quantity: 1,
    groupId: 104,
    description: '250ml Refreshing Beverage',
    image: 'https://shortysliquor.com.au/media/catalog/product/cache/2fcc3329aef4183c8e06230d7e06f8f3/f/a/fanta_250ml_climline.png',
}, {
    id: '1003',
    name: 'Orange Juice',
    price: '5.50',
    quantity: 1,
    groupId: 104,
    description: '250ml Refreshing Beverage',
    image: 'https://shortysliquor.com.au/media/catalog/product/cache/2fcc3329aef4183c8e06230d7e06f8f3/3/0/300_1.png',
},
    {
        id: '1004',
        name: 'Carlsberg',
        price: '14.00',
        quantity: 1,
        groupId: 101,
        description: 'pots, schooners or pints of Carlsberg',
        image: 'https://ecampusontario.pressbooks.pub/app/uploads/sites/520/2019/12/2129H_0-300x296.jpg',
    }, {
        id: '1005',
        name: '4x Gold',
        price: '9.00',
        quantity: 1,
        groupId: 101,
        description: 'pots, schooners or pints of 4x Gold',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRn5Rr-L4BqiPS4X7-_dZB-meEGjarMZT6QGQ&usqp=CAU',
    }
];

export const templates = {
    1: [{
        id: 'OrderQuantity',
        dataType: 'ADD_SUBTRACT',
        label: 'Quantity',
        value: 1,
        constraintMin: 1,
        constraintMax: 10,
        isRequired: false
    },
        {
            id: 'OrderSize',
            dataType: 'DROP_DOWN',
            value: 'medium',
            menuOptions: [
                {size: 'blue', value: 'blue'},
                {size: 'rare', value: 'rare'},
                {size: 'medium rare', value: 'medium-rare'},
                {size: 'medium', value: 'medium'},
                {size: 'medium well', value: 'medium-well'},
                {size: 'well done', value: 'well-done'},
            ]
        }
    ],
    2: [{
        id: 'OrderQuantity',
        dataType: 'ADD_SUBTRACT',
        label: 'Quantity',
        value: 1,
        constraintMin: 1,
        constraintMax: 10,
        isRequired: false
    },
        {
            id: 'OrderSize',
            dataType: 'DROP_DOWN',
            value: 'regular',
            menuOptions: [
                {size: 'small', value: 'small'},
                {size: 'regular', value: 'regular'},
                {size: 'family', value: 'family'}
            ]
        },
        {
            id: 'OrderSauze',
            dataType: 'DROP_DOWN',
            value: 'bbq',
            menuOptions: [
                {size: 'tomato', value: 'small'},
                {size: 'bbq', value: 'bbq'},
                {size: 'marinara', value: 'marinara'}
            ]
        }
    ]
};
export const tabs = [
    {label: 'Food', icon: 'restaurant', tab: 'food'},
    {label: 'Drink', icon: 'beer-outline', tab: 'drink'},
    {label: 'Order', icon: 'wallet-outline', tab: 'order'}
];



export class HospitalityFactory {
    getGroupOneDescription(){
        return foodGroupDescription;
    }
    getGroupTwoDescription(){
        return drinkGroupDescription;
    }
    getGroupOne() {
        return foodGroups;
    }
    getItemsOne(){
        return foodItems;
    }
    getGroupTwo() {
        return drinkGroups;
    }
    getItemsTwo(){
        return drink;
    }
    getFormFields(){
        return templates;
    }
    getTabs(){
        return tabs;
    }
}
