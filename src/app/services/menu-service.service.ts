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

    public getDrinkMenu(): Observable<ProductDto[]> {
        const url = 'api/drink';
        return this.http.get<ProductDto[]>(url);
    }

    public getMenuItems(groupId: number): Observable<ProductDto[]> {
        const url = `api/itemed-food/${groupId}`;
        return this.http.get<ProductDto[]>(url);
    }

    public getFoodMenu(): Observable<ProductDto[]> {
        const url = 'api/food';
        return this.http.get<ProductDto[]>(url);
    }

    public getMenuGroups(): Observable<GroupingDto[]> {
        const url = 'api/groups-food';
        return this.http.get<GroupingDto[]>(url);
    }
}
