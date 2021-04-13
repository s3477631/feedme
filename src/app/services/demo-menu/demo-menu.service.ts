import {Injectable} from '@angular/core';
import {ProductDto} from '../../model/product.dto';
import {GroupingDto} from '../../model/grouping.dto';
import {LocalStorageService} from 'ngx-webstorage';
import {FixturesInterface} from './fixtures.interface';
import {HospitalityFactory} from './hospitality/hospitality';
import {BeautyFactory} from './beauty/beauty';
import {ActivatedRoute} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class DemoMenuService {
    constructor(private localStorageService: LocalStorageService) {
    }

    mockResponseMap = {
        'GET': {},
        'POST': {
            '/api/submit-order': (body) => {
                return this.submitOrder(body);
            }
        }
    };
    fixtures: FixturesInterface;
    groupOne = [];
    groupOneItems = [];
    groupTwo = [];
    groupTwoItems = [];
    formFields = {};
    orders = [];
    tabs = [];
    groupOneDescription = {};
    groupTwoDescription = {};
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
        },
        {
            regex: /api\/get-form-fields\/(.*)/,
            response: (args, body) => {
                return this.getFormFields(args[1]);
            }
        }, {
            regex: /api\/set-demo/,
            response: (args, body) => {
                return this.setDemo();
            }
        }, {
            regex: /api\/get-tabs/,
            response: (args, body) => {
                return this.getTabs();
            }
        },
        {
            regex: /api\/get-group-description\/(.*)/,
            response: (args, body) => {
                return this.getGroupDescription(args[1]);
            }
        }
    ];

    private setDemo() {
        const serverUrl = this.localStorageService.retrieve('tenant');
        this.setDemoFixtures(serverUrl);
        return `setting ${serverUrl.substr(5, serverUrl.length)} demo`;
    }

    private foodGroups(): GroupingDto[] {
        return this.groupOne;
    }
    private getTabs() {
        return this.tabs;
    }
    private getGroupDescription(groupId: string){
        if ( parseInt(groupId, 0) === 0){
            return this.groupOneDescription;
        } else {
            return this.groupTwoDescription;
        }
    }
    private getDrink(): ProductDto[] {
        return this.groupTwoItems;
    }

    private getFood(): ProductDto[] {
        return this.groupOneItems;
    }

    private getFormFields(menuItemId: number) {
        return this.formFields[menuItemId];
    }

    private setDemoFixtures(severUrl: string) {
        switch (severUrl) {
            case 'show-food':
                this.fixtures = new HospitalityFactory();
                break;
            case 'show-beauty':
                this.fixtures = new BeautyFactory();
                break;
        }
        if (this.fixtures) {
            this.buildModel();
        }
    }

    private getGroups(groupType: string): ProductDto[] {
        if (groupType === 'one') {
            return this.groupOne;
        } else {
            return this.groupTwo;
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

    private buildModel() {
        this.orders = [];
        this.groupOne = [];
        this.groupOneItems = [];
        this.groupTwo = [];
        this.groupTwoItems = [];
        this.formFields = {};
        this.tabs = [];
        this.groupOneDescription = {};
        this.groupTwoDescription = {};
        this.fixtures.getTabs().forEach((tab) => {
            this.tabs.push(tab);
        });
        this.fixtures.getGroupOne().forEach((groupItem) => {
            this.groupOne.push(groupItem);
        });
        this.fixtures.getGroupTwo().forEach((groupItem) => {
            this.groupTwo.push(groupItem);
        });
        this.fixtures.getItemsOne().forEach((item) => {
            this.groupOneItems.push(item);
        });
        this.fixtures.getItemsTwo().forEach((item) => {
            this.groupTwoItems.push(item);
        });
        // possibly make as arrays instead of objects
        this.groupOneDescription = this.fixtures.getGroupOneDescription();
        this.groupTwoDescription = this.fixtures.getGroupTwoDescription();
        this.formFields = this.fixtures.getFormFields();
    }

    private submitOrder(processOrder) {
        this.orders.push(processOrder);
        const uniqueTabs = this.orders.reduce((acc, currentValue) => acc.some(tab => tab.id === currentValue.id) ? this.addOrderQuantity(acc, processOrder) : acc.concat(currentValue), []);
        this.orders = [];
        this.orders.push(...uniqueTabs);
        return processOrder;
    }

    private addOrderQuantity(acc, processNewOrder) {
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
