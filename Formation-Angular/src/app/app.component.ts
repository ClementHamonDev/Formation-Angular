import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PremierComponent } from "./premier/premier.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PremierComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Formation-Angular';
}
