import {Injectable} from '@angular/core';
import {ProductDto} from '../../model/product.dto';
import {GroupingDto} from '../../model/grouping.dto';

@Injectable({
    providedIn: 'root'
})
export class DemoMenuService {
    mockResponseMap = {
        'GET': {},
        'POST': {
            '/api/submit-order': (body) => {
                return this.submitOrder(body);
            }
        }
    };
    drinkList: ProductDto[];
    foodList: ProductDto[];
    orders = [];
    mockResponseRegexes = [
        {
            regex: /api\/orders/,
            response: (args, body) => {
                return this.getOrder();
            }
        },
        {
            regex: /api\/order-total/,
            response: (args, body) => {
                return this.orderTotal();
            }
        },
        {
            regex: /api\/number-of-orders/,
            response: (args, body) => {
                return this.totalNumberItems();
            }
        },
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
            regex: /api\/groups\/(.*)/,
            response: (args, body) => {
                return this.getGroups(args[1]);
            }
        },
        {
            regex: /api\/get-first-child-item\/(.*)/,
            response: (args, body) => {
                return this.getMenuItems(args[1]);
            }
        },
        {
            regex: /api\/get-menu-item\/(.*)/,
            response: (args, body) => {
                return this.getItems(args[1]);
            }
        }
    ];

    constructor() {
    }

    private foodGroups(): GroupingDto[] {
        const foodGroups = [{
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
        return drinkGroups;
    }

    private getDrink(): ProductDto[] {
        const drink = [{
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
        return food;
    }

    private getGroups(groupType: string): ProductDto[] {
        if (groupType === 'food') {
            return this.foodGroups();
        } else {
            return this.drinkGroups();
        }
    }

    private getOrder() {
        return this.orders;
    }

    private orderTotal() {
        return this.orders.reduce((acc, cur) => {
            return acc + (parseFloat(cur.price) * parseFloat(cur.OrderQuantity));
        }, 0.00);
    }

    private totalNumberItems() {
        return this.orders.reduce((acc, cur) => {
            return acc + parseInt(cur.OrderQuantity, 0);
        }, 0);
    }

    private getMenuItems(groupId): ProductDto[] {
        if (groupId.length === 1) {
            const food = this.getFood().filter(group => group.groupId === parseInt(groupId, 0));
            return food;
        } else {
            const drink = this.getDrink().filter(group => group.groupId === parseInt(groupId, 0));
            return drink;
        }
    }

    private getItems(itemId): ProductDto {
        if (itemId.length === 1) {
            const food = this.getFood().filter(item => parseInt(item.id, 0) === parseInt(itemId, 0));
            return food[0];
        } else {
            const drink = this.getDrink().filter(item => parseInt(item.id, 0) === parseInt(itemId, 0));
            return drink[0];
        }

    }


    private submitOrder(processOrder) {
        this.orders.push(processOrder);
        console.log(this.orders);
        const uniqueTabs = this.orders.reduce((acc, currentValue) => acc.some(tab => tab.id === currentValue.id) ? this.addOrderQuantity(acc, processOrder) : acc.concat(currentValue), []);
        this.orders = [];
        this.orders.push(...uniqueTabs);
        return processOrder;
    }

    private addOrderQuantity(acc, processNewOrder) {
        console.warn('-c-c-c-c-c-');
        console.log(processNewOrder.OrderQuantity);
        console.warn('-c-c-c-c-c-');
        const added = acc.reduce((cum, cur) => {
            if (cur.id === processNewOrder.id) {
                cum = cur.OrderQuantity += processNewOrder.OrderQuantity;
            }
            return cum;
        }, []);
        console.log(added);
        return acc;
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
            // console.table(result);
        }
        return result;
    }
}
