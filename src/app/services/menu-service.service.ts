import { Injectable } from '@angular/core';
import {ProductDto} from '../model/product.dto';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor(public http: HttpClient) { }
  public getDrinkMenu(): Observable<ProductDto[]> {
    const url = 'api/drink';
    return this.http.get<ProductDto[]>(url);
  }
}
