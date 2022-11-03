import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RubricaPage } from './rubrica/rubrica.page';
import { FormComponent } from './rubrica/form/form.component';
import { ElencoComponent } from './rubrica/elenco/elenco.component';
import { DettagliComponent } from './rubrica/dettagli/dettagli.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    RubricaPage,
    FormComponent,
    ElencoComponent,
    DettagliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
