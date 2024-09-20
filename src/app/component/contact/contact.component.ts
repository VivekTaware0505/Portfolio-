import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  Filname = "contactdata";
  fileinfo:any=""
  savedata:any = [];



  submit(){
    
    this.fileinfo.push(this.savedata);
    console.log(this.savedata);
    


  }

}
