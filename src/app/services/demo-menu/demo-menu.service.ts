import {Injectable} from '@angular/core';
import {ProductDto} from '../../model/product.dto';

@Injectable({
    providedIn: 'root'
})
export class DemoMenuService {
    mockResponseMap = {
        'GET': {
            'api/drink': (): ProductDto[] => this.getDrink(),
            'api/food': () => this.getFood(),
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
        }
    ];

    constructor() {
    }

    private getDrink(): ProductDto[] {
        const drink = [{
            id: '1',
            name: 'Coca-cola',
            price: '6.00',
            description: '250ml Refreshing Beverage',
            image: '',
        }, {
            id: '2',
            name: 'Fant',
            price: '5.00',
            description: '250ml Refreshing Beverage',
            image: '',
        }, {
            id: '3',
            name: 'Orange Juice',
            price: '5.50',
            description: '250ml Refreshing Beverage',
            image: '',
        }];
        return drink;
    }

    private getFood() {
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
