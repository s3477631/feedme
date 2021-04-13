import {Injectable} from '@angular/core';
import {ProductDto} from '../model/product.dto';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GroupingDto} from '../model/grouping.dto';

@Injectable({
    providedIn: 'root'
})
export class MenuServiceService {

    constructor(public http: HttpClient) {
    }
    public setDemo(){
        const url = '/api/set-demo/';
        const test = this.http.get(url);
        test.subscribe(val => console.log(val));
    }
    // make a dto for this
    public getTabs(){
        const url = '/api/get-tabs/';
        return this.http.get(url);
    }
    public getOrders(): Observable<ProductDto[]> {
        const url = '/api/orders/';
        return this.http.get<ProductDto[]>(url);
    }

    public getNumberOrders(): Observable<number> {
        const url = '/api/number-of-orders/';
        return this.http.get<number>(url);
    }

    public getOrderTotal(): Observable<number> {
        const url = '/api/order-total/';
        return this.http.get<number>(url);
    }

    public getChildItems(itemId: number): Observable<ProductDto> {
        const url = `/api/get-menu-item/${itemId}`;
        const test = this.http.get<ProductDto>(url);
        test.subscribe(value => console.log(value));
        return test;
    }

    public getDrinkMenu(): Observable<ProductDto[]> {
        const url = 'api/drink';
        return this.http.get<GroupingDto[]>(url);
    }

    public getMenuItems(groupId: number): Observable<ProductDto[]> {
        const url = `api/get-first-child-item/${groupId}`;
        return this.http.get<ProductDto[]>(url);
    }

    public getFoodMenu(): Observable<ProductDto[]> {
        const url = 'api/food';
        return this.http.get<ProductDto[]>(url);
    }

    public getMenuGroups(groupName: string): Observable<GroupingDto[]> {
        const url = `api/groups/${groupName}`;
        return this.http.get<GroupingDto[]>(url);
    }
    public getFormFields(menuItemId: string) {
        const url = `/api/get-form-fields/${menuItemId}`;
        return this.http.get(url);
    }
    public getGroupDescription(groupId: number) {
        const url = `api/get-group-description/${groupId}`;
        return this.http.get(url);
    }

    public submitOrder(orderBody) {
        const url = '/api/submit-order';
        const test = this.http.post<any>(url, orderBody);
        test.subscribe(val => val);
        return test;
    }
}
