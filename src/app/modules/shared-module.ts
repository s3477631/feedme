import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ProductComponent} from './components/product/product.component';



@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [ProductComponent],
    exports: [
        ProductComponent
    ]
})
export class OrderPageModule {}
