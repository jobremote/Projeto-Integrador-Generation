import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreComponent } from './sobre/sobre.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FeedComponent } from './feed/feed.component';
import { RodapeFeedComponent } from './rodape-feed/rodape-feed.component';
import { CRUDUsuarioComponent } from './crudusuario/crudusuario.component';
import { TemaComponent } from './tema/tema.component';
import { ValidMentorComponent } from './valid-mentor/valid-mentor.component'



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EntrarComponent,
    CadastrarComponent,
    SobreComponent,
    RodapeComponent,
    FeedComponent,
    RodapeFeedComponent,
    CRUDUsuarioComponent,
    TemaComponent,
    ValidMentorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
