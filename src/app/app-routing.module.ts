import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire'; 
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth'
import { environment } from '../environments/environment';
import { AuthenticateService } from './services/authenticate.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'matches', loadChildren: './matches/matches.module#MatchesPageModule' },
  { path: 'personal', loadChildren: './personal/personal.module#PersonalPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'newuser', loadChildren: './newuser/newuser.module#NewuserPageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule
  ],
  exports: [RouterModule],
  providers: [AngularFireModule,
              AngularFireAuthModule,
              AngularFireAuth,
              AuthenticateService]

})
export class AppRoutingModule { }
