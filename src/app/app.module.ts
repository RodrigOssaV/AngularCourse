import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** componentes/navbar 
 * esto es sin modularización
*/
// import { NavbarComponent } from './componentes/navbar/navbar.component';

/** importo modulo componentes 
 * al momento de importar un modulo, debo importar ese modulo
 * esto es con modularización
*/
import { ComponentesModule } from "./componentes/componentes.module";

/** importo los modulos de páginas
 * al momento de importar el modulo de páginas, debo importar ese modulo
 */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
