import { Component } from '@angular/core';

import { LibraryPage } from '../library/library';
import { SettingsPage } from '../settings/settings';
import { ProfilePage } from '../profile/profile';
import {ValidatePage} from "../validate/validate";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = LibraryPage;
  tab3Root = ValidatePage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
