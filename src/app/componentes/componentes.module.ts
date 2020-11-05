import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";

/** importamos el componente navbar 
 * los modulos son los encargados de contener todos los componentes
 * de la página a la cual est asociado.
 * una vez importados, declaramos y luego exportamos los componentes.
*/
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class ComponentesModule { }
