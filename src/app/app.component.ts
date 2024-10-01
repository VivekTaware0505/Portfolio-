import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ResuemComponent } from "./component/resuem/resuem.component";
import { PortpolioComponent } from "./component/portpolio/portpolio.component";
import { NavbarComponent } from "./component/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResuemComponent, PortpolioComponent, NavbarComponent,RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
