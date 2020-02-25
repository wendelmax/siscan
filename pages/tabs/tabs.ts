import { Component } from '@angular/core';

import {CadastrarPage } from '../cadastrar/cadastrar';
import {CastrarPage } from '../castrar/castrar';
import {DoarPage } from '../doar/doar';
import {AdotarPage } from '../adotar/adotar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CadastrarPage;
  tab2Root = DoarPage;
  tab3Root = AdotarPage;
  tab4Root = CastrarPage;

  constructor() {

  }
}
