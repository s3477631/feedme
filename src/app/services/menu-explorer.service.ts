import { Injectable } from '@angular/core';
import {MenuServiceService} from './menu-service.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProductDto} from '../model/product.dto';

@Injectable({
  providedIn: 'root'
})
export class MenuExplorerService {
  private _drink: BehaviorSubject<ProductDto[]> = new BehaviorSubject<ProductDto[]>([]);
  public $drink: Observable<ProductDto[]> = this._drink.asObservable();

  private _food: BehaviorSubject<ProductDto[]> = new BehaviorSubject<ProductDto[]>([]);
  public $food: Observable<ProductDto[]> = this._food.asObservable();

  constructor(public menuService: MenuServiceService) { }
  public getDrinkMenu(): void{
    this.menuService.getDrinkMenu().subscribe((data) => {
      this._drink.next(data);
    });
  }
  public getFoodMenu(): void{
    this.menuService.getFoodMenu().subscribe((data) => {
      this._food.next(data);
    });
  }
}
