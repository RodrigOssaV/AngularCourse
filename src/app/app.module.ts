import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* AppRoutingModule se debe importar a los demás modulos para utilizar routerLink */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** componentes/navbar 
 * esto es sin modularización
 import { NavbarComponent } from './componentes/navbar/navbar.component';
*/

/** importo modulo componentes 
 * al momento de importar un modulo, debo importar ese modulo
 * esto es con modularización
*/
import { ComponentesModule } from "./componentes/componentes.module";

/** importo los modulos de páginas
 * al momento de importar el modulo de páginas, debo importar ese modulo
 */
// import { HomeComponent } from './paginas/home/home.component';
// import { PrincipalComponent } from './paginas/principal/principal.component';
import { PaginasModule } from "./paginas/paginas.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule,
    PaginasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
