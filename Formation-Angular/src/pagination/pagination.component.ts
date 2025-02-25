import { Component, model } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  template: '<p>Page numéro : {{page()}}</p> <button (click)="page.set(page() + 1)">Suivant</button>',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  page = model(1);
}
