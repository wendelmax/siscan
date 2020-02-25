import { Component } from '@angular/core';

import {CadastrarPage } from '../cadastrar/cadastrar';
import {CastrarPage } from '../castrar/castrar';
import {ReciboPage } from '../recibo/recibo';
import {AdotarPage } from '../adotar/adotar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CadastrarPage;
  tab2Root = ReciboPage;
  tab3Root = AdotarPage;
  tab4Root = CastrarPage;

  constructor() {

  }
}
