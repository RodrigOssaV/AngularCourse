import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";

/** Importo los compontenes página */
import { HomeComponent } from "./home/home.component";
import { PrincipalComponent } from "./principal/principal.component";

@NgModule({
  declarations: [
    HomeComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HomeComponent,
    PrincipalComponent
  ]
})
export class PaginasModule { }
