import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Importo los compontenes página */
import { HomeComponent } from "./home/home.component";
import { PrincipalComponent } from "./principal/principal.component";

@NgModule({
  declarations: [
    HomeComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    PrincipalComponent
  ]
})
export class PaginasModule { }
