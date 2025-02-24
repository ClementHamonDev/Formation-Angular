import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-welcome-with-name',
  imports: [],
  templateUrl: './welcome-with-name.component.html',
  styleUrl: './welcome-with-name.component.css'
})
export class WelcomeWithNameComponent {

  name : WritableSignal<string> = signal("Clément");
}
