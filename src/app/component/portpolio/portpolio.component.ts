import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portpolio',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './portpolio.component.html',
  styleUrl: './portpolio.component.css'
})
export class PortpolioComponent {

}
