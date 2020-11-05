import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductDto} from '../../../model/product.dto';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
    @Input()
    product: ProductDto;
    @Input()
    selected: string;
    @Input()
    id: string;

    @Output()
    public addProduct: EventEmitter<ProductDto> = new EventEmitter<ProductDto>();

    @Output()
    public selectProduct: EventEmitter<ProductDto> = new EventEmitter<ProductDto>();
    @Output()
    public subtractItem: EventEmitter<ProductDto> = new EventEmitter<ProductDto>();
    @Output()
    public filterChild: EventEmitter<ProductDto[]> = new EventEmitter<ProductDto[]>();

    constructor() {
    }

    public addItem(selectedItem: ProductDto): void {
        this.addProduct.emit(selectedItem);
    }

    public subtractOrderItem(selectedItem: ProductDto): void {
        this.subtractItem.emit(selectedItem);
    }

    private openCard(product: ProductDto, id: string): void {
        // if(product.parent){
        //     this.filterChild.emit(product[0]);
        // }

        this.selectProduct.emit(product);
        document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
    }
}
