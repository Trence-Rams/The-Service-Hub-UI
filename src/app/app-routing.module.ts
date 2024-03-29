import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ServicesComponent } from './components/services/services.component';
import { DetailsComponent } from './components/details/details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VerifyComponent } from './components/verify/verify.component';
import { ChatComponent } from './components/chat/chat.component';


const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },

  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: 'services/:id',
    component: ServicesComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  { path: 'profile',
    component: ProfileComponent
  },
  { path: 'auth/verify/token/:token', 
    component: VerifyComponent 
  },
  {
    path: 'chat',
    component: ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
