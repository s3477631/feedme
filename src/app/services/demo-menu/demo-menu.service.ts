import {Injectable} from '@angular/core';
import {ProductDto} from '../../model/product.dto';
import {GroupingDto} from '../../model/grouping.dto';

@Injectable({
    providedIn: 'root'
})
export class DemoMenuService {
    mockResponseMap = {
        'GET': {
            'api/drink': (): ProductDto[] => this.getDrink(),
            'api/food': (): ProductDto[] => this.getFood(),
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
            regex: /api\/drink/,
            response: (args, body) => {
                return this.getDrink();
            }
        }, {
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
            regex: /api\/itemed-food\/(.*)/,
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

    private getDrink(): ProductDto[] {
        const drink = [{
            id: '1',
            name: 'Coca-cola',
            price: '$6.00',
            quantity: 1,
            description: '250ml Refreshing Beverage',
            image: 'https://shortysliquor.com.au/media/catalog/product/cache/2fcc3329aef4183c8e06230d7e06f8f3/5/6/569-2.png',
        }, {
            id: '2',
            name: 'Fanta',
            price: '$5.00',
            quantity: 1,
            description: '250ml Refreshing Beverage',
            image: 'https://www.coca-cola.com.my/content/dam/journey/my/en/private/brands/hero-598x336/Fanta_Orange.png',
        }, {
            id: '3',
            name: 'Orange Juice',
            price: '$5.50',
            quantity: 1,
            description: '250ml Refreshing Beverage',
            image: 'https://shortysliquor.com.au/media/catalog/product/cache/2fcc3329aef4183c8e06230d7e06f8f3/3/0/300_1.png',
        }];
        return drink;
    }

    private getFood(): ProductDto[] {
        const food = [{
            id: '1',
            name: 'Steak & Chips',
            price: '$16.00',
            groupId: 1,
            quantity: 1,
            description: '250gm Angus Steak with home cooked chips. It will fill you up!',
            image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/steak-and-chips-f385bf3.jpg?quality=90&resize=504,458',
        }, {
            id: '2',
            name: 'Pizza',
            price: '$15.00',
            groupId: 1,
            quantity: 1,
            description: 'Authentic Italian Cuisine made by only the best chefs!',
            image: 'https://thebigmansworld.com/wp-content/uploads/2020/03/2-ingredient-pizza-dough-13.jpg',
        }, {
            id: '3',
            name: 'Burger',
            price: '$15.50',
            groupId: 1,
            quantity: 1,
            description: 'Chicken burger made with love, lettuce and plenty of special sauce',
            image: 'https://myfoodbook.com.au/sites/default/files/styles/single_recipe/public/recipe_photo/BuffaloBurger.jpg',
        },
            {
                id: '104',
                name: 'Dozen Freshly Shucked Oysters',
                price: '$38.00',
                quantity: 1,
                groupId: 2,
                description: 'Traditional kilpatrick oysters with bacon pieces w/ a twist of lemon  ',
                image: 'https://myfoodbook.com.au/sites/default/files/styles/single_recipe/public/recipe_photo/BuffaloBurger.jpg',
            },
            {
                id: '105',
                name: 'Garlic Bread',
                price: '$11.00',
                quantity: 1,
                groupId: 2,
                description: 'Home-made garlic bread with fresh gloves from the garden out back.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Garlicbread.jpg/1200px-Garlicbread.jpg',
            },
            {
                id: '106',
                name: 'Arancini Balls',
                price: '$18.50',
                quantity: 1,
                groupId: 2,
                description: 'Arancini Balls from Grandma`s special recipe',
                image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/arancini_balls-db2b1df.jpg',
            }

        ];
        return food;
    }

    private getGroupItems(groupId: string): ProductDto[]{
        return this.getFood().filter(group => group.groupId === parseInt(groupId, 0));
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
            console.info(result);
        }
        return result;
    }
}
