import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {ProfileFormComponent} from './components/profile-form/profile-form.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
  ,
  {
    path: 'profile',
    // loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
     component: ProfileFormComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
