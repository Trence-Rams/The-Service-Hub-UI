import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ServicesComponent } from './components/services/services.component';
import { DetailsComponent } from './components/details/details.component';
import { CategoryService } from './services/category.service';
import { ProfileComponent } from './components/profile/profile.component';
import { VerifyComponent } from './components/verify/verify.component';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    CategoriesComponent,
    ServicesComponent,
    DetailsComponent,
    ProfileComponent,
    VerifyComponent,
    ChatComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
