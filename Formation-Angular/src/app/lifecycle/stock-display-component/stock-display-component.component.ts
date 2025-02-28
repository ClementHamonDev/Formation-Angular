import { Component } from '@angular/core';
import { Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stock-display-component',
  imports: [],
  templateUrl: './stock-display-component.component.html',
  styleUrl: './stock-display-component.component.css'
})
export class StockDisplayComponentComponent implements OnChanges {
  @Input() quantity: number = 0;
  @Input() change: number = 0;
  previousQuantity: number = 0;
  stockStatus: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['quantity']) {
      if (changes['quantity'].currentValue < 0) {
        this.quantity = 0;
        alert('Stock négatif !');
      } else {
        this.previousQuantity = changes['quantity'].previousValue;
      }
      this.stockStatus = this.quantity > this.previousQuantity ? 'Augmentation' : 'Baisse';
    }

  }

}

