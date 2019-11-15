import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SettingsService } from '../services/settings.service';
import { ExpandableComponent } from '../components/expandable/expandable.component';

import { IonicModule } from '@ionic/angular';

import { MatchesPage } from './matches.page';

const routes: Routes = [
  {
    path: '',
    component: MatchesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MatchesPage, ExpandableComponent]
})
export class MatchesPageModule {}
