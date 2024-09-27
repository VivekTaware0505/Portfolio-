import { Routes } from '@angular/router';
import { PortpolioComponent } from './component/portpolio/portpolio.component';
import { ResuemComponent } from './component/resuem/resuem.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { UiuxdesignerComponent } from './component/uiuxdesigner/uiuxdesigner.component';
import { PowerbiComponent } from './component/powerbi/powerbi.component';
import { WebdevComponent } from './component/webdev/webdev.component';

export const routes: Routes = [

    {path:"", component: PortpolioComponent},
    {path:"resume",component:ResuemComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"uiux",component:UiuxdesignerComponent},
    {path:"powerbi",component:PowerbiComponent},
    {path:"web",component:WebdevComponent}
    

   
    
    
];
