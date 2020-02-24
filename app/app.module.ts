import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CadastrarPage } from '../pages/cadastrar/cadastrar';
import { DoarPage } from '../pages/doar/doar';
import { AdotarPage } from '../pages/adotar/adotar';
import { CastrarPage } from '../pages/castrar/castrar';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    CadastrarPage,
    DoarPage,
    AdotarPage,
    CastrarPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastrarPage,
    CastrarPage,
    AdotarPage,
    DoarPage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
