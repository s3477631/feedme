import {Injectable} from '@angular/core';
import {ProductDto} from '../../model/product.dto';
import {GroupingDto} from '../../model/grouping.dto';

@Injectable({
    providedIn: 'root'
})
export class DemoMenuService {
    mockResponseMap = {
        'GET': {
            'POST': {
                '/core/api/submit-order': (body) => {
                    return this.getConfirmation(body.processOrder);
                }
            }
        }
    };
    drinkList: ProductDto[];
    foodList: ProductDto[];

    mockResponseRegexes = [
        {
            regex: /api\/food/,
            response: (args, body) => {
                return this.getFood();
            }
        },
        {
            regex: /api\/groups-food/,
            response: (args, body) => {
                return this.foodGroups();
            }
        },
        {
            regex: /api\/groups-drink/,
            response: (args, body) => {
                return this.drinkGroups();
            }
        },
        {
            regex: /api\/get-first-child-item\/(.*)/,
            response: (args, body) => {
                return this.getGroupItems(args[1]);
            }
        }
    ];

    constructor() {
    }

    private foodGroups(): GroupingDto[] {
        const foodGroups = [{
            id: '1',
            name: 'mains',
            image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/steak-and-chips-f385bf3.jpg?quality=90&resize=504,458',
            groupId: 1,
            parent: true
        },
            {
                id: '2',
                name: 'entree',
                groupId: 2,
                image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/steak-and-chips-f385bf3.jpg?quality=90&resize=504,458',
                parent: true
            },
            {
                id: '3',
                name: 'lunch',
                groupId: 3,
                image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/steak-and-chips-f385bf3.jpg?quality=90&resize=504,458',
                parent: true
            },
            {
                id: '4',
                name: 'dessert',
                groupId: 4,
                image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/steak-and-chips-f385bf3.jpg?quality=90&resize=504,458',
                parent: true
            }

        ];
        return foodGroups;
    }

    private drinkGroups(): GroupingDto[] {
        const drinkGroups = [{
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
                image: 'https://images.unsplash.com/photo-1581035116078-04cb00f8f4fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
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
        return drinkGroups;
    }

    private getDrink(): ProductDto[] {
        const drink = [{
            id: '1',
            name: 'Coca-cola',
            price: '6.00',
            quantity: 1,
            groupId: 104,
            description: '250ml Refreshing Beverage',
            image: 'https://shortysliquor.com.au/media/catalog/product/cache/2fcc3329aef4183c8e06230d7e06f8f3/5/6/569-2.png',
        }, {
            id: '2',
            name: 'Fanta',
            price: '5.00',
            quantity: 1,
            groupId: 104,
            description: '250ml Refreshing Beverage',
            image: 'https://shortysliquor.com.au/media/catalog/product/cache/2fcc3329aef4183c8e06230d7e06f8f3/f/a/fanta_250ml_climline.png',
        }, {
            id: '3',
            name: 'Orange Juice',
            price: '5.50',
            quantity: 1,
            groupId: 104,
            description: '250ml Refreshing Beverage',
            image: 'https://shortysliquor.com.au/media/catalog/product/cache/2fcc3329aef4183c8e06230d7e06f8f3/3/0/300_1.png',
        },
            {
                id: '1',
                name: 'Carlsberg',
                price: '6.00-$14.00',
                quantity: 1,
                groupId: 101,
                description: 'pots, schooners or pints of Carlsberg',
                image: 'https://ecampusontario.pressbooks.pub/app/uploads/sites/520/2019/12/2129H_0-300x296.jpg',
            }, {
                id: '2',
                name: '4x Gold',
                price: '4.00-$9.00',
                quantity: 1,
                groupId: 101,
                description: 'pots, schooners or pints of 4x Gold',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRn5Rr-L4BqiPS4X7-_dZB-meEGjarMZT6QGQ&usqp=CAU',
            }, {
                id: '3',
                name: 'Stella Artois',
                price: '8.00-$15.00',
                quantity: 1,
                groupId: 101,
                description: 'pots, schooners or pints of Stella Artois',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS142FHKyy6mADut_kysTaZW2LeiPux7LVy3Q&usqp=CAU',
            }
        ];
        return drink;
    }

    private getFood(): ProductDto[] {
        const food = [{
            id: '1',
            name: 'Steak & Chips',
            price: '16.00',
            groupId: 1,
            quantity: 1,
            description: '250gm Angus Steak with home cooked chips. It will fill you up!',
            image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/steak-and-chips-f385bf3.jpg?quality=90&resize=504,458',
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
        return food;
    }

    private getGroupItems(groupId: string): ProductDto[] {
        // replace with a better mapping
        if (groupId.length < 3) {
            return this.getFood().filter(group => group.groupId === parseInt(groupId, 0));
        } else {
            return this.getDrink().filter(group => group.groupId === parseInt(groupId, 0));
        }
    }

    private getConfirmation(processOrder) {
    }

    getResponseFor(method: string, urlWithParams: string, body: any) {
        let result = null;
        result = this.mockResponseMap[method][urlWithParams];
        if (result) {
            result = JSON.parse(JSON.stringify(result(body)));
        } else {
            for (let responseRegex of this.mockResponseRegexes) {
                if (result == null && urlWithParams.match(responseRegex.regex)) {
                    result = responseRegex.response(urlWithParams.match(responseRegex.regex), body);
                }
            }
        }

        if (result == null) {
            console.error('Demo route not matched: ' + urlWithParams);
        } else {
            console.table(result);
        }
        return result;
    }
}
