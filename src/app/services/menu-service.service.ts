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
    public getOrders(): Observable<ProductDto[]>{
        const url = '/api/orders/';
        return this.http.get<ProductDto[]>(url);
    }
    public getOrderTotal(): Observable<number>{
        const url = '/api/order-total/';
        return this.http.get<number>(url);
    }
    public getChildItems(itemId: number): Observable<ProductDto>{
        const url = `/api/get-menu-item/${itemId}`;
        const test =  this.http.get<ProductDto>(url);
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
    public submitOrder(orderBody) {
        console.log(orderBody);
        const url = '/api/submit-order';
        const test = this.http.post<any>(url, orderBody);
        test.subscribe(val => val);
        return test;
    }
}
