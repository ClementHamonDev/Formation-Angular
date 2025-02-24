import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeWithNameComponent } from "./welcome-with-name/welcome-with-name.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { BidirectionnalParentComponent } from "./bidirectionnal-parent/bidirectionnal-parent.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent, BidirectionnalParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Formation-Angular';

  professionParent = signal("Eleve");

  receivedMessage: string = "";

  receiveMessage(message: string){
    console.log('Données reçues de l’enfant:', message);
    this.receivedMessage = message;
  }

  modify(){
    this.professionParent.set("Professeur")
  }
}
