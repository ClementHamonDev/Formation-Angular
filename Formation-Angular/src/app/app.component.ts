import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeWithNameComponent } from "./welcome-with-name/welcome-with-name.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { BidirectionnalParentComponent } from "./bidirectionnal-parent/bidirectionnal-parent.component";
import { CommonModule } from '@angular/common';
import { PaginationComponent } from "../pagination/pagination.component";
import { AppListComponent } from "./app-list/app-list.component";
import { CardComponent } from "./components/card-component/card-component.component";
import { DynamicParentComponent } from "./components/dynamic-parent/dynamic-parent.component";
import { ParentComponent } from "./components/parent-outlet/parent-outlet.component";
import { ModalComponent} from "./components/modal/modal.component";
import { ButtonComponent } from "./events/button/button.component";
import { HoverboxComponent } from "./events/hoverbox/hoverbox.component";
import { KeytrackerComponent } from "./events/keytracker/keytracker.component";
import { ConnectionComponent } from "./conditions/connection/connection.component";
import { PermissionsComponent } from "./conditions/permissions/permissions.component";
import { RoleSwitchComponent } from "./conditions/role-switch/role-switch.component";
import { FormulaireComponent } from "./formulaire/formulaire.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent, BidirectionnalParentComponent, CommonModule, PaginationComponent, CommonModule, CardComponent, ButtonComponent, HoverboxComponent, KeytrackerComponent, ConnectionComponent, PermissionsComponent, RoleSwitchComponent, FormulaireComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Formation-Angular';

  professionParent = signal("Eleve");

  receivedMessage: string = "";

  names = ["Alice", "Bob", "Charlie"];

  currentPage = signal<number>(1);

  selectedComponent = PaginationComponent;

  receiveMessage(message: string){
    console.log('Données reçues de l’enfant:', message);
    this.receivedMessage = message;
  }

  modify(){
    this.professionParent.set("Professeur")
  }

  users = [
    { id : 1, name : "Alice", age : 25 },
    { id : 2, name : "Bob", age : 30 },
    { id : 3, name : "Charlie", age : 35 }
  ];

  trackById(index: number, name: any){
    return name.id;
  }

  suivant(){
    this.currentPage.set(this.currentPage() + 1);
  }

  console(){
    console.log("console")
  }

  isLoggedIn = true;
  isPremium = true;

  condition = "c";
}
