import { Component } from '@angular/core';
import { SecondComponent } from "../second/second.component";

@Component({
  selector: 'app-premier',
  imports: [SecondComponent],
  templateUrl: './premier.component.html',
  styleUrl: './premier.component.css'
})
export class PremierComponent {

}
