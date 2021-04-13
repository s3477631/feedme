export const treatmentGroupDescription = {
    pageTitle: 'Treatments',
    title: 'Treatments', description: `
     You work hard and play hard, but do you take care
     of you? If not, let us do that for you!
     You deserve to treat yo self to our treatment range`,
    image: 'https://images.pexels.com/photos/374148/pexels-photo-374148.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
};

export const productGroupDescription = {
    pageTitle: 'Products',
    title: 'Product Range', description: `
    Treat yourself to one of our high quality products.
    We take pride in who we are and hope that
    you will see that too.`,
    image: 'https://images.pexels.com/photos/2253836/pexels-photo-2253836.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
};


export const treatmentGroups = [{
    id: '1',
    name: 'Happiness Series',
    image: 'https://images.pexels.com/photos/774866/pexels-photo-774866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    groupId: 1,
    parent: true
},
    {
        id: '2',
        name: 'Facials',
        groupId: 2,
        image: 'https://images.pexels.com/photos/3192/woman-girl-beauty-mask.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        parent: true
    },
    {
        id: '3',
        name: 'Massage',
        groupId: 3,
        image: 'https://images.pexels.com/photos/6628697/pexels-photo-6628697.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        parent: true
    },
    {
        id: '4',
        name: 'Spa Package',
        groupId: 4,
        image: 'https://images.pexels.com/photos/4202919/pexels-photo-4202919.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        parent: true
    }
];

export const foodItems = [{
    id: '1',
    name: 'Relax series',
    price: '500',
    groupId: 1,
    quantity: 1,
    description: '5 x 1 hr massage sessions /w facial',
    image: 'https://cdn.pixabay.com/photo/2014/12/13/18/27/physiotherapy-567021__480.jpg',
}, {
    id: '2',
    name: 'Results Series',
    price: '800',
    groupId: 1,
    quantity: 1,
    description: 'Authentic Italian Cuisine made by only the best chefs!',
    image: 'https://thebigmansworld.com/wp-content/uploads/2020/03/2-ingredient-pizza-dough-13.jpg',
}, {
    id: '3',
    name: 'Nuture Series',
    price: '600',
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

export const productGroups = [{
    id: '1',
    name: 'Face',
    image: 'https://images.pexels.com/photos/5938242/pexels-photo-5938242.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    groupId: 101,
    parent: true
},
    {
        id: '2',
        name: 'Body',
        groupId: 102,
        image: 'https://images.pexels.com/photos/4210659/pexels-photo-4210659.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        parent: true
    },
    {
        id: '3',
        name: 'Mother & Baby',
        groupId: 103,
        image: 'https://images.pexels.com/photos/3270224/pexels-photo-3270224.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        parent: true
    },
    {
        id: '4',
        name: 'Inner Beauty',
        groupId: 104,
        image: 'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
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
    {label: 'Treatments', icon: 'bandage-outline', tab: 'food'},
    {label: 'Products', icon: 'basket', tab: 'drink'},
    {label: 'Order', icon: 'wallet-outline', tab: 'order'}
];

export class BeautyFactory {

    getGroupOneDescription(){
        return treatmentGroupDescription;
    }
    getGroupTwoDescription(){
        return productGroupDescription;
    }

    getGroupOne() {
        return treatmentGroups;
    }

    getItemsOne() {
        return foodItems;
    }

    getGroupTwo() {
        return productGroups;
    }

    getItemsTwo() {
        return drink;
    }

    getFormFields() {
        return templates;
    }

    getTabs() {
        return tabs;
    }
}
